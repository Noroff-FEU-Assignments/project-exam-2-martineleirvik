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
  const [background, setBackground] = useState("#EB8C6A");
  const [text, setText] = useState("#ffffff");
  const [border, setBorder] = useState("#EB8C6A");

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

  const setStyle = (background, text, border) => {
    setBackground(background);
    setText(text);
    setBorder(border);
  };

  return (
    <>
      <Heading heading="Booking" />
      <StyledFilterBtns>
        <button onClick={() => setFilterBtn("bookings?populate=*")}>All</button>
        <button
          onClick={() => {
            setFilterBtn(
              "categories/1?fields=name&populate[bookings][populate][0]=image"
            );
            setStyle(("#ffffff", "#EB8C6A", "#EB8C6A"));
          }}
        >
          Hotels
        </button>
        <button
          onClick={() =>
            setFilterBtn(
              "categories/2?fields=name&populate[bookings][populate][0]=image"
            )
          }
        >
          B&B's
        </button>
        <button
          onClick={() =>
            setFilterBtn(
              "categories/3?fields=name&populate[bookings][populate][0]=image"
            )
          }
        >
          Guesthouses
        </button>
      </StyledFilterBtns>
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

const StyledFilterBtns = styled.div`
  margin: 15px 0 15px 50px;
  button {
    cursor: pointer;
    margin: 5px 2px;
    :hover {
      background-color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;
