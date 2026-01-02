import React from "react";
import { Helmet } from "react-helmet"; // For dynamically setting page metadata like title and SEO
import { AiFillThunderbolt } from "react-icons/ai"; // Lightning icon
import { BsGraphUpArrow } from "react-icons/bs"; // Growth arrow icon
import { FaGlobeAmericas, FaLock, FaScroll, FaHandshake } from "react-icons/fa"; // Globe, Lock, Scroll, Handshake icons
import { MdVerified } from "react-icons/md"; // Verified check icon
import { Link } from "react-router"; // Link component for SPA navigation

const AboutUs = () => {
  return (
    <>
      {/* =================== SEO SECTION =================== */}
      {/* Helmet sets the page title and metadata for SEO */}
      <Helmet>
        <title>About Us - Import Export Hub</title>
        {/* You could also add meta description, canonical URL, and more for SEO */}
      </Helmet>

      {/* =================== MAIN SECTION =================== */}
      <section className="bg-blue-100 py-16 pt-26 ">
        {/* Container centers content, sets width and spacing */}
        <div className="container mx-auto px-4 space-y-20 w-11/12">
          {/* =================== IMAGE + TEXT HERO =================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Hero Image: visually represents global trade */}
            <img
              src="https://plus.unsplash.com/premium_photo-1661964110162-54a342d51afc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Global Import Export Trade"
              className="rounded-2xl shadow-xl" // Rounded corners + shadow for depth
            />

            {/* Text content explaining what the platform is */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                About Import Export Hub
              </h2>
              <p className="text-lg mb-4">
                Import Export Hub is a modern B2B marketplace built to simplify
                international trade. We connect verified importers and exporters
                across borders, enabling secure and efficient global commerce.
              </p>
              <p className="text-base-content">
                Our platform helps businesses discover products, build trust,
                and grow internationally with confidence.
              </p>
            </div>
          </div>

          {/* =================== WHY CHOOSE US SECTION =================== */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10">
              Why Choose Us
            </h3>

            {/* 3 Feature Cards in Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Global Reach */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">
                    <FaGlobeAmericas /> Global Reach
                  </h4>
                  <p>
                    Connect with verified buyers and sellers from multiple
                    countries on one trusted platform.
                  </p>
                </div>
              </div>

              {/* Card 2: Smart Matching */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">
                    <AiFillThunderbolt /> Smart Matching
                  </h4>
                  <p>
                    Find the right trade partners quickly using advanced search
                    and category-based listings.
                  </p>
                </div>
              </div>

              {/* Card 3: Business Growth */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">
                    <BsGraphUpArrow /> Business Growth
                  </h4>
                  <p>
                    Expand your business internationally with tools designed for
                    scalability and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================== TRUST & COMPLIANCE SECTION =================== */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Trust & Compliance</h3>

            {/* Badges with icons to visually communicate trust and security */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="badge badge-outline badge-lg p-4">
                <MdVerified /> Verified Businesses
              </div>
              <div className="badge badge-outline badge-lg p-4">
                <FaLock /> Secure Data Protection
              </div>
              <div className="badge badge-outline badge-lg p-4">
                <FaScroll /> Trade Compliance Ready
              </div>
              <div className="badge badge-outline badge-lg p-4">
                <FaHandshake /> Trusted Partnerships
              </div>
            </div>

            {/* Explanation text reinforcing platform reliability */}
            <p className="max-w-3xl mx-auto mt-6 text-base-content">
              We prioritize security, transparency, and compliance to ensure a
              safe and reliable trading environment for all users.
            </p>
          </div>

          {/* =================== CALL TO ACTION =================== */}
          <div className="text-center">
            {/* Button encourages user to explore products immediately */}
            <Link to="/allproducts" className="btn btn-primary btn-lg">
              Start Trading Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
