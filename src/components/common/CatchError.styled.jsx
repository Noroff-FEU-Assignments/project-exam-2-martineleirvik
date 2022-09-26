import styled from "styled-components";

export const StyledCatchError = styled.div`
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.error};
  padding: 4px 8px;
  color: ${(props) => props.theme.error};
  max-width: 400px;
  text-align: center;
  margin: 30px auto;
`;
