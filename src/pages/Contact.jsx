import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// components
import Heading from "../components/layout/Heading";
import FormError, { ValidationError } from "../components/common/FormError";
import { baseUrl } from "../constants/api";
// styles
import styled from "styled-components";

const url = baseUrl + "messages";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  message: yup.string().min(20).required("Minimum 20 characters"),
});

function Contact() {
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

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log("data", data);
    try {
      const response = await axios.post(url, {
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
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
      <Heading heading="Contact us" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <label>Your name:</label>
            <input type="name" {...register("name")} />
            {errors && errors.name && (
              <ValidationError>{errors.name.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Your email:</label>
            <input type="email" {...register("email")} />
            {errors && errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Message:</label>
            <textarea type="message" {...register("message")} />
            {errors && errors.message && (
              <ValidationError>{errors.message.message}</ValidationError>
            )}
          </div>
          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </StyledForm>
    </>
  );
}

export default Contact;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  max-width: 400px;
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
  }
`;
