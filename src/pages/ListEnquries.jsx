import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";
import Loader from "../components/layout/loader/Loader";
import Heading from "../components/layout/Heading";
import EnquiryDetail from "../components/listenquiry/EnquiryDetail";
import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";

const url = baseUrl + "enquiries";

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
      } finally {
        setLoading(false);
      }
    }
    getEnquiry();
  }, []);

  if (loading) return <Loader />;

  if (error) return <div>{error}</div>;

  return (
    <>
      <Heading heading="List of enquiries" />
      <StyledContainer>
        <ul className="enquiry">
          {enquiry.map((data) => {
            const { id } = data;
            const {
              accommodationName,
              name,
              email,
              message,
              dateTo,
              dateFrom,
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
  max-width: 400px;
  margin: 20px auto;
  .name {
    text-decoration: underline;
  }
  @media (max-width: 450px) {
    width: 260px;
  } ;
`;
