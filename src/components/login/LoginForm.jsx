import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseUrl, tokenPath } from "../../constants/api";
// components
import { ValidationError, FormError } from "../common/FormMessages";
import AuthContext from "../context/AuthContext";
// styles
import { StyledForm } from "./LoginForm.styled";

const url = baseUrl + tokenPath;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(url, {
        identifier: data.username,
        password: data.password,
      });
      console.log("response", response.data);
      setAuth(response.data);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="loginContainer">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {loginError && (
          <FormError>Error: Values not valid for login.</FormError>
        )}
        <fieldset disabled={submitting}>
          <div>
            <label>Username/email</label>
            <input type="text" {...register("username")} />
            {errors && errors.username && (
              <ValidationError>{errors.username.message}</ValidationError>
            )}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors && errors.password && (
              <ValidationError>{errors.password.message}</ValidationError>
            )}
          </div>
          <button>{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </StyledForm>
    </div>
  );
}
