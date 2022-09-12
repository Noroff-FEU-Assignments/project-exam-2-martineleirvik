import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";
import Loader from "../components/layout/Loader";

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
    <ul className="messages">
      {messages.map((message) => {
        return <li>{message.attributes.name}</li>;
      })}
    </ul>
  );
}

export default ListMessages;
