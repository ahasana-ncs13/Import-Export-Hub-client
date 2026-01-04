import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
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

  return (
    <div className="w-full">
      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-4 h-[430px] flex flex-col">
        
        {/* Image */}
        <img
          src={product_images}
          alt={product_name}
          className="w-full h-[220px] object-cover rounded-lg"
        />

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-bold text-center text-primary my-4 line-clamp-2">
            {product_name}
          </h2>

          <p className="text-gray-600 flex items-center gap-2">
            <span className="text-primary">
              <BsCurrencyDollar />
            </span>
            {price_min} – {price_max}
          </p>

          <div className="flex justify-between items-center mt-2 text-sm">
            <p className="flex items-center gap-1 text-gray-600">
              <IoLocationSharp className="text-primary" />
              {origin_country}
            </p>

            <p className="flex items-center gap-1 text-gray-600">
              <FaStar className="text-primary" />
              {rating}
            </p>

            <p className="flex items-center gap-1 text-gray-600">
              <MdLocalGroceryStore className="text-primary" />
              {available_quantity}
            </p>
          </div>

          {/* Button pushed to bottom */}
          <Link
            to={`/productdetails/${_id}`}
            className="mt-auto block text-center bg-secondary py-2 rounded-lg text-primary font-bold hover:bg-lime-600 hover:text-white transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
