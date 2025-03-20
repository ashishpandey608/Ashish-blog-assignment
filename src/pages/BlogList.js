import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Import styles

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(data => {
      // Limit the number of blogs displayed (change the number as needed)
      setBlogs(data.slice(0, 5)); // Shows only 5 blogs
    });
  }, []);

  return (
    <div className="container">
      <h2>Latest Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-excerpt">{blog.body.substring(0, 100)}...</p>
            <Link to={`1/blog/${blog.id}`} className="blog-link">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;