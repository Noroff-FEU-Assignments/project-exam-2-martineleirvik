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

const url = baseUrl + "enquiry";

const schema = yup.object().shape({
  name: yup.string().required("Enter the accomodations name"),
  price: yup.number().required("Enter the price"),
  description: yup.string().required("Enter a description"),
});

function Enquiry() {
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
      <Heading heading="Enquiry" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <label>Name:</label>
            <input type="name" {...register("name")} />
            {errors && errors.name && (
              <FormError>{errors.name.message}</FormError>
            )}
          </div>
          <div>
            <label>Price:</label>
            <input type="price" {...register("price")} />
            {errors && errors.price && (
              <FormError>{errors.price.message}</FormError>
            )}
          </div>
          <div>
            <label>Description:</label>
            <textarea type="description" {...register("description")} />
            {errors && errors.description && (
              <FormError>{errors.description.message}</FormError>
            )}
          </div>
          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </form>
    </>
  );
}

export default Enquiry;
