import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import useAxios from "../components/hooks/useAxios";

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
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, []);

  return <div>ListMessages</div>;
}

export default ListMessages;
