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
        <h3 className="name">{name}</h3>
        <p className="desc">{shortdescription}</p>
        <div className="popular-buttons">
          <button>
            <Link to={`/enquiry/${name}`}>Book now</Link>
          </button>
          <Link to={`/booking/${id}`} className="readmore">
            Read more
          </Link>
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
  height: 360px;

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
    font-size: 0.9rem;
    h3 {
      margin: 10px 0;
      height: 35px;
    }
    .desc {
      height: 100px;
    }
    .popular-buttons {
      margin: 10px 0;
      justify-content: flex-end;
      button {
        margin-right: 15px;
        font-size: 0, 0rem;
      }
      .readmore {
        font-size: 0.8rem;
      }
    }
  }
`;
