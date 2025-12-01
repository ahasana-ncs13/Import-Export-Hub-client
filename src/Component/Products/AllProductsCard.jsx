import React from 'react';
import { Link } from 'react-router';

const AllProductsCard = ({product}) => {
   const {
    product_images,
    product_name,
    price_min,
    price_max,
    origin_country,
    rating,
    available_quantity,
    _id,
  } = product;
  // console.log(product);
  return (
    <div>
      <div className="rounded-xl shadow-md p-4 bg-white text-lg ">
        {/* Product Image */}
        <img
          src={product_images}
          alt={product_name}
          className="w-full h-90 object-cover rounded-lg"
        />

        {/* Product Info */}
        <h2 className="text-2xl font-bold text-center text-primary my-5">{product_name}</h2>

        <p className="text-gray-600 mt-1">
          <span className="font-bold text-primary">Price:</span> {price_min} –{" "}
          {price_max}
        </p>

        <p className="text-gray-600">
          <span className="font-bold text-primary">Origin:</span> {origin_country}
        </p>

        <p className="text-gray-600">
          <span className="font-bold text-primary">Rating:</span> ⭐ {rating}
        </p>

        <p className="text-gray-600">
          <span className="font-bold text-primary">Available:</span> {available_quantity}
        </p>

        {/* See Details Button */}
        <Link
          to={`/productdetails/${_id}`}
          className="mt-4 block text-center bg-secondary py-2 rounded-lg text-primary font-bold hover:bg-lime-600 transition hover:text-white"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default AllProductsCard;