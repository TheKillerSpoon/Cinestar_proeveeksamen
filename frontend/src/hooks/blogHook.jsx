import { useState } from "react";
import axios from "axios";

export const blogHook = () => {
  const [blog, setBlog] = useState([]);
  const [Error, setError] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  // get all blogs
  const fetchBlog = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:3042/blogs`);
      setBlog(response.data.data);
    } catch (Error) {
      setError(Error);
      console.log(Error);
    } finally {
      setIsLoading(false);
    }
  };

  // get blog by id
  const fetchBlogById = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:3042/blog/${id}`);
      setBlog(response.data.data);
    } catch (Error) {
      setError(Error);
      console.log(Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    //* Blog
    blog,
    setBlog,
    fetchBlog,
    fetchBlogById,
    //* misc
    Error,
    IsLoading,
  };
};
