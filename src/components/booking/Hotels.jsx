import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
import Loader from "../layout/Loader";
import HotelInfo from "./HotelInfo";

const url = baseUrl + "categories/1?fields=name&populate=bookings";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setHotels(json.data);
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
    <div className="hotels-container">
      {hotels.map(function (hotel) {
        const { id } = hotel.attributes.bookings.data[0];
        const { name, description } = hotel.attributes.bookings.data.attributes;
        const image = hotel;
        console.log(id);
        return (
          <HotelInfo
            key={id}
            id={id}
            name={name}
            description={description}
            image={image}
          />
        );
      })}
    </div>
  );
}

export default Hotels;
