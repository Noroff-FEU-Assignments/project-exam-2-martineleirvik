import { Link } from "react-router-dom";
// imagery
import homepage from "../../images/bergen-homepage-img.jpeg";
import bergenVideo from "../../images/bergen.mp4";
// components
import Heading from "../../components/layout/Heading";
import PopularHotels from "../../components/home/PopularHotels";
import BergenInfo from "../../components/home/BergenInfo";
import Footer from "../../components/layout/footer/Footer";
// styles
import * as S from "./Homepage.styled";
import { StyledContainer } from "../../components/layout/StyledBody.styled";

function Homepage() {
  return (
    <StyledContainer>
      <S.StyledImage
        id="homepage-image"
        src={homepage}
        alt="View over the pier in Bergen"
      />
      <S.StyledHomepage>
        <S.StyledVisitBergen>
          <Heading heading="Visit Bergen" />
          <p>
            Book hotels, B&B's or guesthouses to your next trip to beautiful
            Bergen.
          </p>
          <button>
            <Link to="/booking">View accomodations</Link>
          </button>
        </S.StyledVisitBergen>
        <PopularHotels />
        <S.StyledVideo src={bergenVideo} autoPlay loop muted />
        <BergenInfo />
      </S.StyledHomepage>
      <Footer />
    </StyledContainer>
  );
}

export default Homepage;
