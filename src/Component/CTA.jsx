import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../ContextApi/AuthContext";

const CTA = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="py-20 bg-primary text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Take Your Global Business to the Next Level
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
          Join thousands of importers and exporters worldwide. Connect with verified partners, explore opportunities, and grow your international trade business today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {!user && (
            <Link
              to="/login"
              className="btn btn-lg btn-outline btn-white flex items-center gap-2 hover:bg-white hover:text-primary transition duration-300"
            >
              Get Started <FaArrowRight />
            </Link>
          )}
          <Link
            to="/allproducts"
            className="btn btn-lg btn-white text-primary flex items-center gap-2 hover:bg-white/90 transition duration-300"
          >
            Explore Marketplace <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
