import { useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";

export const messageHook = () => {
  const [message, setMessage] = useState([]);
  const [Error, setError] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  // Send message
  const sendMessage = async ({ name, subject, description }) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`http://localhost:3042/message`, {
        name,
        subject,
        description,
      });
      setMessage(response.data.data);
    } catch (Error) {
      setError(Error);
      console.log(Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    //* Message
    sendMessage,
    message,
    setMessage,
    //* misc
    Error,
    IsLoading,
  };
};
