import React from "react";
import { BsGlobe, BsBoxSeam, BsTruck } from "react-icons/bs";

const HowItWorksTimeline = () => {
  const steps = [
    {
      icon: <BsGlobe className="text-3xl text-white" />,
      title: "Browse Products",
      description:
        "Discover verified global suppliers and exporters. Explore product catalogs with ease.",
      color: "bg-blue-500",
    },
    {
      icon: <BsBoxSeam className="text-3xl text-white" />,
      title: "Place Your Order",
      description:
        "Select the products you need, add them to your cart, and place your order securely.",
      color: "bg-green-500",
    },
    {
      icon: <BsTruck className="text-3xl text-white" />,
      title: "Track & Receive",
      description:
        "Monitor your shipment in real-time and receive goods safely and on time.",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">
        How Import Export Hub Works
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Simplifying international trade with secure, efficient, and transparent
        processes. Follow these steps to get started.
      </p>

      <div className="relative border-l-2 border-gray-200 ml-6 md:ml-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="mb-12 ml-6 md:ml-0 relative flex flex-col md:flex-row items-start md:items-center"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute -left-6 md:left-0 flex items-center justify-center w-12 h-12 rounded-full ${step.color}`}
            >
              {step.icon}
            </div>

            {/* Content */}
            <div className="mt-4 md:mt-0 md:ml-8">
              <h3 className="text-xl font-semibold mb-2">{`${index + 1}. ${step.title}`}</h3>
              <p className="text-gray-500 max-w-md">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksTimeline;
