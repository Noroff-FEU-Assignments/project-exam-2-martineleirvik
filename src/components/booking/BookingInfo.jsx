import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function BookingInfo({ id, name, price, stars, image }) {
  if (stars === "five") {
    <FontAwesomeIcon icon={faStar} />;
  }
  return (
    <StyledBookingInfo>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>{stars}</p>
        <p>{price}kr</p>
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
      border-radius: 20px 0 0 20px;
    }
  }
  .info {
    width: 70%;
    margin-left: 30px;
  }
`;
