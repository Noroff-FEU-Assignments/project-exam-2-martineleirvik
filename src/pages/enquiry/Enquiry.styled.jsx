import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto 50px auto;
  width: 500px;
  fieldset {
    background-color: ${(props) => props.theme.white};
    padding: 25px 40px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 15px;
    margin-top: 10px;
    div {
      margin: 5px 0 10px 0;
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
      margin-top: 10px;
    }
    .date-container {
      display: flex;
      flex-direction: row;
      div {
        align-items: center;
        width: 50%;
        input {
          max-width: 100px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    width: 400px;
    margin: 10px auto;
  }
  @media (max-width: 500px) {
    width: 350px;
    margin: 10px auto;
  }
  @media (max-width: 400px) {
    width: 280px;
    margin: 10px auto;
  }
`;
