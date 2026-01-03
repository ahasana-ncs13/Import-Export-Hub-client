import React, { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

const LatestProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://import-export-hub-server-phi.vercel.app/latestproduct")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="py-10 bg-blue-50">
      <div className="max-w-200 mx-auto text-center my-10">
        <h1 className="text-4xl pb-3 font-bold text-lime-600">New Arrivals - Freshly Added Products</h1>
        <p className="font-medium text-gray-500">
          Stay updated with our latest high-quality imports and exports. This
          section showcases the 6 most recent items, each highlighting key
          product information such as price, rating, origin, and availability
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-11/12 mx-auto">
        {data.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
