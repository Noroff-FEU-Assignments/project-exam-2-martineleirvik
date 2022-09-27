import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 10px auto;
  padding: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.primaryColor};
  fieldset {
    border: none;
    input {
      width: 100%;
      margin: 7px 0;
    }
    button {
      width: 100%;
      margin-top: 15px;
    }
  }
`;
