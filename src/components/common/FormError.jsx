import styled from "styled-components";

export default function ValidationError({ children }) {
  return <div className="form-error">{children}</div>;
}

const StyledFormError = styled.div`
  background-color: red;
  padding: 4px 8px;
`;
