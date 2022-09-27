import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 10px auto 50px auto;
  width: 500px;
  fieldset {
    background-color: ${(props) => props.theme.white};
    padding: 25px 40px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 15px;
    margin-top: 10px;
    .popular {
      display: flex;
      flex-direction: row;
      label {
        margin-right: 15px;
      }
      input {
        margin-top: 3px;
      }
    }
    div {
      margin: 7px 0;
      display: flex;
      flex-direction: column;
      input,
      select {
        margin: 7px 0 0 0;
        border: 1px solid ${(props) => props.theme.footer};
      }
      textarea {
        margin: 7px 0 0 0;
        height: 120px;
        border: 1px solid ${(props) => props.theme.footer};
      }
    }
    button {
      width: 100%;
      margin-top: 15px;
    }
  }

  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 280px;
    fieldset {
      padding: 20px 15px;
    }
  }
`;
