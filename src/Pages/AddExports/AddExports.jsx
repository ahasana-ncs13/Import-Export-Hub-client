import React, { use } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddExports = () => {
  const { user } = use(AuthContext);

  const handleExportForm = (e) => {
    e.preventDefault();
    const _id = e.target.id.value;
    const product_name = e.target.name.value;
    const product_images = e.target.image.value;
    const price_min = e.target.min_price.value;
    const price_max = e.target.max_price.value;
    const rating = e.target.rating.value;
    const origin_country = e.target.Origin.value;
    const available_quantity = parseInt(e.target.quantity.value);

    // console.log(
    //    _id,
    //   product_name,
    //   product_images,
    //   price_min,
    //   price_max,
    //   rating,
    //   origin_country,
    //   available_quantity
    // );
    const exportProduct = {
      product_name,
      product_images,
      price_min,
      price_max,
      rating,
      origin_country,
      available_quantity,
      id:_id,
      email: user.email,
    };

    fetch("https://import-export-hub-server-phi.vercel.app/myexports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exportProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        // console.log(data);
        if (data.result.insertedId) {
          Swal.fire({
            title: "Import Completed!",
            text: "The product has been added to your import records",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto mb-10 text-white min-h-screen pt-26">
        <Helmet>
        <title>Add Exports - Import Export Hub</title>
      </Helmet>
      <div className="max-w-200 mx-auto text-center my-10">
        <h1 className="text-3xl text-primary font-medium mb-5">
          Add New Export Product
        </h1>
        <p className="text-gray-500">
          Easily add a new product to your export inventory by filling out the
          details below. Provide essential information such as product name,
          image, price, origin country, rating, and available quantity. Once
          submitted, the product will be saved to the database and instantly
          appear on the All Products page for buyers to explore.
        </p>
      </div>
      <div className="max-w-150 mx-auto bg-primary py-10 rounded-2xl ">
        <form onSubmit={handleExportForm}>
          <fieldset className="fieldset w-6/12 mx-auto text-lg ">
            <label className="label">Product Id</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter Product Id"
              name="id"
            />
            <label className="label">Product Name</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter Product Name"
              name="name"
            />

            <label className="label">Product Image</label>
            <input
              type="url"
              className="input text-primary"
              placeholder="Enter Product Image"
              name="image"
            />

            <label className="label">Min Price</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter min price"
              name="min_price"
            />
            <label className="label">Max Price</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter max price"
              name="max_price"
            />

            <label className="label">Rating</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter rating"
              name="rating"
            />

            <label className="label">Origin Country</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter Origin Country"
              name="Origin"
            />

            <label className="label">Quantity</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Enter available quantity"
              name="quantity"
            />

            <button className="btn mt-3 w-full border-none bg-secondary text-primary">
              Add Export
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddExports;
