import { Link } from "react-router-dom";
import * as S from "./PopularBookingInfo.styled";

function PopularBookingInfo({ id, name, shortdescription, image }) {
  return (
    <S.StyledCard>
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
    </S.StyledCard>
  );
}

export default PopularBookingInfo;
