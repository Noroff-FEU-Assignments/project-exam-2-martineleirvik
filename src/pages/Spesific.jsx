import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { baseUrl } from "../constants/api";
//components
import Loader from "../components/layout/Loader";
import IfPopular from "../components/booking/IfPopular";
//styles
import styled from "styled-components";

function Spesific() {
  const [bookingDetail, setBookingDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          } else {
            setError("An error occured");
          }
        } catch (error) {
          console.log(error);
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
    return <div>ERROR: {error}</div>;
  }

  return (
    <div className="booking-detail">
      <h1>{bookingDetail.attributes.name}</h1>
      <p>{bookingDetail.attributes.category.data.attributes.name}</p>
      <img
        src={
          bookingDetail.attributes.image.data[0].attributes.formats.medium.url
        }
        alt={bookingDetail.attributes.name}
      />
      <IfPopular popular={bookingDetail.attributes.popular} />
      <p>{bookingDetail.attributes.price}kr</p>
      <p>{bookingDetail.attributes.description}</p>
      <Link to="/enquiry">
        <button>Make an enquiry</button>
      </Link>
    </div>
  );
}

export default Spesific;
