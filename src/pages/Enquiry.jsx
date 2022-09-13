import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// components
import Heading from "../components/layout/Heading";
import FormError from "../components/common/FormError";
import { baseUrl } from "../constants/api";
// styles
import styled from "styled-components";

const url = baseUrl + "enquiries";

const schema = yup.object().shape({
  accommodationName: yup.string(),
  name: yup.string().required("Enter your name"),
  email: yup.string().email("Invalid email").required("Enter your email"),
  message: yup.string(),
  dateFrom: yup.date().required("Enter a date"),
  dateTo: yup.date().required("Enter a date"),
});

function Enquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const { register, handleSubmit, reset, errors } = useForm({
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
              <FormError>{errors.accommodationName.message}</FormError>
            )}
          </div>
          <div>
            <label>Your name:</label>
            <input type="text" {...register("name")} />
            {errors && errors.name && (
              <FormError>{errors.name.message}</FormError>
            )}
          </div>
          <div>
            <label>Your email:</label>
            <input type="text" {...register("email")} />
            {errors && errors.email && (
              <FormError>{errors.email.message}</FormError>
            )}
          </div>
          <div>
            <label>Your message:</label>
            <textarea type="message" {...register("message")} />
            {errors && errors.message && (
              <FormError>{errors.message.message}</FormError>
            )}
          </div>
          <div className="date-container">
            <div>
              <label>From date:</label>
              <input type="date" {...register("dateFrom")} />
              {errors && errors.dateFrom && (
                <FormError>{errors.dateFrom.message}</FormError>
              )}
            </div>
            <div>
              <label>To date:</label>
              <input type="date" {...register("dateTo")} />
              {errors && errors.dateTo && (
                <FormError>{errors.dateTo.message}</FormError>
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
      margin: 5px 0;
      display: flex;
      flex-direction: column;
      input {
        margin: 7px 0;
        border: 1px solid ${(props) => props.theme.footer};
      }
      textarea {
        margin: 7px 0;
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
