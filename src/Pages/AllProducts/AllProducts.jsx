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

  // ⬅ Previous
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // ➡ Next
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-11/12 mx-auto py-10 pt-26">
      <Helmet>
        <title>All Products - Import Export Hub</title>
      </Helmet>

      {/* Header */}
      <div className="max-w-200 mx-auto text-center my-5">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Global Product Catalog
        </h1>
        <p className="text-gray-500">
          Explore globally sourced products from trusted exporters.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center p-5">
        <p className="text-primary font-bold text-3xl">
          Products ({filteredProducts.length})
        </p>

        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 bg-primary lg:p-15 p-5 rounded-xl">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-white text-xl font-semibold col-span-3 text-center">
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
              className="join-item btn "
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`join-item btn ${
                  currentPage === page + 1
                    && "btn-primary text-white"
                    
                }`}
              >
                {page + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="join-item btn btn-outline"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
