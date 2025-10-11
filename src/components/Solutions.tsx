export default function Solutions() {
  const solutions = [
    {
      title: "Import & Export Solutions",
      description:
        "Streamlined processes for international trade with comprehensive documentation and compliance management.",
      features: [
        "Complete documentation handling",
        "Compliance with international regulations",
        "Multi-modal transportation options",
        "Real-time tracking and updates",
      ],
    },
    {
      title: "Supply Chain Management",
      description:
        "End-to-end supply chain optimization with advanced technology and expert consultation.",
      features: [
        "Inventory optimization",
        "Route planning and optimization",
        "Cost reduction strategies",
        "Performance analytics",
      ],
    },
    {
      title: "Specialized Cargo Handling",
      description:
        "Expert handling of specialized cargo including perishables, dangerous goods, and oversized items.",
      features: [
        "Temperature-controlled containers",
        "Hazmat certified handling",
        "Heavy lift capabilities",
        "Specialized packaging solutions",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Tailored Solutions
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customized logistics solutions designed to meet your specific business requirements
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#003366] to-[#0066AA] p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-2">{index + 1}</div>
                      <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-[#FFD700] mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-[#003366] text-white rounded-lg p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 text-gray-200">
                Let us help you streamline your logistics operations
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#FFD700] text-[#003366] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFC700] transition-all transform hover:scale-105 shadow-lg"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
