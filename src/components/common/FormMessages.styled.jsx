import styled from "styled-components";

export const StyledFormError = styled.div`
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.error};
  padding: 4px 8px;
  color: ${(props) => props.theme.error};
  margin-bottom: 10px;
`;

export const StyledValidationError = styled.div`
  color: ${(props) => props.theme.error};
  font-size: 0.7rem;
`;

export const StyledSucces = styled.div`
  text-align: center;
  svg {
    font-size: 2rem;
  }
  path {
    color: #1e8d1e;
  }
`;
