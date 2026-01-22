import React from "react";
import { Helmet } from "react-helmet";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaGlobeAmericas, FaLock, FaScroll, FaHandshake } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Import Export Hub</title>
      </Helmet>

      <section className="py-16 pt-26  dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4 space-y-20 w-11/12 max-w-7xl">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661964110162-54a342d51afc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Global Import Export Trade"
              className="rounded-2xl shadow-xl w-full object-cover h-64 sm:h-80 md:h-full"
            />
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary dark:text-lime-400">
                About Import Export Hub
              </h2>
              <p className="text-lg mb-4 dark:text-gray-300">
                Import Export Hub is a modern B2B marketplace built to simplify
                international trade. We connect verified importers and exporters
                across borders, enabling secure and efficient global commerce.
              </p>
              <p className=" dark:text-gray-400 ">
                Our platform helps businesses discover products, build trust,
                and grow internationally with confidence.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10  dark:text-gray-100">
              Why Choose Us
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="card bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition p-6 flex flex-col gap-3">
                <h4 className="card-title flex items-center gap-2 text-primary dark:text-lime-400 text-lg sm:text-xl">
                  <FaGlobeAmericas /> Global Reach
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Connect with verified buyers and sellers from multiple countries on one trusted platform.
                </p>
              </div>

              {/* Card 2 */}
              <div className="card bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition p-6 flex flex-col gap-3">
                <h4 className="card-title flex items-center gap-2 text-primary dark:text-lime-400 text-lg sm:text-xl">
                  <AiFillThunderbolt /> Smart Matching
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Find the right trade partners quickly using advanced search and category-based listings.
                </p>
              </div>

              {/* Card 3 */}
              <div className="card bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition p-6 flex flex-col gap-3">
                <h4 className="card-title flex items-center gap-2 text-primary dark:text-lime-400 text-lg sm:text-xl">
                  <BsGraphUpArrow /> Business Growth
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Expand your business internationally with tools designed for scalability and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Trust & Compliance */}
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold mb-4  dark:text-gray-100">Trust & Compliance</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="badge badge-outline badge-lg p-3 sm:p-4  dark:text-gray-100 border-gray-400 dark:border-gray-600">
                <MdVerified /> Verified Businesses
              </div>
              <div className="badge badge-outline badge-lg p-3 sm:p-4  dark:text-gray-100 border-gray-400 dark:border-gray-600">
                <FaLock /> Secure Data Protection
              </div>
              <div className="badge badge-outline badge-lg p-3 sm:p-4  dark:text-gray-100 border-gray-400 dark:border-gray-600">
                <FaScroll /> Trade Compliance Ready
              </div>
              <div className="badge badge-outline badge-lg p-3 sm:p-4 dark:text-gray-100 border-gray-400 dark:border-gray-600">
                <FaHandshake /> Trusted Partnerships
              </div>
            </div>
            <p className="max-w-3xl mx-auto mt-4 dark:text-gray-300 text-sm sm:text-base">
              We prioritize security, transparency, and compliance to ensure a safe and reliable trading environment for all users.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link className="btn btn-primary btn-lg mt-6 sm:mt-8" to="/allproducts">
              Start Trading Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
