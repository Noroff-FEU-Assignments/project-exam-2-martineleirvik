import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
import Loader from "../layout/Loader";
import BookingInfo from "./BookingInfo";

const url = baseUrl + "bookings?populate=*";

function RenderApi() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="bookingcontainer">
      {bookings.map(function (booking) {
        const { id } = booking;
        const { name, description, price, popular, stars } = booking.attributes;
        console.log(stars);
        return (
          <BookingInfo
            key={id}
            id={id}
            name={name}
            description={description}
            price={price}
            popular={popular}
            stars={stars}
          />
        );
      })}
    </div>
  );
}

export default RenderApi;
