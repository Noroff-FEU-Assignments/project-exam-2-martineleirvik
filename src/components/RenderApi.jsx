import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants/api";
import BookingInfo from "./BookingInfo";
import Loader from "./layout/Loader";
import styled from "styled-components";

const popularUrl = baseUrl + "bookings?filters[popular][$eq]=true";

function RenderApi() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(popularUrl);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
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
    <SyledCardContainer>
      {bookings.map(function (booking) {
        const { id, name, price, description, popular, image } =
          booking.attributes;
        return (
          <div>
            <BookingInfo key={id} name={name} />
          </div>
        );
      })}
    </SyledCardContainer>
  );
}

export default RenderApi;

// Styled components
const SyledCardContainer = styled.div`
  display: flex;
`;
