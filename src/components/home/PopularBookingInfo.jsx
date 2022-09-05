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
      <div className="card-text">
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
      </div>
    </SyledCard>
  );
}

export default PopularBookingInfo;

// Styled components

const SyledCard = styled.div`
  background-color: white;

  margin: 10px;
  border: 1px solid #eb8c6a;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-width: 200px;
  max-width: 300px;
  height: 380px;

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
  .card-text {
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    h3 {
      margin: 10px 0;
    }
    .popular-buttons {
      margin: 10px 0;
      align-items: flex-end;

      button {
        margin-right: 15px;
      }
    }
  }
`;
