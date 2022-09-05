import { Link } from "react-router-dom";
import styled from "styled-components";

//components
import Heading from "../layout/Heading";
import RenderPopularApi from "./RenderPopularApi";
//styles

function PopularHotels() {
  return (
    <StyledPopularContainer>
      <Heading heading="Popular Hotels" />
      <RenderPopularApi />
    </StyledPopularContainer>
  );
}

export default PopularHotels;

const StyledPopularContainer = styled.div`
  margin: 10px 40px;
`;
