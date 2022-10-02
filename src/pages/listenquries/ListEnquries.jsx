import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
import useAxios from "../../components/hooks/useAxios";
import Loader from "../../components/layout/loader/Loader";
import Heading from "../../components/layout/Heading";
import EnquiryDetail from "../../components/listenquiry/EnquiryDetail";
import Footer from "../../components/layout/footer/Footer";
import CatchError from "../../components/common/CatchError";
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import * as S from "./ListEnquries.styled";

const url = baseUrl + "enquiries?sort=createdAt:desc";

function ListEnquries() {
  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getEnquiry() {
      try {
        const response = await http.get(url);
        console.log("response", response.data.data);
        setEnquiry(response.data.data);
      } catch (error) {
        console.log("error", error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getEnquiry();
  }, []);

  if (loading) return <Loader />;

  if (error) return <CatchError>ERROR: {error}</CatchError>;

  return (
    <StyledContainer>
      <Heading heading="List of enquiries" />
      <S.StyledUl>
        <ul className="enquiry">
          <S.StyledInfo>
            <p className="accommodation">Accommodation:</p>
            <p className="recieved">Recieved:</p>
          </S.StyledInfo>
          {enquiry.map((data) => {
            const { id } = data;
            const {
              accommodationName,
              name,
              email,
              message,
              dateTo,
              dateFrom,
              createdAt,
            } = data.attributes;
            return (
              <EnquiryDetail
                key={id}
                id={id}
                accommodationName={accommodationName}
                name={name}
                email={email}
                message={message}
                dateTo={dateTo}
                dateFrom={dateFrom}
                createdAt={createdAt}
              />
            );
          })}
        </ul>
      </S.StyledUl>
      <Footer />
    </StyledContainer>
  );
}

export default ListEnquries;
