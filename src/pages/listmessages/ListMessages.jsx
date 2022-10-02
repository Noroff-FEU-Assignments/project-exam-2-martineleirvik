import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/api";
// components
import useAxios from "../../components/hooks/useAxios";
import Loader from "../../components/layout/loader/Loader";
import Heading from "../../components/layout/Heading";
import Message from "../../components/listmessages/Message";
import CatchError from "../../components/common/CatchError";
import Footer from "../../components/layout/footer/Footer";
// styles
import { StyledContainer } from "../../components/layout/StyledBody.styled";
import * as S from "./ListMessages.styled";

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
      <S.StyledUl>
        <ul>
          <S.StyledInfo>
            <p className="from">From:</p>
            <p className="recieved">Recieved:</p>
          </S.StyledInfo>
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
      </S.StyledUl>
      <Footer />
    </StyledContainer>
  );
}

export default ListMessages;
