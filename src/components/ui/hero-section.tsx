"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Phone } from "lucide-react";
import Image from "next/image";

const smoothScroll = (targetId: string) => {
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/src1.jpg"
          alt="Maritime shipping"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/95 via-[#001f3f]/85 to-[#003366]/75" />
      </div>
      
      {/* Animated overlay particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[rgb(252,251,248)]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8 pt-10">
            <div className="w-20 h-20 bg-[rgb(252,251,248)]/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[rgb(252,251,248)]/30 shadow-2xl" style={{animation: 'float 3s ease-in-out infinite'}}>
              <Anchor className="w-10 h-10 text-[rgb(252,251,248)]" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Anchor Global
            <span className="block text-[rgb(252,251,248)] mt-2">
              Maritime Excellence
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            <strong className="font-bold">22 years</strong> of experience providing comprehensive husbanding services throughout 
            <strong className="text-[rgb(252,251,248)] font-bold"> North America, Central America, South America, and the Caribbean</strong>
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Supporting all vessel types: Tankers, Cruise Ships, Supply Boats, and Military Vessels 
            with the highest efficiency and quality standards
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={() => smoothScroll('#services')}
              className="bg-[rgb(252,251,248)] hover:bg-[rgb(242,241,238)] text-[#003366] px-10 py-6 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span className="flex items-center">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => smoothScroll('#contact')}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-[rgb(252,251,248)] px-10 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3" />
              Contact Us Today
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            {[
              { value: "22+", label: "Years Experience" },
              { value: "15+", label: "Countries" },
              { value: "75+", label: "Major Ports" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[rgb(252,251,248)] mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
        onClick={() => smoothScroll('#about')}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-[rgb(252,251,248)] transition-colors duration-300">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}