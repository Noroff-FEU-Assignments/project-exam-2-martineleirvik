import { Link } from "react-router-dom";
//components
import Heading from "../layout/Heading";
//styles

function PopularHotels() {
  return (
    <div className="popular-container">
      <Heading heading="Popular Hotels" />
      <div className="card">
        <img src="#" alt="" />
        <h3>Hotel Fantasia</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="popular-buttons">
          <button>
            <Link to="/inqury">Book now</Link>
          </button>
          <Link to="/booking/:id">Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default PopularHotels;
