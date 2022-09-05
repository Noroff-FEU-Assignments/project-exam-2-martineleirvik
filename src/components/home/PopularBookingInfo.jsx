import { Link } from "react-router-dom";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function PopularBookingInfo({ id, name, shortdescription, image }) {
  return (
    <SyledCard>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{shortdescription}</p>
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
  max-width: 300px;
  height: 350px;
  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
  }
  h3 {
    margin: 10px 0;
  }
  .popular-buttons {
    margin: 10px 0;
    button {
      margin-right: 15px;
    }
  }
`;
