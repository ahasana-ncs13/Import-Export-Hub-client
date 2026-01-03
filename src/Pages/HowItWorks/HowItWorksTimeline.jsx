import React from "react";
import { BsGlobe, BsBoxSeam, BsTruck, BsHeadset } from "react-icons/bs";

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
    <div className="bg-blue-50  py-12 px-4 sm:py-16 sm:px-6 lg:px-8 ">
        <div className="pt-25 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        How Import Export Hub Works
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
        Simplifying international trade with secure, efficient, and transparent
        processes. Follow these steps to get started.
      </p>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="mb-12 ml-6 sm:ml-12 relative flex flex-col sm:flex-row sm:items-center"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute -left-6 sm:-left-6 flex items-center justify-center w-12 h-12 rounded-full ${step.color}`}
            >
              {step.icon}
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-0 sm:ml-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{`${
                index + 1
              }. ${step.title}`}</h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-md">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="mt-12 sm:mt-16 bg-gray-50 p-6 sm:p-10 rounded-xl shadow-lg text-center">
        <BsHeadset className="text-4xl sm:text-5xl text-blue-500 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          24/7 Customer Support
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
          Our dedicated support team is always ready to assist you with any
          inquiries or concerns. From order placement to shipment tracking, we
          ensure a smooth and worry-free experience.
        </p>
        <div className="mt-6 space-y-2 text-sm sm:text-base text-gray-700">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <span className="text-gray-600">support@importexporthub.com</span>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <span className="text-gray-600">+880 1234 567 890</span>
          </p>
          <p>
            <span className="font-semibold">Business Hours:</span>{" "}
            <span className="text-gray-600">24/7 Support Available</span>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HowItWorksTimeline;
