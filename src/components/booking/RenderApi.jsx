import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
import Loader from "../layout/Loader";
import BookingInfo from "./BookingInfo";
import FilterButtons from "./FilterButtons";
import styled from "styled-components";

const url =
  baseUrl + "bookings?pagination[start]=0&pagination[limit]=4&populate=*";

function RenderApi() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

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
    <StyledBookingContainer>
      {bookings.map(function (booking) {
        const { id } = booking;
        const { name, description, price, popular, stars } = booking.attributes;
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
  );
}

export default RenderApi;

const StyledBookingContainer = styled.div`
  margin: 0 50px;
`;
