import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IfPopular from "./IfPopular";

function BookingInfo({ id, name, price, popular, image }) {
  return (
    <StyledBookingInfo>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info-card">
        <div className="info">
          <h3>{name}</h3>
          <IfPopular popular={popular} />
          <p className="price">{price}kr</p>
        </div>
        <button>
          <Link to={`/booking/${id}`}>Book now</Link>
        </button>
      </div>
    </StyledBookingInfo>
  );
}

export default BookingInfo;

// styled components

const StyledBookingInfo = styled.div`
  border: 1px solid #eb8c6a;
  margin: 10px;
  background-color: white;
  display: flex;
  height: 150px;
  border-radius: 20px;
  .image {
    width: 30%;
    img {
      max-width: 200px;
      height: 100%;
      width: auto;
      border-radius: 20px 0 0 20px;
    }
  }
  .info-card {
    width: 70%;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;

    button {
      margin: 100px 30px 0 0;
      width: 100px;
      height: 30px;
    }
    h3 {
      margin: 10px 0;
    }
    .popular {
      font-style: italic;
    }
    .price {
      margin: 20px 0;
    }
  }
`;
