import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
// components
import Heading from "../../components/layout/Heading";
import Footer from "../../components/layout/footer/Footer";
import Loader from "../../components/layout/loader/Loader";
import BookingInfo from "../../components/booking/BookingInfo";
//styles
import CatchError from "../../components/common/CatchError";
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import * as S from "./Booking.styled";

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterBtn, setFilterBtn] = useState("bookings?populate=*");
  const [currentActiveBtn, setCurrentActiveBtn] = useState("all");

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(`${baseUrl}${filterBtn}`);

          if (response.ok) {
            const json = await response.json();
            console.log(json);

            let results;

            if (filterBtn === "bookings?populate=*") {
              results = json.data;
            } else {
              results = json.data.attributes.bookings.data;
            }
            setBookings(results);
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
    [filterBtn]
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <CatchError>ERROR: {error}</CatchError>;
  }

  return (
    <StyledContainer>
      <Heading heading="Booking" />
      <S.StyledFilterBtnsContainer>
        <S.StyledFilterBtn
          isActive={currentActiveBtn === "all"}
          onClick={() => {
            setFilterBtn("bookings?populate=*");
            setCurrentActiveBtn("all");
          }}
        >
          All
        </S.StyledFilterBtn>
        <S.StyledFilterBtn
          isActive={currentActiveBtn === "hotels"}
          onClick={() => {
            setFilterBtn(
              "categories/1?fields=name&populate[bookings][populate][0]=image"
            );
            setCurrentActiveBtn("hotels");
          }}
        >
          Hotels
        </S.StyledFilterBtn>
        <S.StyledFilterBtn
          isActive={currentActiveBtn === "bnb"}
          onClick={() => {
            setFilterBtn(
              "categories/2?fields=name&populate[bookings][populate][0]=image"
            );
            setCurrentActiveBtn("bnb");
          }}
        >
          B&B's
        </S.StyledFilterBtn>
        <S.StyledFilterBtn
          isActive={currentActiveBtn === "guesthouses"}
          onClick={() => {
            setFilterBtn(
              "categories/3?fields=name&populate[bookings][populate][0]=image"
            );
            setCurrentActiveBtn("guesthouses");
          }}
        >
          Guesthouses
        </S.StyledFilterBtn>
      </S.StyledFilterBtnsContainer>
      <S.StyledBookingContainer>
        {bookings.map(function (booking) {
          const { id } = booking;
          const { name, description, price, popular } = booking.attributes;
          let imageUrl = "https://via.placeholder.com/50";

          if (booking.attributes.image) {
            imageUrl = booking.attributes.image.data[0].attributes.url;
          }

          return (
            <BookingInfo
              key={id}
              id={id}
              name={name}
              image={imageUrl}
              description={description}
              price={price}
              popular={popular}
            />
          );
        })}
      </S.StyledBookingContainer>
      <S.StyledShowMoreButton>Show more</S.StyledShowMoreButton>
      <Footer />
    </StyledContainer>
  );
}

export default Booking;
