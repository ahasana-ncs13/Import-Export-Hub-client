import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaUser, FaCalendarAlt, FaTags, FaArrowLeft } from "react-icons/fa";

const BlogsDetails = () => {
  const blog = useLoaderData(); // blog data from loader
  const navigate = useNavigate();

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate("/")}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-base-100 pt-26">
      <div className="w-11/12 mx-auto px-4">
        {/* Back Button */}
        <button
          className="btn btn-outline btn-primary mb-8 flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft /> Back to Blogs
        </button>

        {/* Blog Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">{blog.title}</h1>
          <div className="flex justify-center gap-6 text-sm text-base-content/60">
            <span className="flex items-center gap-1">
              <FaUser /> {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt /> {blog.date}
            </span>
            {blog.tags && (
              <span className="flex items-center gap-1">
                <FaTags /> {blog.tags.join(", ")}
              </span>
            )}
          </div>
        </div>

        {/* Blog Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
          />
        )}

        {/* Blog Content as Bullet Points */}
        <div className="prose max-w-full mx-auto text-base-content">
          <ul className="list-disc pl-5 space-y-2">
            {blog.content.split("\n").map((line, index) =>
              line.trim() ? <li key={index}>{line}</li> : null
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetails;
