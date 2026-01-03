import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
   const [showAll, setShowAll] = useState(false);
  console.log(blogs);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

   const blogsToDisplay = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="py-20 bg-base-100">
      <div className="w-11/12 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Latest Blogs & Trade Insights
          </h2>
          <p className="mt-4 text-base-content/70 max-w-3xl mx-auto">
            Stay updated with global trade trends, import-export guides, and
            expert insights to grow your business confidently.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {blogsToDisplay.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-200 shadow-md"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-base-content/70">{blog.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-base-content/60 mt-3">
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>

                {/* CTA */}
                <div className="card-actions mt-4">
                  <Link
                    to={`/blogsdeatails/${blog._id}`}
                    className="btn btn-link text-primary px-0"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
         {blogs.length > 3 && (
          <div className="text-center">
            <button
              className="btn  btn-primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Blogs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
