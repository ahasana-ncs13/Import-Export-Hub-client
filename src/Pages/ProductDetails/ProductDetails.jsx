import React, { useRef, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { CheckCircle, Truck, Star } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const importModalRef = useRef(null);

  const {
    _id,
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

  const [quantity, setQuantity] = useState("");
  const [availableqQuantity, setAvailableqQuantity] =
    useState(available_quantity);

  const handleModal = () => {
    importModalRef.current.showModal();
  };

  const handleModalForm = async (e) => {
    e.preventDefault();
    importModalRef.current.close();

    const price = parseInt(e.target.price.value);
    const Quantity = parseInt(e.target.quantity.value);

    setQuantity(Quantity);

    const importProduct = {
      product_name,
      product_images,
      rating,
      price,
      origin_country,
      Quantity,
      id: _id,
      email: user.email,
    };

    const res = await fetch(
      `https://import-export-hub-server-phi.vercel.app/myimports/${data._id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importProduct),
      },
    );
    const result = await res.json();

    if (result.insertedId) {
      Swal.fire({
        title: "Import Completed!",
        text: "The product has been added to your import records",
        icon: "success",
      });
      setAvailableqQuantity((prev) => prev - Quantity);
    }
    e.target.reset();
  };

  return (
    <div className="w-11/12 mx-auto my-10 rounded-xl shadow-lg mt-26 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <Helmet>
        <title>{`${data.product_name} - Import Export Hub`}</title>
      </Helmet>

      {/* IMAGE + BASIC INFO */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        <div>
          <img
            src={product_images}
            alt={product_name}
            className="rounded-xl w-full h-80 sm:h-96 object-cover shadow-md"
          />
        </div>

        <div>
          {/* Basic Info */}
          <div className="rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 p-6 space-y-4 transition-colors duration-500">
            <h1 className="text-4xl font-bold text-primary">{product_name}</h1>
            <p className="badge mt-2 text-lg bg-primary text-white p-3 font-semibold">
              {category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star
                  key={num}
                  size={20}
                  className={`${
                    rating >= num
                      ? "text-yellow-500 fill-yellow-400"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                />
              ))}
              <span className="text-lg font-semibold">({rating}/5)</span>
            </div>

            {/* Product Info */}
            <p className="mt-4 text-lg">
              <span className="font-semibold text-primary">Price:</span>{" "}
              {price_min} — {price_max}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-primary">Origin:</span>{" "}
              {origin_country}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-primary">Available:</span>{" "}
              {availableqQuantity}
            </p>

            {/* Import Button */}
            <button
              onClick={handleModal}
              className="btn bg-primary text-white font-bold w-full py-3 hover:bg-primary/80"
            >
              Import Now
            </button>

            {/* Import Modal */}
            <dialog
              ref={importModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-xl text-primary  text-center mb-4">
                  Import Products
                </h3>
                <form
                  onSubmit={handleModalForm}
                  className="space-y-4 text-gray-900 dark:text-amber-50 transition-colors duration-500"
                >
                  <input
                    type="text"
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200"
                    defaultValue={_id}
                    readOnly
                    placeholder="Product ID"
                  />

                  <input
                    type="url"
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200"
                    defaultValue={product_images}
                    readOnly
                    placeholder="Product Image"
                  />

                  <input
                    type="text"
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200"
                    defaultValue={product_name}
                    readOnly
                    placeholder="Product Name"
                  />

                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Price"
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200 focus:ring-2 focus:ring-primary/50"
                  />

                  <input
                    type="text"
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200"
                    defaultValue={rating}
                    readOnly
                    placeholder="Rating"
                  />

                  <input
                    type="text"
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200"
                    defaultValue={origin_country}
                    readOnly
                    placeholder="Origin Country"
                  />

                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter Quantity"
                    max={availableqQuantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-200 focus:ring-2 focus:ring-primary/50"
                  />

                  <div className="modal-action">
                    <button
                      disabled={
                        parseInt(quantity) > parseInt(availableqQuantity)
                      }
                      className={`btn w-full transition-colors duration-300 ${
                        parseInt(quantity) > parseInt(availableqQuantity)
                          ? "bg-gray-400 text-gray-700 dark:bg-gray-600 dark:text-gray-300 cursor-not-allowed"
                          : "bg-primary text-white hover:bg-primary/80"
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          {/* Product Description */}
          <div className="mt-6 p-6 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Product Description
            </h2>
            <p className="leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Specifications, Seller Info, Shipping */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6">
        {/* Specifications */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-500">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Specifications
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Weight:</strong> {specifications?.weight}
            </li>
            <li>
              <strong>Dimensions:</strong> {specifications?.dimensions}
            </li>
            <li>
              <strong>Material Type:</strong> {specifications?.material_type}
            </li>
          </ul>
        </div>

        {/* Seller Info */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-500 ">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Seller Information
          </h2>
          <p className="text-lg font-semibold">{seller_info?.company}</p>
          {seller_info?.verified && (
            <div className="badge text-white bg-primary p-3 flex items-center gap-2 mt-2">
              <CheckCircle size={18} />
              <span>Verified Supplier</span>
            </div>
          )}
        </div>

        {/* Shipping */}
        <div className="bg-gray-50  dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-500">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Shipping Details
          </h2>
          <div className="flex items-center gap-3 mb-2">
            <Truck size={20} />
            <p>
              <strong>Method:</strong> {shipping?.method}
            </p>
          </div>
          <p>
            <strong>Delivery Time:</strong> {shipping?.delivery_time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
