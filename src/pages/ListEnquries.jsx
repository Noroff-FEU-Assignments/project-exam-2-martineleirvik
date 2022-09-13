import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";
import Loader from "../components/layout/Loader";
import Heading from "../components/layout/Heading";
import Message from "../components/listmessages/Message";
import styled from "styled-components";

const url = baseUrl + "enquiries";
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
        // setEnquiry(response.data.data);
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
    </>
  );
}

export default ListEnquries;
