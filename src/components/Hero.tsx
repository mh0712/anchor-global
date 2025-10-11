export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#003366] via-[#004488] to-[#0066AA] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Global Maritime
            <span className="text-[#FFD700]"> Logistics Partner</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Comprehensive shipping solutions across the Americas and beyond
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300">
            Ocean Freight • Air Freight • Customs Clearance • Warehousing • Project Cargo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-[#FFD700] text-[#003366] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFC700] transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#003366] transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
