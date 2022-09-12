import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//components
import Heading from "../components/layout/Heading";
import AuthContext from "../components/context/AuthContext";
import useAxios from "../components/hooks/useAxios";
import FormError from "../components/common/FormError";
import { baseUrl } from "../constants/api";
//styles
import styled from "styled-components";

const schema = yup.object().shape({
  name: yup.string().required("Name of accomodation"),
});

export default function NewEstablishment() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
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
        name: data.name,
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
      <form onSubmit={handleSubmit(submitEstablish)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <label>Name</label>
            <input {...register("name")} />
            {errors && errors.name && (
              <FormError>{errors.name.message}</FormError>
            )}
          </div>
          <button>{submitting ? "Publishing..." : "Publish"}</button>
        </fieldset>
      </form>
    </>
  );
}
