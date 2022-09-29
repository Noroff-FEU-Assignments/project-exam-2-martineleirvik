import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//components
import Heading from "../../components/layout/Heading";
import AuthContext from "../../components/context/AuthContext";
import {
  ValidationError,
  FormError,
  FormSuccess,
} from "../../components/common/FormMessages.jsx";
import { baseUrl } from "../../constants/api";
//styles
import Footer from "../../components/layout/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import { StyledForm } from "./NewEstablishment.styled";

const url = baseUrl + "bookings?populate=*";

const schema = yup.object().shape({
  name: yup.string().required("Name of accomodation"),
  image: yup
    .mixed()
    .test("file", "You need to add an image", (value) => {
      return value.length > 0;
    })
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 200000;
    })
    .test("type", "Only supporting jpeg & jpg", (value) => {
      return value && value[0].type === "image/jpeg" && "image.jpg";
    }),
  popular: yup.boolean().oneOf([false, true]),
  price: yup
    .number()
    .typeError("Price of accommodation")
    .required("Price of accomodation"),
  description: yup.string().required("Description of accomodation"),
  shortdescription: yup
    .string()
    .max(100, "Max 100 characters")
    .required("One line of description that goes in the frontpage"),
  category: yup.string().required("Select one category"),
});

export default function NewEstablishment() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [selectDropdown, setSelectDropdown] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [success, setsuccess] = useState(false);
  const [auth] = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function submitEstablish(data) {
    setSubmitting(true);
    setServerError(null);

    const formData = new FormData();
    const bookingData = JSON.stringify({
      name: data.name,
      description: data.description,
      price: data.price,
      shortdescription: data.shortdescription,
      popular: data.popular,
      category: Number(data.category),
    });

    formData.append("files.image", data.image[0]);
    formData.append("data", bookingData);

    const options = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log("response", json);
      reset();
      setSubmitting(json);
      setsuccess(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <StyledContainer>
      <Heading heading="New establishment" />
      <StyledForm onSubmit={handleSubmit(submitEstablish)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          {success && (
            <FormSuccess>
              <FontAwesomeIcon icon={faCircleCheck} />
            </FormSuccess>
          )}
          <div>
            <label>Name of accommodation:</label>
            <input type="text" {...register("name")} />
            {errors && errors.name && (
              <ValidationError>{errors.name.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Image:</label>
            <input type="file" name="file" {...register("image")} />
            {errors && errors.image && (
              <ValidationError>{errors.image.message}</ValidationError>
            )}
          </div>
          <div className="popular">
            <label>Popular accomodation? (check if popular):</label>
            <input type="checkbox" {...register("popular")} />
            {errors && errors.popular && (
              <ValidationError>{errors.popular.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Price:</label>
            <input type="number" {...register("price")} />
            {errors && errors.price && (
              <ValidationError>{errors.price.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Description:</label>
            <textarea type="text" {...register("description")} />
            {errors && errors.description && (
              <ValidationError>{errors.description.message}</ValidationError>
            )}
          </div>
          <div>
            <label>
              Wrtite one short description that sums up the accomodation (max
              100 characters):
            </label>
            <input type="text" {...register("shortdescription")} />
            {errors && errors.shortdescription && (
              <ValidationError>
                {errors.shortdescription.message}
              </ValidationError>
            )}
          </div>
          <div>
            <label>Category:</label>
            <select
              value={selectDropdown}
              onChange={(e) => setSelectDropdown(e.target.value)}
              {...register("category")}
            >
              <option></option>
              <option value="1">Hotel</option>
              <option value="2">Bed and Breakfast</option>
              <option value="3">Guesthouse</option>
            </select>
            {errors && errors.category && (
              <ValidationError>{errors.category.message}</ValidationError>
            )}
          </div>
          <button>
            {submitting ? "Publishing..." : "Publish establishment"}
          </button>
        </fieldset>
      </StyledForm>
      <Footer />
    </StyledContainer>
  );
}
