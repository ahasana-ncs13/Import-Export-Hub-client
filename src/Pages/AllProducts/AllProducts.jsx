import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../../Component/Products/ProductCard";
import AllProductsCard from "../../Component/Products/AllProductsCard";
import { Helmet } from "react-helmet";

const AllProducts = () => {
  const data = useLoaderData();
  // console.log(data)
  const [search, setSearch] = useState("");
  console.log(search);

  const filteredProducts = data.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto py-10">
      <Helmet>
        <title>All Products - Import Export Hub</title>
      </Helmet>
      <div className="max-w-200 mx-auto text-center my-5">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Global Product Catalog
        </h1>
        <p className="text-gray-500">
          Access a wide range of internationally sourced products from reliable
          exporters. From agriculture to electronics, explore every category and
          instantly add items to your “My Imports” list with one click.
        </p>
      </div>
      <div className="flex justify-between items-center p-5">
        <p className="text-primary font-bold text-3xl">
          <span>Product</span> ({filteredProducts.length})
        </p>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="m20.71 19.29l-4.39-4.39c1.05-1.35 1.69-3.05 1.69-4.9 0-4.42-3.58-8-8-8S2 5.58 2 10s3.58 8 8 8c1.85 0 3.55-.63 4.9-1.69l4.39 4.39c.39.39 1 .39 1.41 0s.39-1 0-1.41ZM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z"
                    fill="#696969"
                  ></path>
                </g>
              </svg>

              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral border-none bg-primary text-white join-item">
            Search
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-5 bg-primary lg:p-15 p-5 rounded-xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <AllProductsCard
              key={product._id}
              product={product}
            ></AllProductsCard>
          ))
        ) : (
          <p className="text-white text-xl font-semibold col-span-3 text-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
