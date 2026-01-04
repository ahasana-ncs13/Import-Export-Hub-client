import React, { use } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddExports = () => {
  const { user } = use(AuthContext);

  const handleExportForm = (e) => {
    e.preventDefault();
     const form = e.target;
  
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
    email: user.email,

    product_name: form.product_name.value,
    product_images: form.product_images.value,
    category: form.category.value,

    price_min: form.price_min.value,
    price_max: form.price_max.value,

    origin_country: form.origin_country.value,
    rating: parseFloat(form.rating.value || 0),
    available_quantity: parseInt(form.available_quantity.value),

    description: form.description.value,

    specifications: {
      weight: form.weight.value,
      dimensions: form.dimensions.value,
      material_type: form.material_type.value,
    },

    seller_info: {
      company: form.company.value,
      verified: form.verified.value === "true",
    },

    shipping: {
      delivery_time: form.delivery_time.value,
      method: form.method.value,
    },

    created_at: new Date().toISOString(),
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
      <div className="max-w-6xl mx-auto text-primary bg-blue-50 py-10 rounded-2xl ">
        <form onSubmit={handleExportForm}>
          <fieldset className="fieldset mx-auto text-lg p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              Add Export Product
            </h2>

            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mt-6">Exporter Email</h3>
                <input
                  type="email"
                  className="input input-bordered text-primary w-full"
                  // name="email"
                  required
                  defaultValue={user.email}
                  readOnly
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-6">Product Name</h3>{" "}
                <input
                  type="text"
                  className="input input-bordered text-primary w-full"
                  placeholder="Enter Product Name"
                  name="product_name"
                  required
                />
              </div>
            </div>

            {/* Image & Category */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-xl font-semibold mt-6">
                  Product Image URL
                </h3>
                <input
                  type="url"
                  className="input input-bordered text-primary w-full"
                  placeholder="Enter Product Image URL"
                  name="product_images"
                  required
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-6">Category</h3>{" "}
                <input
                  type="text"
                  className="input input-bordered text-primary w-full"
                  placeholder="Food & Agriculture"
                  name="category"
                  required
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-xl font-semibold mt-6">Minimum Price</h3>{" "}
                <input
                  type="text"
                  className="input input-bordered text-primary w-full"
                  placeholder="25 USD per kg"
                  name="price_min"
                  required
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-6">Maximum Price</h3>{" "}
                <input
                  type="text"
                  className="input input-bordered text-primary w-full"
                  placeholder="32 USD per kg"
                  name="price_max"
                  required
                />
              </div>
            </div>

            {/* Origin & Rating */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-xl font-semibold mt-6">Origin Country</h3>
                <input
                  type="text"
                  className="input input-bordered text-primary w-full"
                  placeholder="India"
                  name="origin_country"
                  required
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-6">Rating</h3>
                <input
                  type="number"
                  step="0.1"
                  max="5"
                  className="input input-bordered text-primary w-full"
                  placeholder="4.7"
                  name="rating"
                />
              </div>
            </div>

            {/* Quantity */}
            <h3 className="text-xl font-semibold mt-6">Available Quantity</h3>
            <div className="mt-4">
              <input
                type="number"
                className="input input-bordered text-primary w-full"
                placeholder="4972"
                name="available_quantity"
                required
              />
            </div>

            {/* Description */}
            <h3 className="text-xl font-semibold mt-6">Product Description</h3>
            <div className="mt-4">
              <textarea
                className="textarea textarea-bordered text-primary w-full"
                placeholder="Write detailed product description..."
                name="description"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Specifications */}
            <h3 className="text-xl font-semibold mt-6">Specifications</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              <input
                type="text"
                className="input input-bordered text-primary"
                placeholder="Weight (e.g. 1kg bag)"
                name="weight"
              />
              <input
                type="text"
                className="input input-bordered text-primary"
                placeholder="Dimensions (20x10x5 cm)"
                name="dimensions"
              />
              <input
                type="text"
                className="input input-bordered text-primary"
                placeholder="Material Type (Food Grain)"
                name="material_type"
              />
            </div>

            {/* Seller Info */}
            <h3 className="text-xl font-semibold mt-6">Seller Information</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                className="input input-bordered text-primary"
                placeholder="Company Name"
                name="company"
                required
              />

              <select
                className="select select-bordered text-primary"
                name="verified"
              >
                <option value="true">Verified Seller</option>
                <option value="false">Not Verified</option>
              </select>
            </div>

            {/* Shipping */}
            <h3 className="text-xl font-semibold mt-6">Shipping Details</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                className="input input-bordered text-primary"
                placeholder="Delivery Time (15–20 days)"
                name="delivery_time"
              />
              <input
                type="text"
                className="input input-bordered text-primary"
                placeholder="Shipping Method (Sea)"
                name="method"
              />
            </div>

            {/* Submit */}
            <button className="btn mt-8 w-full bg-secondary text-primary border-none">
              Add Export Product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddExports;
