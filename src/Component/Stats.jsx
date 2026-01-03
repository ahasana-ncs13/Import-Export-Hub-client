import {
  FaUsers,
  FaBoxOpen,
  FaGlobeAmericas,
  FaHandshake,
} from "react-icons/fa";

const Stats= () => {
  const statsdata = [
    {
      title: "Active Traders",
      value: "12,500+",
      desc: "Verified Importers & Exporters",
      icon: <FaUsers />,
    },
    {
      title: "Products Listed",
      value: "45,000+",
      desc: "Across Global Categories",
      icon: <FaBoxOpen />,
    },
    {
      title: "Countries Reached",
      value: "120+",
      desc: "International Trade Network",
      icon: <FaGlobeAmericas />,
    },
    {
      title: "Successful Deals",
      value: "30,000+",
      desc: "Trusted Trade Transactions",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="py-20 bg-blue-50 ">
      <div className="w-11/12 mx-auto px-4 ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl text-lime-600 md:text-4xl font-bold">
            Powering Global Trade
          </h2>
          <p className="mt-4 text-base-content/70 max-w-3xl mx-auto">
            Import Export Hub connects businesses worldwide with verified
            partners, transparent trade data, and seamless import-export
            solutions — all in one platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mb-14">
          {statsdata.map((stat, index) => (
            <div
              key={index}
              className="stats shadow-md bg-white "
            >
              <div className="stat place-items-center text-center">
                <div className="text-4xl text-primary mb-3">
                  {stat.icon}
                </div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value text-primary">{stat.value}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Ready to Grow Your Global Business?
          </h3>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">
              Get Started
            </button>
            <button className="btn btn-outline">
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
