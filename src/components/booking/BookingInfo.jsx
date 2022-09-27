import { Link } from "react-router-dom";
import IfPopular from "./IfPopular";
import { StyledBookingInfo } from "./BookingInfo.styled";

function BookingInfo({ id, name, price, popular, image }) {
  return (
    <StyledBookingInfo>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info-card">
        <div className="info">
          <h3>
            <Link to={`/booking/${id}`}>{name}</Link>
          </h3>
          <IfPopular popular={popular} />
          <p className="price">{price}kr</p>
        </div>
        <div className="buttons">
          <button>
            <Link to={`/enquiry/${name}`}>Book now</Link>
          </button>
          <button>
            <Link to={`/booking/${id}`}>Read more</Link>
          </button>
        </div>
      </div>
    </StyledBookingInfo>
  );
}

export default BookingInfo;
