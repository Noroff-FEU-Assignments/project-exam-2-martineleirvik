// imagery
import frontpageImage from "../images/bergen-homepage-image.jpeg";
import bergenVideo from "../images/bergen.mp4";
// components
import Heading from "../components/layout/Heading";
import PopularHotels from "../components/home/PopularHotels";
import BergenInfo from "../components/home/BergenInfo";
// styles
import styled from "styled-components";

function Homepage() {
  return (
    <>
      <StyledImage
        id="homepage-image"
        src={frontpageImage}
        alt="View over the pier in Bergen"
      />
      <StyledContainer>
        <StyledVisitBergen>
          <Heading heading="Visit Bergen" />
          <p>
            Book hotels, B&B's or guesthouses to your next trip to beautiful
            Bergen.
          </p>
          <button>View hotels etc...</button>
        </StyledVisitBergen>
        <PopularHotels />
        <video src={bergenVideo} autoPlay loop muted />
        <BergenInfo />
      </StyledContainer>
    </>
  );
}

export default Homepage;

// Styled components

const StyledImage = styled.img`
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledVisitBergen = styled.div`
  margin: 50px auto;
  text-align: center;
  margin: 10px;

  p,
  button {
    margin: 10px 0;
  }
`;
