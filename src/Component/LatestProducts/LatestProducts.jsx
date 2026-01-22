import React, { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

const LatestProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://import-export-hub-server-phi.vercel.app/latestproduct")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section className="py-10 bg-base-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center my-10 px-4">
        <h1 className="text-4xl pb-3 font-bold text-primary">
          New Arrivals - Freshly Added Products
        </h1>
        <p className="font-medium text-base-content/70 max-w-3xl mx-auto">
          Stay updated with our latest high-quality imports and exports. This
          section showcases the 6 most recent items, each highlighting key
          product information such as price, rating, origin, and availability.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-11/12 mx-auto">
        {data.length > 0 ? (
          data.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <p className="text-center text-base-content/70 col-span-full">
            No latest products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default LatestProducts;
