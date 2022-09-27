import Heading from "../layout/Heading";
import RenderPopularApi from "./RenderPopularApi";
import { StyledPopularContainer } from "./PopularHotel.styled";

function PopularHotels() {
  return (
    <StyledPopularContainer>
      <Heading heading="Popular accomodations" />
      <RenderPopularApi />
    </StyledPopularContainer>
  );
}

export default PopularHotels;
