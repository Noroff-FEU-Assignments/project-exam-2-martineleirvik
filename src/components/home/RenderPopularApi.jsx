import { useState, useEffect } from "react";
// components
import { baseUrl } from "../../constants/api";
import PopularBookingInfo from "./PopularBookingInfo";
// styles
import Loader from "../layout/Loader";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
    <SyledCardContainer>
      {bookings.map(function (booking) {
        const { id } = booking;
        const { name, description } = booking.attributes;
        const image = booking.attributes.image.data[0].attributes.url;
        return (
          <PopularBookingInfo
            key={id}
            id={id}
            name={name}
            description={description}
            image={image}
          />
        );
      })}
    </SyledCardContainer>
  );
}

export default RenderPopularApi;

// Styled components
const SyledCardContainer = styled.div`
  display: flex;
`;
