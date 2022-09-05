import { useState, useEffect } from "react";
// components
import { baseUrl } from "../../constants/api";
import PopularBookingInfo from "./PopularBookingInfo";
// styles
import Loader from "../layout/Loader";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const popularUrl = baseUrl + "bookings?populate=*&filters[popular][$eq]=true";

function RenderPopularApi() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(popularUrl);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setBookings(json.data);
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
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>ERROR: {error}</div>;
  }

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      navigation={{ clickable: true }}
      modules={{ Pagination, Navigation }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      <SyledCardContainer>
        {bookings.map(function (booking) {
          const { id } = booking;
          const { name, shortdescription } = booking.attributes;
          const image = booking.attributes.image.data[0].attributes.url;
          return (
            <SwiperSlide>
              <PopularBookingInfo
                key={id}
                id={id}
                name={name}
                shortdescription={shortdescription}
                image={image}
              />
            </SwiperSlide>
          );
        })}
      </SyledCardContainer>
      ...
    </Swiper>
  );
}

export default RenderPopularApi;

// Styled components
const SyledCardContainer = styled.div`
  display: flex;
`;
