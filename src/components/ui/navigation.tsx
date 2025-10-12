"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Menu, X, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("usa");

  const countries = [
    { code: "usa", name: "United States", flag: "🇺🇸" },
    { code: "mx", name: "México", flag: "🇲🇽" },
    { code: "br", name: "Brasil", flag: "🇧🇷" },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Global Network", href: "#network" },
    { name: "Contact", href: "#contact" },
  ];

  const smoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-[#003366]/95 backdrop-blur-md border-b border-[rgb(252,251,248)]/20 shadow-lg", className)}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[rgb(252,251,248)] rounded-full flex items-center justify-center shadow-xl">
              <Anchor className="w-6 h-6 text-[#003366]" />
            </div>
            <span className="text-white font-bold text-2xl tracking-wide">
              ANCHOR GLOBAL
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScroll(item.href)}
                className="text-white hover:text-[rgb(252,251,248)] transition-all duration-300 font-medium text-base relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(252,251,248)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Country Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Country Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-[rgb(252,251,248)]/20 hover:text-[rgb(252,251,248)] transition-all duration-300">
                  <Globe className="w-4 h-4 mr-2" />
                  {countries.find(c => c.code === currentCountry)?.flag}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {countries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    onClick={() => setCurrentCountry(country.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{country.flag}</span>
                    {country.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-[#FFD700]/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#003366] border-t border-[#FFD700]/20">
            <div className="px-4 pt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    smoothScroll(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}