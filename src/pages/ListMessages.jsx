import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";
import Loader from "../components/layout/Loader";
import Heading from "../components/layout/Heading";
import Message from "../components/listmessages/Message";
import styled from "styled-components";

const url = baseUrl + "messages";

function ListMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMessages() {
      try {
        const response = await http.get(url);
        console.log("response", response.data.data);
        setMessages(response.data.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, []);

  if (loading) return <Loader />;

  if (error) return <div>{error}</div>;

  return (
    <>
      <Heading heading="List of Messages" />

      <StyledContainer>
        <ul className="messages">
          <p className="name">Name:</p>
          <p></p>
          {messages.map((data) => {
            const { id } = data;
            const { name, message, email, createdAt } = data.attributes;
            return (
              <Message
                key={id}
                id={id}
                name={name}
                message={message}
                email={email}
                createdAt={createdAt}
              />
            );
          })}
        </ul>
      </StyledContainer>
    </>
  );
}

export default ListMessages;

const StyledContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  .name {
    text-decoration: underline;
  }
  @media (max-width: 450px) {
    width: 260px;
  } ;
`;
