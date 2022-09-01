import { Link } from "react-router-dom";
import styled from "styled-components";

function PopularBookingInfo({ id, name, description, image }) {
  return (
    <SyledCard>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="popular-buttons">
        <button>
          <Link to="/enquiry" key={id}>
            Book now
          </Link>
        </button>
        <Link to={`/booking/${id}`}>Read more</Link>
      </div>
    </SyledCard>
  );
}

export default PopularBookingInfo;

// Styled components

const SyledCard = styled.div`
  background-color: white;
  padding: 15px 10px;
  margin: 10px;
  border: 1px solid #eb8c6a;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-width: 200px;
`;
