import styled from "styled-components";

export default function ValidationError({ children }) {
  return <StyledFormError>{children}</StyledFormError>;
}

const StyledFormError = styled.div`
  background-color: ${(props) => props.theme.white};

  border: 2px solid ${(props) => props.theme.error};
  padding: 4px 8px;
  color: ${(props) => props.theme.error};
`;
