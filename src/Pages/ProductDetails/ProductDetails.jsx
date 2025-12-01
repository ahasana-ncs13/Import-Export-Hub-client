import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import { CheckCircle, Truck, Star } from "lucide-react";

const ProductDetails = () => {
  const data = useLoaderData();
//   console.log(data);
  const {
    product_name,
    product_images,
    category,
    price_min,
    price_max,
    origin_country,
    rating,
    available_quantity,
    description,
    specifications,
    seller_info,
    shipping,
  } = data;

  return (
    <div className="w-11/12 mx-auto my-10  bg-primary rounded-xl shadow-lg text-lg">
      {/* IMAGE + BASIC INFO */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 p-6 ">

        {/* Image */}
        <div>
          <img
            src={product_images}
            alt={product_name}
            className="rounded-xl w-full h-210 object-cover"
          />
           
        </div>

        <div className="">
          {/* Basic Info */}
          <div className="rounded-xl shadow-lg bg-white mt-10  p-6">
            <h1 className="text-4xl font-bold text-primary">{product_name}</h1>
            <p className="badge mt-2 text-lg bg-primary text-secondary p-4 font-semibold">{category}</p>

            <div className="flex items-center gap-2 mt-3">
              {[1, 2, 3, 4,5].map((num) => (
                        <Star
                          key={num}
                          size={20}
                          className={`${
                            rating >= num ? "text-yellow-800 fill-yellow-400" : "text-yellow-800"
                        }`}
                        />
                      ))}
              <span className="text-lg font-semibold">({rating}/5)</span>
            </div>

            <p className="mt-4 text-lg font-medium">
              <span className="text-primary">Price:</span> {price_min} —{" "}
              {price_max}
            </p>

            <p className="mt-2 text-lg font-medium">
              <span className="text-primary">Origin:</span> {origin_country}
            </p>

            <p className="mt-2 text-lg font-medium">
              <span className="text-primary">Available:</span>{" "}
              {available_quantity}
            </p>
            <button className="btn bg-primary text-secondary font-bold text-lg p-7 rounded-2xl w-full my-5 hover:text-white">Import Now </button>
          </div>
          {/* DESCRIPTION */}
          <div className="mt-10 p-6 rounded-xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-3 text-primary">Product Description</h2>
            <p className="leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 p-10">

        {/* SPECIFICATIONS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-3">Specifications</h2>
          <ul className="space-y-2">
            <li>
              <strong>Weight:</strong> {specifications.weight}
            </li>
            <li>
              <strong>Dimensions:</strong> {specifications.dimensions}
            </li>
            <li>
              <strong>Material Type:</strong> {specifications.material_type}
            </li>
          </ul>
        </div>

        {/* SELLER INFORMATION */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-primary">Seller Information</h2>

          <p className="text-lg font-semibold">{seller_info.company}</p>

          {seller_info.verified && (
            <div className="badge bg-primary p-5 flex items-center gap-2 text-secondary mt-1">
              <CheckCircle size={18} />
              <span>Verified Supplier</span>
            </div>
          )}
        </div>

        {/* SHIPPING */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-primary">Shipping Details</h2>

          <div className="flex items-center gap-3">
            <Truck size={20} />
            <p>
              <strong>Method:</strong> {shipping.method}
            </p>
          </div>

          <p className="mt-2">
            <strong>Delivery Time:</strong> {shipping.delivery_time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
