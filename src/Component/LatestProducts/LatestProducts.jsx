import React, { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

const LatestProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/latestproduct")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="py-10 bg-primary">
      <div className="max-w-200 mx-auto text-center my-10">
        <h1 className="text-4xl pb-3 font-semibold text-secondary">New Arrivals - Freshly Added Products</h1>
        <p className="font-medium text-gray-200">
          Stay updated with our latest high-quality imports and exports. This
          section showcases the 6 most recent items, each highlighting key
          product information such as price, rating, origin, and availability
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-11/12 mx-auto">
        {data.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
