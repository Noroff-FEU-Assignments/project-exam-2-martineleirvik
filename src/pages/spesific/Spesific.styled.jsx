import styled from "styled-components";
import { Swiper } from "swiper/react";

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
  margin: 50px 0;
  max-width: 500px;
  p {
    margin: 10px 0;
  }
`;

export const StyledImageryContainer = styled.div`
  width: 50%;
`;

export const StyledImagery = styled(Swiper)`
  width: 520px;
  img {
    width: 520px;
    height: 380px;
    object-fit: cover;
  }
  .swiper-slide-active {
  }

  @media (max-width: 1200px) {
    width: 400px;
    img {
      width: 400px;
      height: 280px;
    }
  }
  @media (max-width: 900px) {
    width: 350px;
    margin: 0 auto;
    img {
      width: 350px;
      height: 220px;
    }
  }
  @media (max-width: 768px) {
    width: 500px;
    display: block;
    margin: 0 auto;
    img {
      width: 500px;
      height: 300px;
    }
  }
  @media (max-width: 600px) {
    width: 370px;
    img {
      width: 370px;
      height: 250px;
    }
  }
  @media (max-width: 400px) {
    width: 275px;
    img {
      width: 275px;
      height: 180px;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.black};
    background-color: #ffffffb3;
    padding: 25px;
    border-radius: 50%;
    margin-right: -10px;
    ::after {
      font-size: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.black};
    background-color: #ffffffb3;
    padding: 25px;
    border-radius: 50%;
    margin-left: -10px;
    ::after {
      font-size: 2rem;
    }
  }
`;

export const StyledImageryThumb = styled(Swiper)`
  width: 520px;
  .swiper-slide {
    cursor: pointer;
    &-thumb-active {
      border: 4px solid ${(props) => props.theme.secondaryColor};
    }
    .wrapper {
      overflow: hidden;
      img {
        object-fit: cover;
        height: 110px;
        width: 100%;
      }
    }
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 370px;
  }
  @media (max-width: 400px) {
    width: 275px;
  }
`;
