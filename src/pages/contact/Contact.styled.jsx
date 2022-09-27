import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  width: 400px;
  fieldset {
    background-color: ${(props) => props.theme.white};
    padding: 25px 40px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 15px;
    margin-top: 10px;
    div {
      margin: 7px 0;
      display: flex;
      flex-direction: column;
      input {
        margin: 7px 0 0 0;
        border: 1px solid ${(props) => props.theme.footer};
      }
      textarea {
        margin: 7px 0 0 0;
        height: 100px;
        border: 1px solid ${(props) => props.theme.footer};
      }
    }
    button {
      width: 100%;
      margin-top: 15px;
    }
  }
  @media (max-width: 450px) {
    width: 280px;
    margin: 10px auto;
  }
`;
