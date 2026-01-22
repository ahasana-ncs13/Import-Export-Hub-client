import React from "react";
import { FaAward, FaCertificate, FaTrophy, FaMedal } from "react-icons/fa";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Top Exporter Award 2025",
      desc: "Recognized for excellence in global trade and outstanding export performance.",
      date: "Jan 2025",
      icon: <FaAward className="text-5xl text-yellow-500" />,
      signature: "International Trade Board",
    },
    {
      id: 2,
      title: "Certified Trusted Partner",
      desc: "Verified by international trade authorities for compliance and trustworthiness.",
      date: "Feb 2025",
      icon: <FaCertificate className="text-5xl text-blue-500" />,
      signature: "Global Trade Authority",
    },
    {
      id: 3,
      title: "Global Trade Excellence",
      desc: "Awarded for delivering exceptional import-export solutions worldwide.",
      date: "Mar 2025",
      icon: <FaTrophy className="text-5xl text-green-500" />,
      signature: "World Trade Organization",
    },
    {
      id: 4,
      title: "Customer Choice Award",
      desc: "Voted by our clients as the most reliable and efficient trade hub.",
      date: "Apr 2025",
      icon: <FaMedal className="text-5xl text-red-500" />,
      signature: "Customer Feedback Council",
    },
  ];

  return (
    <section className="py-20 bg-base-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Awards & Recognition
          </h2>
          <p className="mt-4 text-base-content/70 max-w-3xl mx-auto">
            Our achievements and certifications showcase our commitment to excellence in international trade.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-base-100 border-4 border-primary/30 rounded-xl shadow-lg p-8 relative hover:scale-105 transition-transform duration-300"
            >
              {/* Ribbon/Seal */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-base-100 rounded-full p-4 shadow-md">
                {award.icon}
              </div>

              {/* Certificate Content */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-2 text-base-content">{award.title}</h3>
                <p className="text-base text-base-content/70 mb-6">{award.desc}</p>

                {/* Date & Signature */}
                <div className="flex justify-between items-center mt-8 text-sm text-base-content/70">
                  <span>Date: {award.date}</span>
                  <span className="font-semibold">{award.signature}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
