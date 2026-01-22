import React, { use } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddExports = () => {
  const { user } = use(AuthContext);

  const handleExportForm = (e) => {
    e.preventDefault();
    const form = e.target;

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exportProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        if (data.result.insertedId) {
          Swal.fire({
            title: "Export Added!",
            text: "Your export product has been successfully added.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto mb-10 min-h-screen pt-26 text-base-content">
      <Helmet>
        <title>Add Exports - Import Export Hub</title>
      </Helmet>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center my-10">
        <h1 className="text-3xl font-semibold mb-4 text-primary">
          Add New Export Product
        </h1>
        <p className="text-base-content/70">
          Add a new product to your export inventory by providing detailed and
          accurate information. Your product will be visible to importers once
          submitted.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-6xl mx-auto bg-base-100 py-10 rounded-2xl shadow-lg">
        <form onSubmit={handleExportForm}>
          <fieldset className="fieldset mx-auto text-lg p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-center mb-6">
              Export Product Information
            </h2>

            {/* Email & Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Exporter Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  defaultValue={user.email}
                  readOnly
                />
              </div>

              <div>
                <label className="label font-semibold">Product Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="product_name"
                  required
                />
              </div>
            </div>

            {/* Image & Category */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="label font-semibold">Product Image URL</label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  name="product_images"
                  required
                />
              </div>

              <div>
                <label className="label font-semibold">Category</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="category"
                  required
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Minimum Price"
                name="price_min"
                required
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Maximum Price"
                name="price_max"
                required
              />
            </div>

            {/* Origin & Rating */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Origin Country"
                name="origin_country"
                required
              />
              <input
                type="number"
                step="0.1"
                max="5"
                className="input input-bordered w-full"
                placeholder="Rating"
                name="rating"
              />
            </div>

            {/* Quantity */}
            <input
              type="number"
              className="input input-bordered w-full mt-4"
              placeholder="Available Quantity"
              name="available_quantity"
              required
            />

            {/* Description */}
            <textarea
              className="textarea textarea-bordered w-full mt-4"
              placeholder="Product Description"
              name="description"
              rows={4}
              required
            ></textarea>

            {/* Specifications */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <input className="input input-bordered" name="weight" placeholder="Weight" />
              <input className="input input-bordered" name="dimensions" placeholder="Dimensions" />
              <input className="input input-bordered" name="material_type" placeholder="Material Type" />
            </div>

            {/* Seller Info */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                className="input input-bordered"
                placeholder="Company Name"
                name="company"
                required
              />
              <select className="select select-bordered" name="verified">
                <option value="true">Verified Seller</option>
                <option value="false">Not Verified</option>
              </select>
            </div>

            {/* Shipping */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                className="input input-bordered"
                placeholder="Delivery Time"
                name="delivery_time"
              />
              <input
                className="input input-bordered"
                placeholder="Shipping Method"
                name="method"
              />
            </div>

            {/* Submit */}
            <button className="btn mt-8 w-full btn-primary">
              Add Export Product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddExports;
