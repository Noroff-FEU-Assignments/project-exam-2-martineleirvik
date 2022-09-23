import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// components
import Heading from "../components/layout/Heading";
import FormError, { ValidationError } from "../components/common/FormError";
import { baseUrl } from "../constants/api";
// styles
import styled from "styled-components";

const url = baseUrl + "enquiries";

const schema = yup.object().shape({
  accommodationName: yup.string(),
  name: yup.string().required("Enter your name"),
  email: yup.string().email("Invalid email").required("Enter your email"),
  message: yup
    .string("Minimum 20 characters")
    .min(20, "Minimum 20 characters")
    .required("Minimum 20"),
  dateFrom: yup.date().typeError("Enter a date").required(),
  dateTo: yup.date().typeError("Enter a date").required(),
});

function Enquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { name } = useParams();

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log("data", data);
    try {
      const response = await axios.post(url, {
        data: {
          accommodationName: name,
          email: data.email,
          message: data.message,
          dateTo: data.dateTo,
          dateFrom: data.dateFrom,
        },
      });
      if (response.data) {
        reset();
      }

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
      <Heading heading="Make an enquiry" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <label>Accommodation name:</label>
            <input
              type="text"
              disabled={true}
              placeholder={name}
              {...register("accommodationName")}
            />
            {errors && errors.accommodationName && (
              <ValidationError>
                {errors.accommodationName.message}
              </ValidationError>
            )}
          </div>
          <div>
            <label>Your name:</label>
            <input type="text" {...register("name")} />
            {errors && errors.name && (
              <ValidationError>{errors.name.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Your email:</label>
            <input type="text" {...register("email")} />
            {errors && errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Your message:</label>
            <textarea type="message" {...register("message")} />
            {errors && errors.message && (
              <ValidationError>{errors.message.message}</ValidationError>
            )}
          </div>
          <div className="date-container">
            <div>
              <label>From date:</label>
              <input type="date" {...register("dateFrom")} />
              {errors && errors.dateFrom && (
                <ValidationError>{errors.dateFrom.message}</ValidationError>
              )}
            </div>
            <div>
              <label>To date:</label>
              <input type="date" {...register("dateTo")} />
              {errors && errors.dateTo && (
                <ValidationError>{errors.dateTo.message}</ValidationError>
              )}
            </div>
          </div>

          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </StyledForm>
    </>
  );
}

export default Enquiry;

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
      margin: 5px 0 10px 0;
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
      margin-top: 10px;
    }
    .date-container {
      display: flex;
      flex-direction: row;
      div {
        align-items: center;
        width: 50%;
        input {
          max-width: 100px;
        }
      }
    }
  }
`;
