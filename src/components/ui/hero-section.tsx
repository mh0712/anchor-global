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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 pb-6">
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
        {[...Array(20)].map((_, i) => {
          const duration = 5 + Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[rgb(252,251,248)]/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationName: 'float',
                animationDuration: `${duration}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${i * 0.3}s`
              }}
            />
          );
        })}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-4 pt-4">
            <div className="w-12 h-12 bg-[rgb(252,251,248)]/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[rgb(252,251,248)]/30 shadow-2xl" style={{animation: 'float 3s ease-in-out infinite'}}>
              <Anchor className="w-6 h-6 text-[rgb(252,251,248)]" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Anchor Global
            <span className="block text-[rgb(252,251,248)] mt-1">
              Maritime Excellence
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            <strong className="font-bold">22 years</strong> of experience providing comprehensive husbanding services throughout 
            <strong className="text-[rgb(252,251,248)] font-bold"> North America, Central America, South America, Caribbean, , Europe, and Middle East</strong>
          </p>
          
          {/* Description */}
          <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl mx-auto">
            Supporting all vessel types: Tankers, Cruise Ships, Supply Boats, and Military Vessels 
            with the highest efficiency and quality standards
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={() => smoothScroll('#services')}
              className="bg-[rgb(252,251,248)] hover:bg-[rgb(242,241,238)] text-[#003366] px-6 py-3 text-sm font-bold shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span className="flex items-center">
                Explore Our Services
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => smoothScroll('#contact')}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-[rgb(252,251,248)] px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-3 h-3 mr-2" />
              Contact Us Today
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-4 border-t border-white/20">
            {[
              { value: "22+", label: "Years Experience" },
              { value: "15+", label: "Countries" },
              { value: "75+", label: "Major Ports" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold text-[rgb(252,251,248)] mb-1">{stat.value}</div>
                <div className="text-white/80 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}