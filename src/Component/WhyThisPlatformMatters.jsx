import React from "react";
import { FaClock, FaShippingFast, FaIndustry, FaHandshake } from "react-icons/fa";

const impacts = [
  {
    id: 1,
    title: "Faster Order Processing",
    description:
      "Streamline order management and reduce processing times to get products to market quicker.",
    icon: <FaClock />,
    color: "bg-primary/20 text-primary",
  },
  {
    id: 2,
    title: "Reliable Shipping",
    description:
      "Track shipments in real-time and ensure goods arrive safely and on schedule anywhere in the world.",
    icon: <FaShippingFast />,
    color: "bg-info/20 text-info",
  },
  {
    id: 3,
    title: "Quality Products",
    description:
      "Partnering with trusted manufacturers to maintain consistent product standards for global trade.",
    icon: <FaIndustry />,
    color: "bg-success/20 text-success",
  },
  {
    id: 4,
    title: "Trusted Partnerships",
    description:
      "Build strong, transparent relationships with trade agencies, suppliers, and buyers worldwide.",
    icon: <FaHandshake />,
    color: "bg-warning/20 text-warning",
  },
];

const WhyThisPlatformMatters = () => {
  return (
    <section className="py-16 bg-base-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Why Choose Our Platform
          </h2>
          <p className="text-base-content/70">
            Making global trade simple, efficient, and reliable for businesses of all sizes.
          </p>
        </div>

        {/* Grid of Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-xl transition-colors duration-300 bg-base-100"
            >
              {/* Icon Circle */}
              <div
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${item.color}`}
              >
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg text-base-content mb-1">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisPlatformMatters;
