import styled from "styled-components";

export const StyledUl = styled.div`
  width: 500px;
  margin: 20px auto 50px auto;

  @media (max-width: 550px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 270px;
  } ;
`;

export const StyledInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
  .from,
  .recieved {
    text-decoration: underline;
    width: 50%;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;
