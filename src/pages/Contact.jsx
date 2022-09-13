import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// components
import Heading from "../components/layout/Heading";
import FormError from "../components/common/FormError";
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
  message: yup.string().min(2).required("Minimum 20 characters"),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const { register, handleSubmit, reset, errors } = useForm({
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
              <FormError>{errors.name.message}</FormError>
            )}
          </div>
          <div>
            <label>Your email:</label>
            <input type="email" {...register("email")} />
            {errors && errors.email && (
              <FormError>{errors.email.message}</FormError>
            )}
          </div>
          <div>
            <label>Message:</label>
            <textarea type="message" {...register("message")} />
            {errors && errors.message && (
              <FormError>{errors.message.message}</FormError>
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
  width: 300px;
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
      }
      textarea {
        margin: 7px 0;
        height: 70px;
      }
    }
    button {
      width: 100%;
    }
  }
`;
