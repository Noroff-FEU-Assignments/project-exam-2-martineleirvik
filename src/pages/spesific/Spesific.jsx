import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { baseUrl } from "../../constants/api";
//components
import Loader from "../../components/layout/loader/Loader";
import IfPopular from "../../components/booking/IfPopular";
//styles
import CatchError from "../../components/common/CatchError";
import Footer from "../../components/layout/footer/Footer";
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import * as S from "./Spesific.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper";

function Spesific() {
  const [bookingDetail, setBookingDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [activeThumb, setActiveThumb] = useState(null);

  let Navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    Navigate("/");
  }

  const url = baseUrl + "bookings/" + id + "?populate=*";

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            console.log(json.data);
            setBookingDetail(json.data);
            setImage(json.data.attributes.image.data);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <CatchError>ERROR: {error}</CatchError>;
  }

  return (
    <StyledContainer>
      <S.StyledBookingDetail>
        <S.StyledRow>
          <S.StyledImageryContainer>
            <S.StyledImagery
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation, Thumbs]}
              thumbs={{
                swiper:
                  activeThumb && !activeThumb.destroyed ? activeThumb : null,
              }}
              grabCursor={true}
            >
              {image.map((img, index) => {
                let Images = img.attributes.url;

                return (
                  <SwiperSlide key={index}>
                    <img src={Images} />
                  </SwiperSlide>
                );
              })}
            </S.StyledImagery>
            <S.StyledImageryThumb
              onSwiper={setActiveThumb}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              modules={[Navigation, Thumbs]}
            >
              {image.map((img, index) => {
                let Images = img.attributes.url;

                return (
                  <SwiperSlide key={index}>
                    <div className="wrapper">
                      <img src={Images} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </S.StyledImageryThumb>
          </S.StyledImageryContainer>

          <S.StyledInfo>
            <h1>{bookingDetail.attributes.name}</h1>
            <p className="category">
              {bookingDetail.attributes.category.data.attributes.name}
            </p>
            <IfPopular popular={bookingDetail.attributes.popular} />
            <p>{bookingDetail.attributes.price}kr</p>
            <button>
              <Link to={`/enquiry/${bookingDetail.attributes.name}`}>
                Make an enquiry
              </Link>
            </button>
            <S.StyledDesc>
              <p>{bookingDetail.attributes.shortdescription}</p>
              <p>{bookingDetail.attributes.description}</p>
            </S.StyledDesc>
          </S.StyledInfo>
        </S.StyledRow>
      </S.StyledBookingDetail>
      <Footer />
    </StyledContainer>
  );
}

export default Spesific;
