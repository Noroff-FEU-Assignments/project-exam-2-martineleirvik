import { Link } from "react-router-dom";
import styled from "styled-components";

function BookingInfo({ id, name, description, price, popular, stars, image }) {
  return (
    <StyledBookingInfo>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}kr</p>
    </StyledBookingInfo>
  );
}

export default BookingInfo;

// styled components

const StyledBookingInfo = styled.div`
  border: 1px solid #eb8c6a;
  margin: 10px;
  background-color: white;
  img {
    max-width: 30%;
  }
`;
