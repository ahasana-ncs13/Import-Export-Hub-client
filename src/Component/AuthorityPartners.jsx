import React from "react";
import { FaIndustry, FaShippingFast, FaHandshake } from "react-icons/fa";

const partners = [
  {
    id: 1,
    title: "Manufacturing Partners",
    description:
      "Collaborating with top manufacturers to ensure high-quality products for global trade.",
    icon: <FaIndustry />,
  },
  {
    id: 2,
    title: "Logistics & Shipping",
    description:
      "Efficient transport and shipping solutions to move goods quickly and safely worldwide.",
    icon: <FaShippingFast />,
  },
  {
    id: 3,
    title: "Trusted Trade Agencies",
    description:
      "Working with certified trade agencies to ensure secure transactions and compliance.",
    icon: <FaHandshake />,
  },
];

const AuthorityPartners = () => {
  return (
    <section className="py-16 sm:py-20 bg-base-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-primary">
            Our Trusted Partners in Trade
          </h2>
          <p className="text-sm sm:text-base text-base-content/70 max-w-2xl mx-auto">
            We collaborate with industry leaders, shipping experts, and trade agencies to make importing and exporting smooth, secure, and efficient.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-start gap-4 sm:gap-5 bg-base-100 p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary text-3xl mt-1 shrink-0">
                {partner.icon}
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1 text-base-content">
                  {partner.title}
                </h3>
                <p className="text-base-content/70 text-sm sm:text-base leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-14 sm:mt-16 text-center">
          <span className="text-xs tracking-widest uppercase text-base-content/50">
            Partnerships That Drive Global Trade Forward
          </span>
        </div>
      </div>
    </section>
  );
};

export default AuthorityPartners;
