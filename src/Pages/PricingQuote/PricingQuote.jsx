import React from "react";
import { Link } from "react-router";
import {
  FaPlane,
  FaShip,
  FaTruck,
  FaWeightHanging,
  FaRoute,
  FaBoxOpen,
  FaTags,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa";

export default function PricingQuote() {
  return (
    <section className="bg-base-100 py-26">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary">
            Pricing & Get a Quote
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Transparent pricing models with flexible options. Request a custom
            quote tailored to your shipping needs.
          </p>
        </div>

        {/* Pricing Models */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Pricing Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Air Freight */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg flex items-center gap-2">
                  <FaPlane className="text-primary" /> Air Freight
                </h3>
                <p className="text-sm text-base-content/70">
                  Fastest delivery option for urgent and high-value shipments.
                </p>
                <ul className="text-sm mt-3 space-y-1">
                  <li>• Express delivery</li>
                  <li>• Best for electronics & documents</li>
                  <li>• Higher cost, shorter time</li>
                </ul>
              </div>
            </div>

            {/* Sea Freight */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg flex items-center gap-2">
                  <FaShip className="text-primary" /> Sea Freight
                </h3>
                <p className="text-sm text-base-content/70">
                  Cost-effective solution for bulk and heavy shipments.
                </p>
                <ul className="text-sm mt-3 space-y-1">
                  <li>• Lowest shipping cost</li>
                  <li>• Ideal for large volumes</li>
                  <li>• Longer transit time</li>
                </ul>
              </div>
            </div>

            {/* Land Transport */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg flex items-center gap-2">
                  <FaTruck className="text-primary" /> Land Transport
                </h3>
                <p className="text-sm text-base-content/70">
                  Reliable regional delivery via road or rail.
                </p>
                <ul className="text-sm mt-3 space-y-1">
                  <li>• Flexible routes</li>
                  <li>• Ideal for domestic shipping</li>
                  <li>• Balanced cost & speed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Factors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Cost Factors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="alert bg-base-200 shadow flex gap-2">
              <FaWeightHanging className="text-primary" />
              <span>Weight & Volume</span>
            </div>
            <div className="alert bg-base-200 shadow flex gap-2">
              <FaRoute className="text-primary" />
              <span>Distance & Route</span>
            </div>
            <div className="alert bg-base-200 shadow flex gap-2">
              <FaBoxOpen className="text-primary" />
              <span>Product Type & Handling</span>
            </div>
          </div>
        </div>

        {/* Get a Quote Form */}
        <div className="card bg-base-200 shadow-xl max-w-4xl mx-auto">
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center">
              Get a Custom Quote
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Product Category */}
              <div>
                <label className="label flex gap-2 items-center">
                  <FaTags className="text-primary" />
                  <span className="label-text">Product Category</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Select category
                  </option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Machinery</option>
                  <option>Documents</option>
                </select>
              </div>

              {/* Transport Mode */}
              <div>
                <label className="label flex gap-2 items-center">
                  <FaTruck className="text-primary" />
                  <span className="label-text">Transport Mode</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Select mode
                  </option>
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Land Transport</option>
                </select>
              </div>

              {/* Origin */}
              <div>
                <label className="label flex gap-2 items-center">
                  <FaMapMarkerAlt className="text-primary" />
                  <span className="label-text">Origin</span>
                </label>
                <input
                  type="text"
                  placeholder="City / Country"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="label flex gap-2 items-center">
                  <FaMapMarkerAlt className="text-primary" />
                  <span className="label-text">Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="City / Country"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="label flex gap-2 items-center">
                  <FaWeightHanging className="text-primary" />
                  <span className="label-text">Weight / Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 20 kg"
                  className="input input-bordered w-full"
                />
              </div>

              {/* CTA */}
              <div className="flex items-end">
                <button disabled className="btn btn-primary w-full gap-2">
                  Request a Quote <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold">
            Need help choosing the right shipping option?
          </h3>
          <p className="text-base-content/70 mt-2">
            Our logistics experts are ready to assist you.
          </p>
          <Link
            to="/howitworkstimeline"
            className="btn btn-outline btn-primary mt-4 gap-2"
          >
            <FaHeadset /> Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
