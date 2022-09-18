import { useContext, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//components
import Heading from "../components/layout/Heading";
import AuthContext from "../components/context/AuthContext";
import useAxios from "../components/hooks/useAxios";
import FormError, { ValidationError } from "../components/common/FormError";
import { baseUrl } from "../constants/api";
//styles
import styled from "styled-components";
import Footer from "../components/layout/Footer";

const url = baseUrl + "bookings";

const schema = yup.object().shape({
  name: yup.string().required("Name of accomodation"),
  image: yup.string().required("Place an image"),
  popular: yup.boolean().oneOf([false, true]),
  price: yup.number().required("Price of accomodation"),
  description: yup.string().required("Description of accomodation"),
  shortdescription: yup
    .string()
    .max(100)
    .required("One line of description that goes in the frontpage"),
});

export default function NewEstablishment() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
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

    console.log("data", data);

    const formData = new FormData();
    const bookingData = JSON.stringify({
      name: data.name,
      description: data.description,
      shortdescription: data.shortdescription,
      popular: data.popular,
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
      setSubmitting(json);
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
            <input type="text" {...register("name")} />
            {errors && errors.name && (
              <ValidationError>{errors.name.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Image:</label>
            <input type="file" {...register("image")} />
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
            <input type="text" {...register("price")} />
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

          <button>
            {submitting ? "Publishing..." : "Publish establishment"}
          </button>
        </fieldset>
      </StyledForm>
      <Footer />
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
    .popular {
      display: flex;
      flex-direction: row;
      label {
        margin-right: 15px;
      }
      input {
        margin-top: 3px;
      }
    }
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
      margin-top: 30px;
    }
    .date-container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;
