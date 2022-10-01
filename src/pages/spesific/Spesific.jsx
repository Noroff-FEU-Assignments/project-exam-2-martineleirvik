import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { baseUrl } from "../../constants/api";
//components
import Loader from "../../components/layout/loader/Loader";
import IfPopular from "../../components/booking/IfPopular";
//styles
import CatchError from "../../components/common/CatchError";
import Footer from "../../components/layout/footer/Footer";
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import * as S from "./Spesific.styled";

function Spesific() {
  const [bookingDetail, setBookingDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let Navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    Navigate("/");
  }

  const url = baseUrl + "bookings/" + id + "?populate=*";

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            console.log(json.data);
            setBookingDetail(json.data);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <CatchError>ERROR: {error}</CatchError>;
  }

  return (
    <StyledContainer>
      <S.StyledBookingDetail>
        <S.StyledRow>
          <S.StyledImage>
            <img
              src={
                bookingDetail.attributes.image.data[0].attributes.formats.medium
                  .url
              }
              alt={bookingDetail.attributes.name}
            />
          </S.StyledImage>
          <S.StyledInfo>
            <h1>{bookingDetail.attributes.name}</h1>
            <p className="category">
              {bookingDetail.attributes.category.data.attributes.name}
            </p>
            <IfPopular popular={bookingDetail.attributes.popular} />
            <p>{bookingDetail.attributes.price}kr</p>
            <button>
              <Link to={`/enquiry/${bookingDetail.attributes.name}`}>
                Make an enquiry
              </Link>
            </button>
          </S.StyledInfo>
        </S.StyledRow>
        <S.StyledDesc>
          <p>{bookingDetail.attributes.shortdescription}</p>
          <p>{bookingDetail.attributes.description}</p>
        </S.StyledDesc>
      </S.StyledBookingDetail>
      <Footer />
    </StyledContainer>
  );
}

export default Spesific;
