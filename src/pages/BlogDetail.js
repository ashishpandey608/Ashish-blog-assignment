import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css"; // Import styles

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error("Error fetching blog details", error));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetail;