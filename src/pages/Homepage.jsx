import { Link } from "react-router-dom";
// imagery
import frontpageImage from "../images/bergen-homepage-image.jpeg";
import bergenVideo from "../images/bergen.mp4";
// components
import Heading from "../components/layout/Heading";
import PopularHotels from "../components/home/PopularHotels";
import BergenInfo from "../components/home/BergenInfo";
import Footer from "../components/layout/Footer";
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
          <button>
            <Link to="/booking">View accomodations</Link>
          </button>
        </StyledVisitBergen>
        <PopularHotels />
        <StyledVideo src={bergenVideo} autoPlay loop muted />
        <BergenInfo />
      </StyledContainer>
      <Footer />
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
  margin: 0 0 10px 0;

  p,
  button {
    margin: 10px 0;
  }
`;

const StyledVideo = styled.video`
  max-height: 400px;
  width: 100%;
  object-fit: cover;
`;
