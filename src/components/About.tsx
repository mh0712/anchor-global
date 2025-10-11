export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              About Anchor Global
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in international maritime logistics with excellence and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-[#003366] to-[#0066AA] rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <svg
                  className="w-32 h-32 mx-auto mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <p className="text-sm">Company Image Placeholder</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-[#003366] mb-6">
                Your Trusted Maritime Partner
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Anchor Global is a premier international logistics company specializing in
                comprehensive maritime solutions. With operations spanning across North America,
                South America, and beyond, we provide seamless shipping experiences for businesses
                of all sizes.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our expertise covers ocean freight, air freight, customs clearance, warehousing,
                and specialized project cargo handling. We pride ourselves on delivering reliable,
                cost-effective, and timely solutions tailored to your unique needs.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-[#003366] mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-[#003366] mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-[#003366] mb-2">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-[#003366] mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
