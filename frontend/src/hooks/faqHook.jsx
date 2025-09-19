import { useEffect, useState } from "react";
import axios from "axios";

export const faqHook = () => {
  const [faq, setFaq] = useState([]);
  const [Error, setError] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  // get all FAQ
  const fetchFAQ = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:3042/faqs`);
      setFaq(response.data.data);
    } catch (Error) {
      setError(Error);
      console.log(Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQ();
  }, []);

  return {
    //* FAQ
    faq,
    //* misc
    Error,
    IsLoading,
  };
};
