import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

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
  img {
    width: 100%;
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

export const StyledImageryThumb = styled(Swiper)`
  width: 100%;
  .swiper-slide {
    cursor: pointer;
    border: 2px solid grey;
    &-thumb-active {
      border-color: ${(props) => props.theme.secondaryColor};
    }
    .wrapper {
      overflow: hidden;
      img {
        object-fit: cover;
        height: 140px;
        width: 100%;
      }
    }
  }
`;
