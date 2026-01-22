import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../../Component/Products/ProductCard";
import { Helmet } from "react-helmet";

const AllProducts = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // 🔍 Filter products
  const filteredProducts = data.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="w-11/12 mx-auto py-10 transition-colors duration-300 pt-26">
      <Helmet>
        <title>All Products - Import Export Hub</title>
      </Helmet>

      {/* Header */}
      <div className="max-w-200 mx-auto text-center my-5">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Global Product Catalog
        </h1>
        <p className="text-base-content/70">
          Explore globally sourced products from trusted exporters.
        </p>
      </div>

      {/* Search & Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5">
        <p className="text-primary font-bold text-2xl sm:text-3xl">
          Products ({filteredProducts.length})
        </p>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="input input-bordered w-full sm:w-64 border-base-300 bg-base-100 text-base-content placeholder:text-base-content/50 focus:border-primary focus:ring focus:ring-primary/30 transition-colors duration-300"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 sm:p-8 lg:p-12 rounded-xl bg-base-200 transition-colors duration-300">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-base-content/80 text-xl font-semibold col-span-full text-center">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <div className="join">
            {/* Previous */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="join-item btn btn-outline border-base-300 text-base-content hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors duration-300"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`join-item btn border-base-300 text-base-content hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors duration-300 ${
                  currentPage === page + 1 ? "btn-primary text-white" : ""
                }`}
              >
                {page + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="join-item btn btn-outline border-base-300 text-base-content hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors duration-300"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
