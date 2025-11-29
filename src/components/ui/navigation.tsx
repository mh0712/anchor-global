"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import ReactCountryFlag from "react-country-flag"; // ✅ added for SVG flags

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const countries = [
    { code: "en" as Language, name: "United States", flag: "🇺🇸", locale: "usa", iso: "US" },
    { code: "es" as Language, name: "México", flag: "🇲🇽", locale: "mx", iso: "MX" },
    { code: "pt" as Language, name: "Brasil", flag: "🇧🇷", locale: "br", iso: "BR" },
  ];

  const navItems = [
    { name: t.navigation.home, href: "#home" },
    { name: t.navigation.about, href: "#about" },
    { name: t.navigation.services, href: "#services" },
    { name: t.navigation.network, href: "#network" },
    { name: t.navigation.contact, href: "#contact" },
  ];

  const smoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      const yOffset = -80;
      const y = (element as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const currentCountryData = countries.find(c => c.code === language);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-[#003366]/95 backdrop-blur-md border-b border-[rgb(252,251,248)]/20 shadow-lg", className)}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-[rgb(252,251,248)] rounded-full flex items-center justify-center shadow-xl overflow-hidden">
              <Image src="/Picture1.png" alt="Company Logo" width={60} height={60} />
            </div>
            <span className="text-white font-bold text-base tracking-wide">
              ANCHOR GLOBAL
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScroll(item.href)}
                className="text-white hover:text-[rgb(252,251,248)] transition-all duration-300 font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(252,251,248)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Country Selector & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Country Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-[rgb(252,251,248)]/20 hover:text-[rgb(252,251,248)] transition-all duration-300 text-xs"
                >
                  <Globe className="w-3 h-3 mr-1" />

                  {/* ✅ SVG flag in trigger */}
                  {currentCountryData?.iso && (
                    <ReactCountryFlag
                      countryCode={currentCountryData.iso}
                      svg
                      style={{ width: "1.2em", height: "0.9em" }}
                      className="mr-1"
                    />
                  )}

                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>

              {/* ✅ BLUE background dropdown */}
              <DropdownMenuContent
                align="end"
                className="
                  w-40 
                  bg-[#003366] text-white 
                  border border-white/15 
                  shadow-xl 
                  rounded-md
                  backdrop-blur-md
                "
              >
                {countries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    onClick={() => handleLanguageChange(country.code)}
                    className="
                      cursor-pointer 
                      text-white 
                      hover:bg-white/10 focus:bg-white/10 
                      hover:text-white focus:text-white
                      transition-colors duration-200
                    "
                  >
                    {/* ✅ SVG flag next to country */}
                    <ReactCountryFlag
                      countryCode={country.iso}
                      svg
                      style={{ width: "1.2em", height: "0.9em", marginRight: "0.5rem" }}
                    />
                    {t.countries[country.locale as keyof typeof t.countries]}
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
