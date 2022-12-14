import styled from "styled-components";

export const StyledBookingInfo = styled.div`
  border: 1px solid ${(props) => props.theme.secondaryColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 10px;
  background-color: ${(props) => props.theme.white};
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
      height: 200px;
      img {
        width: 100%;
        object-fit: cover;
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
