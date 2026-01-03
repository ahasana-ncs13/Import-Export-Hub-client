import { useState } from "react";
import {
  FaIndustry,
  FaLeaf,
  FaTshirt,
  FaHeartbeat,
  FaFlask,
  FaBolt,
  FaBuilding,
  FaCar,
  FaSpa,
  FaCouch,
} from "react-icons/fa";

const industries = [
  {
    title: "Manufacturing & Industrial Goods",
    description:
      "Machinery, tools, spare parts, and industrial equipment from verified manufacturers.",
    icon: <FaIndustry />,
  },
  {
    title: "Agriculture & Food Products",
    description:
      "Grains, spices, fruits, vegetables, seafood, and processed foods.",
    icon: <FaLeaf />,
  },
  {
    title: "Textile & Apparel",
    description:
      "Fabrics, garments, yarns, and fashion accessories for global trade.",
    icon: <FaTshirt />,
  },
  {
    title: "Pharmaceuticals & Healthcare",
    description:
      "Medicines, medical devices, PPE, and healthcare supplies.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Chemicals & Raw Materials",
    description:
      "Industrial chemicals, polymers, metals, and raw materials.",
    icon: <FaFlask />,
  },
  {
    title: "Electronics & Electrical Equipment",
    description:
      "Consumer electronics, appliances, and electronic components.",
    icon: <FaBolt />,
  },
  {
    title: "Construction & Building Materials",
    description:
      "Cement, steel, tiles, glass, and construction supplies.",
    icon: <FaBuilding />,
  },
  {
    title: "Automotive & Spare Parts",
    description:
      "Vehicles, auto components, batteries, and spare parts.",
    icon: <FaCar />,
  },
  {
    title: "Cosmetics & Personal Care",
    description:
      "Skincare, beauty, fragrance, and personal care products.",
    icon: <FaSpa />,
  },
  {
    title: "Home & Lifestyle Products",
    description:
      "Furniture, home décor, kitchenware, and lifestyle items.",
    icon: <FaCouch />,
  },
];

const ITEMS_PER_PAGE = 3;

const IndustriesWeServe = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(industries.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentIndustries = industries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-16">
      <div className="container w-11/12 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            We connect global buyers and suppliers across multiple industries
            with secure and compliant trade solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentIndustries.map((industry, index) => (
            <div
              key={index}
              className="card bg-blue-50 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body">
                <div className="text-primary text-3xl mb-3">
                  {industry.icon}
                </div>
                <h3 className="card-title text-lg">
                  {industry.title}
                </h3>
                <p className="text-sm text-base-content/70">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            className="btn btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${
                currentPage === i + 1 ? "btn-primary" : "btn-ghost"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
