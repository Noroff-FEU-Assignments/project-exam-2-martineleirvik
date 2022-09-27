import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 500px;
  margin: 20px auto 50px auto;
  .top-info {
    display: flex;
    margin-bottom: 10px;
  }
  .accommodation,
  .recieved {
    text-decoration: underline;
    width: 50%;
  }

  @media (max-width: 550px) {
    width: 350px;
    .top-info {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    width: 270px;
  } ;
`;
