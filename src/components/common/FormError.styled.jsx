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
