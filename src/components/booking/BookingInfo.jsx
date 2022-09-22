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
          <h3>
            <Link to={`/booking/${id}`}>{name}</Link>
          </h3>
          <IfPopular popular={popular} />
          <p className="price">{price}kr</p>
        </div>
        <div className="buttons">
          <button>
            <Link to={`/enquiry/${name}`}>Book now</Link>
          </button>
          <button>
            <Link to={`/booking/${id}`}>Read more</Link>
          </button>
        </div>
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
      width: 220px;
      height: 100%;
      border-radius: 20px 0 0 20px;
    }
  }
  .info-card {
    width: 70%;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;

    h3 {
      margin: 10px 0;
      a {
        color: ${(props) => props.theme.fontColor};
        text-decoration: none;
      }
    }
    .popular {
      font-style: italic;
    }
    .price {
      margin: 20px 0;
    }
    .buttons {
      display: flex;
      button {
        margin: 100px 20px 0 0;
        width: 100px;
        height: 30px;
      }
    }
  }
  @media (max-width: 1024px) {
    .image {
      img {
        width: 200px;
      }
    }
    h3 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 767px) {
    height: 125px;
    .image {
      img {
        width: 150px;
      }
    }
    .info-card {
      margin-left: 50px;
      h3 {
        font-size: 0.9rem;
      }
      .info {
        width: 40%;
      }
      .popular,
      .price {
        font-size: 0.7rem;
      }
      .buttons {
        flex-direction: column;
        button {
          width: 75px;
          height: 25px;
          font-size: 0.7rem;
          margin: auto 15px auto 0;
          padding: 0;
        }
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: 100%;
    .image {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
      }
    }
    .info-card {
      display: flex;
      flex-direction: column;
      margin: 0 0 20px 0;
      width: 100%;
      .info {
        width: 100%;
        margin-left: 20px;
        h3 {
          flex-wrap: wrap;
        }
      }
      .buttons {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
      }
    }
  }
`;
