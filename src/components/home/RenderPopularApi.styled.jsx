import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  background-color: ${(props) => props.theme.backgroundColor};

  .swiper-button-next {
    color: ${(props) => props.theme.fontColor};
    background-color: #80808053;
    padding: 25px;
    border-radius: 50%;
    margin-right: -10px;
    ::after {
      font-size: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.fontColor};
    background-color: #80808053;
    padding: 25px;
    border-radius: 50%;
    margin-left: -10px;
    ::after {
      font-size: 2rem;
    }
  }
`;
