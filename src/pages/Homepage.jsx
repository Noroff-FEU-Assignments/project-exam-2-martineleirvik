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
    <div className="container">
      <StyledImage
        id="homepage-image"
        src={frontpageImage}
        alt="View over the pier in Bergen"
      />
      <Heading heading="Visit Bergen" />
      <p>
        Book hotels, B&B's or guesthouses to your next trip to beautiful Bergen.
      </p>
      <button>View hotels etc...</button>
      <PopularHotels />
      <video src={bergenVideo} autoPlay loop muted />
      <BergenInfo />
    </div>
  );
}

export default Homepage;

const StyledImage = styled.img`
  width: 100%;
`;
