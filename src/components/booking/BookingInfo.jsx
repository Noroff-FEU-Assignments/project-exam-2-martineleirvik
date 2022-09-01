import { Link } from "react-router-dom";
import styled from "styled-components";

function BookingInfo({ id, name, description, price, popular, stars }) {
  return (
    <StyledBookingInfo>
      <h3>{name}</h3>
      <p>{price}</p>
    </StyledBookingInfo>
  );
}

export default BookingInfo;

// styled components

const StyledBookingInfo = styled.div`
  border: 1px solid #eb8c6a;
  margin: 10px;
  background-color: white;
`;
