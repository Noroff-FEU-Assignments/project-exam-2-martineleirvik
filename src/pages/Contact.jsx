import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import Heading from "../components/layout/Heading";
import useAxios from "../components/hooks/useAxios";
import FormError from "../components/common/FormError";
import { baseUrl } from "../constants/api";
import axios from "axios";
// styles
import styled from "styled-components";

const url = baseUrl + "messages";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter your email"),
  message: yup.string().min(20).required("Minimum 20 characters"),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log("data", data);
    try {
      const response = await axios.post(url, {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  fieldset {
    background-color: ${(props) => props.theme.white};
    padding: 25px 40px;
    margin: 10px auto;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 15px;
    width: 300px;
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
