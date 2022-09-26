import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
// components
import Heading from "../components/layout/Heading";
import Footer from "../components/layout/Footer";
import Loader from "../components/layout/Loader";
import BookingInfo from "../components/booking/BookingInfo";
//styles
import styled from "styled-components";

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
    return <div>ERROR: {error}</div>;
  }

  return (
    <>
      <Heading heading="Booking" />
      <StyledFilterBtnsContainer>
        <StyledFilterBtn
          isActive={currentActiveBtn === "all"}
          onClick={() => {
            setFilterBtn("bookings?populate=*");
            setCurrentActiveBtn("all");
          }}
        >
          All
        </StyledFilterBtn>
        <StyledFilterBtn
          isActive={currentActiveBtn === "hotels"}
          onClick={() => {
            setFilterBtn(
              "categories/1?fields=name&populate[bookings][populate][0]=image"
            );
            setCurrentActiveBtn("hotels");
          }}
        >
          Hotels
        </StyledFilterBtn>
        <StyledFilterBtn
          isActive={currentActiveBtn === "bnb"}
          onClick={() => {
            setFilterBtn(
              "categories/2?fields=name&populate[bookings][populate][0]=image"
            );
            setCurrentActiveBtn("bnb");
          }}
        >
          B&B's
        </StyledFilterBtn>
        <StyledFilterBtn
          isActive={currentActiveBtn === "guesthouses"}
          onClick={() => {
            setFilterBtn(
              "categories/3?fields=name&populate[bookings][populate][0]=image"
            );
            setCurrentActiveBtn("guesthouses");
          }}
        >
          Guesthouses
        </StyledFilterBtn>
      </StyledFilterBtnsContainer>
      <StyledBookingContainer>
        {bookings.map(function (booking) {
          const { id } = booking;
          const { name, description, price, popular, stars } =
            booking.attributes;
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
              stars={stars}
            />
          );
        })}
      </StyledBookingContainer>
      <button>Show more</button>
      <Footer />
    </>
  );
}

export default Booking;

const StyledBookingContainer = styled.div`
  margin: 0 50px;
  @media (max-width: 480px) {
    margin: 0 20px;
  }
`;

const StyledFilterBtnsContainer = styled.div`
  margin: 15px 0 15px 50px;

  @media (max-width: 480px) {
    margin: 10px;
  }
`;

const StyledFilterBtn = styled.button`
  cursor: pointer;
  margin: 5px 2px;
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondaryColor};
  color: ${(props) =>
    props.isActive ? props.theme.secondaryColor : props.theme.white};
  :hover {
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColor};
  }
  .active {
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const StyledActiveBtn = styled.button`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.secondaryColor};
`;

const StyledNormalBtn = styled.button`
  background-color: ${(props) => props.theme.secondaryColor};
  border: 1px solid ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.white};
`;
