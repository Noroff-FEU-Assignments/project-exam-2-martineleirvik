import styled from "styled-components";

export const StyledLoader = styled.div`
  border: 10px solid #cccccc;
  border-top: 10px solid ${(props) => props.theme.black};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  position: fixed;
  left: 50%;
  margin: 10px 0 0 -50px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
