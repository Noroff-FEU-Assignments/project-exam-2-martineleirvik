import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";
import Loader from "../components/layout/loader/Loader";
import Heading from "../components/layout/Heading";
import Message from "../components/listmessages/Message";
import styled from "styled-components";
import CatchError from "../components/common/CatchError";
import Footer from "../components/layout/footer/Footer";
import { StyledContainer } from "../components/layout/StyledBody.styled";

const url = baseUrl + "messages?sort=createdAt:desc";

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
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, []);

  if (loading) return <Loader />;

  if (error) return <CatchError>ERROR: {error}</CatchError>;

  return (
    <StyledContainer>
      <Heading heading="List of Messages" />
      <StyledUl>
        <ul className="messages">
          <div className="top-info">
            <p className="from">From:</p>
            <p className="recieved">Recieved:</p>
          </div>
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
      </StyledUl>
      <Footer />
    </StyledContainer>
  );
}

export default ListMessages;

const StyledUl = styled.div`
  width: 500px;
  margin: 20px auto 50px auto;
  .top-info {
    display: flex;
    margin-bottom: 10px;
  }
  .from,
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
