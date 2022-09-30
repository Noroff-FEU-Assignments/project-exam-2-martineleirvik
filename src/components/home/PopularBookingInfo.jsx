import { Link } from "react-router-dom";
import * as S from "./PopularBookingInfo.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function PopularBookingInfo({ id, name, shortdescription, image }) {
  return (
    <S.StyledCard>
      <img src={image} alt={name} />
      <S.StyledCardText>
        <h3 className="name">{name}</h3>
        <p className="desc">{shortdescription}</p>
        <S.StyledButtons>
          <button>
            <Link to={`/enquiry/${name}`}>Book now</Link>
          </button>
          <Link to={`/booking/${id}`} className="readmore">
            Read more <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </S.StyledButtons>
      </S.StyledCardText>
    </S.StyledCard>
  );
}

export default PopularBookingInfo;
