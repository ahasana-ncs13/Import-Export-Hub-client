import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About Us | Import Export Hub</title>
        <meta
          name="description"
          content="Import Export Hub is a global B2B platform connecting trusted importers and exporters worldwide. Discover products, verified partners, and seamless trade solutions."
        />
        <meta
          name="keywords"
          content="import export platform, global trade, B2B marketplace, exporters, importers"
        />
      </Helmet>

      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4 space-y-20">

          {/* Image + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="/trade.jpg"
              alt="Global Import Export Trade"
              className="rounded-2xl shadow-xl"
            />

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

          {/* Why Choose Us */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10">
              🌐 Why Choose Us
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">🌍 Global Reach</h4>
                  <p>
                    Connect with verified buyers and sellers from multiple
                    countries on one trusted platform.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">⚡ Smart Matching</h4>
                  <p>
                    Find the right trade partners quickly using advanced search
                    and category-based listings.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">📈 Business Growth</h4>
                  <p>
                    Expand your business internationally with tools designed
                    for scalability and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust & Compliance */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">
              🔐 Trust & Compliance
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="badge badge-outline badge-lg p-4">
                ✅ Verified Businesses
              </div>
              <div className="badge badge-outline badge-lg p-4">
                🔒 Secure Data Protection
              </div>
              <div className="badge badge-outline badge-lg p-4">
                📜 Trade Compliance Ready
              </div>
              <div className="badge badge-outline badge-lg p-4">
                🤝 Trusted Partnerships
              </div>
            </div>

            <p className="max-w-3xl mx-auto mt-6 text-base-content">
              We prioritize security, transparency, and compliance to ensure a
              safe and reliable trading environment for all users.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="btn btn-primary btn-lg">
              Start Trading Today
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;
