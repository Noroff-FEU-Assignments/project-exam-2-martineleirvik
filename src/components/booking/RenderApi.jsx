import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
import Loader from "../layout/Loader";
import BookingInfo from "./BookingInfo";
import styled from "styled-components";

function RenderApi() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterBtn, setFilterBtn] = useState("bookings?populate=*");

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(`${baseUrl}${filterBtn}`);

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
      <div className="filter-buttons">
        <button onClick={() => setFilterBtn("bookings?populate=*")}>All</button>
        <button
          onClick={() =>
            setFilterBtn("categories/1?fields=name&populate=bookings")
          }
        >
          Hotels
        </button>
        <button
          onClick={() =>
            setFilterBtn("categories/2?fields=name&populate=bookings")
          }
        >
          B&B's
        </button>
        <button
          onClick={() =>
            setFilterBtn("categories/3?fields=name&populate=bookings")
          }
        >
          Guesthouses
        </button>
      </div>
      <StyledBookingContainer>
        {bookings.map(function (booking) {
          const { id } = booking;
          const { name, description, price, popular, stars } =
            booking.attributes;
          const image = booking.attributes.image.data[0].attributes.url;
          const category = booking.attributes.category.data.attributes.name;
          return (
            <BookingInfo
              key={id}
              id={id}
              name={name}
              image={image}
              description={description}
              price={price}
              popular={popular}
              stars={stars}
            />
          );
        })}
      </StyledBookingContainer>
    </>
  );
}

export default RenderApi;

const StyledBookingContainer = styled.div`
  margin: 0 50px;
`;
