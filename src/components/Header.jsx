// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-neutral-100">
      <nav className="container-custom px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg text-neutral-900">
                Dr. Maya Reynolds
              </h1>
              <p className="text-xs text-neutral-600">
                Licensed Clinical Psychologist
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-neutral-700 hover:text-primary-600 transition"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-neutral-700 hover:text-primary-600 transition"
            >
              About
            </a>
            <a
              href="#office"
              className="text-neutral-700 hover:text-primary-600 transition"
            >
              Our Office
            </a>
            <a
              href="#faq"
              className="text-neutral-700 hover:text-primary-600 transition"
            >
              FAQ
            </a>
            <button className="btn-primary">Schedule Consultation</button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-neutral-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
