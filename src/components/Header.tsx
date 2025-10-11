"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#003366] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white text-[#003366] px-4 py-2 rounded font-bold text-xl">
              ANCHOR GLOBAL
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#home" className="hover:text-[#FFD700] transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#FFD700] transition-colors">
              About Us
            </Link>
            <Link href="#services" className="hover:text-[#FFD700] transition-colors">
              Services
            </Link>
            <Link href="#solutions" className="hover:text-[#FFD700] transition-colors">
              Solutions
            </Link>
            <Link href="#contact" className="hover:text-[#FFD700] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <select className="bg-white text-[#003366] px-3 py-2 rounded border-none cursor-pointer">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="pt">PT</option>
            </select>
            <Link
              href="#contact"
              className="bg-[#FFD700] text-[#003366] px-6 py-2 rounded font-semibold hover:bg-[#FFC700] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#004488]">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className="hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#solutions"
                className="hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="#contact"
                className="hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <select className="bg-white text-[#003366] px-3 py-2 rounded w-full">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="pt">Português</option>
              </select>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
