import React, { Suspense, use, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { CheckCircle, Truck, Star } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextApi/AuthContext";

const ProductDetails = () => {
  const {user}=use(AuthContext)
  const data = useLoaderData();
  const importModalRef = useRef(null);

  const handleModal = () => {
    importModalRef.current.showModal();
  };
  //   console.log(data);
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
  const [availableqQuantity, setAvailableqQuantity] = useState(available_quantity);


  const handleModalForm = (e) => {
    e.preventDefault();
    importModalRef.current.close();
    const price = parseInt(e.target.price.value);
    const Quantity = parseInt(e.target.quantity.value);
    // console.log(price, Quantity);
    setQuantity(Quantity);
    e.target.reset();

    const importProduct = {
      product_name,
      product_images,
      rating,
      price,
      origin_country,
      Quantity,
      id:_id,
      email:user.email
    };

    fetch(`http://localhost:3000/myimports/${data._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(importProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          Swal.fire({
          title: "Import Completed!",
          text: "The product has been added to your import records",
          icon: "success",
        });
        }
        setAvailableqQuantity(availableqQuantity-Quantity)
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10  bg-primary rounded-xl shadow-lg text-lg">
      {/* IMAGE + BASIC INFO */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-8 p-6 ">
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
            <p className="badge mt-2 text-lg bg-primary text-secondary p-4 font-semibold">
              {category}
            </p>

            <div className="flex items-center gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star
                  key={num}
                  size={20}
                  className={`${
                    rating >= num
                      ? "text-yellow-800 fill-yellow-400"
                      : "text-yellow-800"
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
              {availableqQuantity}
            </p>

            <button
              onClick={handleModal}
              className="btn bg-primary text-secondary font-bold text-lg p-7 border-none w-full my-5 hover:text-white"
            >
              Import Now{" "}
            </button>
            <dialog
              ref={importModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-xl text-primary text-center ">
                  Import Products
                </h3>
                <form onSubmit={handleModalForm}>
                  <fieldset className="fieldset w-8/12 mx-auto">
                    <label className="label">Product Id</label>
                    <input
                      type="text"
                      className="input"
                      defaultValue={_id}
                      readOnly
                    />
                    <label className="label">Product Image</label>
                    <input
                      type="url"
                      className="input"
                      defaultValue={product_images}
                      readOnly
                    />

                    <label className="label">Product Name</label>
                    <input
                      type="text"
                      className="input"
                      defaultValue={product_name}
                      readOnly
                    />

                    <label className="label">Price</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter price"
                      name="price"
                    />

                    <label className="label">Rating</label>
                    <input
                      type="text"
                      className="input"
                      defaultValue={rating}
                      readOnly
                    />

                    <label className="label">Origin Country</label>
                    <input
                      type="text"
                      className="input"
                      defaultValue={origin_country}
                      readOnly
                    />

                    <label className="label">Quantity</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter available quantity"
                      name="quantity"
                      onChange={(e) => setQuantity(e.target.value)}
                    />

                    <div className="modal-action">
                      <button
                        disabled={
                          parseInt(quantity) > parseInt(available_quantity)
                        }
                        className={`btn w-full border-none
                                ${
                                  parseInt(quantity) >
                                  parseInt(available_quantity)
                                    ? "bg-gray-400 text-gray-700  opacity-70"
                                    : "bg-primary text-white hover:bg-primary/80"
                                }
  `}
                      >
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* DESCRIPTION */}
          <div className="mt-10 p-6 rounded-xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Product Description
            </h2>
            <p className="leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 p-10">
        {/* SPECIFICATIONS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
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

        {/* SELLER INFORMATION */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-primary">
            Seller Information
          </h2>

          <p className="text-lg font-semibold">{seller_info?.company}</p>

          {seller_info?.verified && (
            <div className="badge bg-primary p-5 flex items-center gap-2 text-secondary mt-1">
              <CheckCircle size={18} />
              <span>Verified Supplier</span>
            </div>
          )}
        </div>

        {/* SHIPPING */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-primary">
            Shipping Details
          </h2>

          <div className="flex items-center gap-3">
            <Truck size={20} />
            <p>
              <strong>Method:</strong> {shipping?.method}
            </p>
          </div>

          <p className="mt-2">
            <strong>Delivery Time:</strong> {shipping?.delivery_time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
