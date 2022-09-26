import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";
import Loader from "../components/layout/loader/Loader";
import Heading from "../components/layout/Heading";
import EnquiryDetail from "../components/listenquiry/EnquiryDetail";
import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";
import CatchError from "../components/common/CatchError";

const url = baseUrl + "enquiries?sort=createdAt:desc";
console.log(url);

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
    <>
      <Heading heading="List of enquiries" />
      <StyledContainer>
        <ul className="enquiry">
          <div className="top-info">
            <p className="accommodation">Accommodation:</p>
            <p className="recieved">Recieved:</p>
          </div>
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
      </StyledContainer>
      <Footer />
    </>
  );
}

export default ListEnquries;

const StyledContainer = styled.ul`
  max-width: 500px;
  margin: 20px auto;
  .top-info {
    display: flex;
    margin-bottom: 10px;
  }
  .accommodation,
  .recieved {
    text-decoration: underline;
    width: 50%;
  }

  @media (max-width: 550px) {
    width: 350px;
    .top-info {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    width: 270px;
  } ;
`;
