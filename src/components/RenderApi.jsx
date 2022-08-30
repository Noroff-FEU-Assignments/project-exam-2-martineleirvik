import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants/api";

const bookingsUrl = baseUrl + "bookings";

function RenderApi() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(bookingsUrl);
        const json = await response.json();
        console.log(json);

        if (response.ok) {
          setBookings(json);
        }
      } catch (error) {
        setError(error.toString());
      }
    }
  }, []);

  return (
    <div className="card">
      <img src="#" alt="" />
      <h3>Hotel Fantasia</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="popular-buttons">
        <button>
          <Link to="/inqury">Book now</Link>
        </button>
        <Link to="/booking/:id">Read more</Link>
      </div>
    </div>
  );
}

export default RenderApi;
