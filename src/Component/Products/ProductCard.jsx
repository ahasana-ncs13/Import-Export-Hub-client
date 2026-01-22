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
      <div className="bg-base-100 dark:bg-base-200 rounded-xl shadow-md p-4 flex flex-col h-full min-h-[420px] transition-colors duration-300">
        
        {/* Image */}
        <img
          src={product_images}
          alt={product_name}
          className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-lg"
        />

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-center text-primary my-3 line-clamp-2 transition-colors duration-300">
            {product_name}
          </h2>

          {/* Price */}
          <p className="flex items-center gap-2 text-sm sm:text-base text-base-content/70 dark:text-base-content/60 transition-colors duration-300">
            <BsCurrencyDollar className="text-primary" />
            {price_min} – {price_max}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-between items-center gap-2 mt-3 text-xs sm:text-sm text-base-content/70 dark:text-base-content/60 transition-colors duration-300">
            <p className="flex items-center gap-1">
              <IoLocationSharp className="text-primary" />
              {origin_country}
            </p>

            <p className="flex items-center gap-1">
              <FaStar className="text-primary" />
              {rating}
            </p>

            <p className="flex items-center gap-1">
              <MdLocalGroceryStore className="text-primary" />
              {available_quantity}
            </p>
          </div>

          {/* Button */}
          <Link
            to={`/productdetails/${_id}`}
            className="mt-auto text-center py-2 sm:py-2.5 rounded-lg bg-secondary dark:bg-secondary-dark dark:text-primary-dark font-semibold hover:bg-lime-600 hover:text-white transition-colors duration-300"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
