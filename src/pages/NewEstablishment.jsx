import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//components
import Heading from "../components/layout/Heading";
import AuthContext from "../components/context/AuthContext";
import useAxios from "../components/hooks/useAxios";
import FormError, { ValidationError } from "../components/common/FormError";
//styles
import styled from "styled-components";

const schema = yup.object().shape({
  name: yup.string().required("Name of accomodation"),
  image: yup.mixed().required("Place an image"),
  popular: yup.boolean().oneOf([false, true]),
  price: yup.number().required("Price of accomodation"),
  description: yup.string().required("Description of accomodation"),
  shortdescription: yup
    .string()
    .max(30)
    .required("One line of description that goes in the frontpage"),
});

export default function NewEstablishment() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const http = useAxios();

  async function submitEstablish(data) {
    setSubmitting(true);
    setServerError(null);

    console.log("data", data);

    try {
      const response = await http.post("bookings", {
        data: {
          name: data.name,
          image: data.image,
          popular: data.popular,
          price: data.price,
          description: data.description,
          shortdescription: data.shortdescription,
        },
      });
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <Heading heading="New establishment" />
      <StyledForm onSubmit={handleSubmit(submitEstablish)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <label>Name of accommodation:</label>
            <input type="name" {...register("name")} />
            {errors && errors.name && (
              <ValidationError>{errors.name.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Image:</label>
            <input type="text" {...register("image")} />
            {errors && errors.image && (
              <ValidationError>{errors.image.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Popular accomodation? (check if popular):</label>
            <input type="checkbox" {...register("popular")} />
            {errors && errors.popular && (
              <ValidationError>{errors.popular.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Price:</label>
            <input type="price" {...register("price")} />
            {errors && errors.price && (
              <ValidationError>{errors.price.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Description:</label>
            <textarea type="description" {...register("description")} />
            {errors && errors.description && (
              <ValidationError>{errors.description.message}</ValidationError>
            )}
          </div>
          <div>
            <label>
              Wrtite one line of description that sums up the accomodation (max
              30 characters)
            </label>
            <input type="shortdescription" {...register("shortdescription")} />
            {errors && errors.shortdescription && (
              <ValidationError>
                {errors.shortdescription.message}
              </ValidationError>
            )}
          </div>

          <button>
            {submitting ? "Publishing..." : "Publish establishment"}
          </button>
        </fieldset>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  max-width: 500px;
  fieldset {
    background-color: ${(props) => props.theme.white};
    padding: 25px 40px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 15px;
    margin-top: 10px;
    div {
      margin: 5px 0;
      display: flex;
      flex-direction: column;
      input {
        margin: 7px 0 0 0;
        border: 1px solid ${(props) => props.theme.footer};
      }
      textarea {
        margin: 7px 0 0 0;
        height: 100px;
        border: 1px solid ${(props) => props.theme.footer};
      }
    }
    button {
      width: 100%;
    }
    .date-container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;
