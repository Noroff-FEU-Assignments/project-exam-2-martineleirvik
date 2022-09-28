import styled from "styled-components";

export const StyledBookingDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  @media (max-width: 600px) {
    margin: 50px 20px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledImage = styled.div`
  width: 50%;
  img {
    width: 570px;
    height: 380px;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    img {
      width: 400px;
      height: 280px;
    }
  }
  @media (max-width: 900px) {
    width: 60%;
    img {
      width: 350px;
      height: 220px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      display: block;
      margin: 0 auto;
      width: 500px;
      height: 300px;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 370px;
      height: 250px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 275px;
      height: 180px;
    }
  }
`;

export const StyledInfo = styled.div`
  width: 50%;
  margin-left: 40px;
  h1,
  p {
    margin: 20px 0;
  }
  .category {
    font-style: italic;
  }
  button {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    button {
      margin-top: 0;
    }
  }
`;

export const StyledDesc = styled.div`
  margin: 30px 0;
  max-width: 600px;
  p {
    margin: 10px 0;
  }
`;
