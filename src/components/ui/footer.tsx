"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Anchor, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Globe,
  ChevronUp
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Global Network", href: "#network" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Husbanding Services",
    "Ship Chandlery", 
    "Fuel & Lubricants",
    "Port Logistics",
    "Crew Services",
    "Military Support"
  ];

  const regions = [
    { name: "United States", flag: "🇺🇸" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Other Locations", flag: "🌍" }
  ];

  return (
    <footer className="bg-[#003366] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image 
          src="/src13.jpg" 
          alt="Footer background" 
          fill 
          className="object-cover" 
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] to-[#003366]/90" />
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-[rgb(252,251,248)] rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                <Image src="/Picture1.png" alt="Company Logo" width={60} height={60} />
              </div>
              <span className="font-bold text-base">ANCHOR GLOBAL</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed text-xs">
              22 years of excellence in maritime services. Providing comprehensive 
              husbanding solutions for vessels worldwide, with a presence across the Americas, Europe, and the Middle East.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-xs hover:text-[rgb(252,251,248)] transition-colors duration-200 cursor-pointer">
                <Phone className="w-3 h-3 mr-2" />
                <span className="font-medium">+1 (832) 584-3574</span>
              </div>
              <div className="flex items-center text-xs hover:text-[rgb(252,251,248)] transition-colors duration-200 cursor-pointer">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@anchorglobal.com</span>
              </div>
              <div className="flex items-center text-sm hover:text-[rgb(252,251,248)] transition-colors duration-200">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Global Maritime Services</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-xl mb-8 font-display">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-xl mb-8 font-display">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm hover:text-[rgb(252,251,248)] transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-xl mb-8 font-display">Global Presence</h4>
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="mr-3">{region.flag}</span>
                  <span className="text-primary-foreground/80">{region.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h5 className="font-medium mb-4">Connect With Us</h5>
              <div className="flex space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:text-accent hover:bg-primary-hover p-3"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:text-accent hover:bg-primary-hover p-3"
                >
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Anchor Global. All rights reserved. | 22 Years of Maritime Excellence
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-primary-foreground/60 text-xs">24/7 Emergency Support</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-accent hover:bg-primary-hover px-4 py-2"
            >
              <ChevronUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}