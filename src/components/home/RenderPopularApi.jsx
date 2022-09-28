import { useState, useEffect } from "react";
// components
import { baseUrl } from "../../constants/api";
import PopularBookingInfo from "./PopularBookingInfo";
import CatchError from "../common/CatchError";
// styles
import Loader from "../layout/loader/Loader";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import { StyledSwiper } from "./RenderPopularApi.styled";

SwiperCore.use([Navigation]);

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
    return <CatchError>ERROR: {error}</CatchError>;
  }

  return (
    <StyledSwiper
      spaceBetween={5}
      slidesPerView={6}
      className="popular-swiper"
      navigation
      modules={{ Navigation }}
      onInit={(swiper) => console.log("Swiper initialized!", swiper)}
      onSlideChange={(swiper) =>
        console.log("slide index changed to: ", swiper.activeIndex)
      }
      onReachEnd={() => console.log("Swiper end reached")}
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
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      <div>
        {bookings.map(function (booking) {
          const { id } = booking;
          const { name, shortdescription } = booking.attributes;
          const image = booking.attributes.image.data[0].attributes.url;
          return (
            <SwiperSlide key={id}>
              <PopularBookingInfo
                id={id}
                name={name}
                shortdescription={shortdescription}
                image={image}
              />
            </SwiperSlide>
          );
        })}
      </div>
    </StyledSwiper>
  );
}

export default RenderPopularApi;
