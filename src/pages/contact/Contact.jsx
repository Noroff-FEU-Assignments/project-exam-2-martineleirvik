import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// components
import Heading from "../../components/layout/Heading";
import {
  ValidationError,
  FormError,
  FormSuccess,
} from "../../components/common/FormMessages";
import { baseUrl } from "../../constants/api";
// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/layout/footer/Footer";
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import { StyledForm } from "./Contact.styled";

const url = baseUrl + "messages";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  message: yup
    .string()
    .min(20, "Minimum 20 characters")
    .required("Minimum 20 characters"),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setsuccess] = useState(false);

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
      <Heading heading="Contact us" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          {success && (
            <FormSuccess>
              <FontAwesomeIcon icon={faCircleCheck} />
            </FormSuccess>
          )}
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
            <label>Message (minimum 20 characters):</label>
            <textarea type="message" {...register("message")} />
            {errors && errors.message && (
              <ValidationError>{errors.message.message}</ValidationError>
            )}
          </div>
          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </StyledForm>
      <Footer />
    </StyledContainer>
  );
}

export default Contact;
