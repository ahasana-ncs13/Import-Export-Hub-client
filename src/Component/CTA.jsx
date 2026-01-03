import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
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
          <button className="btn btn-lg btn-outline btn-white flex items-center gap-2 hover:bg-white hover:text-primary transition duration-300">
            Get Started <FaArrowRight />
          </button>
          <button className="btn btn-lg btn-white text-primary flex items-center gap-2 hover:bg-white/90 transition duration-300">
            Explore Marketplace <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
