import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import Heading from "../components/layout/Heading";
import useAxios from "../components/hooks/useAxios";
import FormError from "../components/common/FormError";
import { baseUrl } from "../constants/api";

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
  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);
    try {
      const response = await fetch(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
    return (
      <>
        <Heading heading="Contact us" />
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverError && <FormError>{serverError}</FormError>}
          <fieldset disabled={submitting}>
            <div>
              <input
                type="name"
                placeholder="name"
                {...register("name", { required: true })}
              />
              {errors.name && <FormError>{errors.name.message}</FormError>}
            </div>
            <div>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
              {errors.email && <FormError>{errors.email.message}</FormError>}
            </div>
            <div>
              <input
                type="message"
                placeholder="message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
            </div>

            <button>{submitting ? "Submitting..." : "Submit"}</button>
          </fieldset>
        </form>
      </>
    );
  }
}
