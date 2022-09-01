import { useContext, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="loginContainer">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("username")} placeholder="Usename/email" />
          {errors && errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <input {...register("password")} placeholder="Password" />
          {errors && errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>Login</button>
      </StyledForm>
    </div>
  );
}

export default LoginForm;

// styled components

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 10px auto;
  padding: 40px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #eec2b3;
  input {
    width: 100%;
    margin: 7px 0;
  }
`;
