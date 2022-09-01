import styled from "styled-components";

function LoginForm() {
  return (
    <div className="loginContainer">
      <StyledForm>
        <div>
          <input placeholder="Usename/email" />
        </div>
        <div>
          <input placeholder="Password" />
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
  input {
    width: 100%;
    margin: 7px 0;
  }
`;
