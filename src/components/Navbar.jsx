import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-gray-100 px-8 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/logo.png" 
            alt="SAN Creation Logo"
            width={100} 
            height={50} 
            className="mr-2" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="https://www.behance.net/sanjulamaduranga" className="hover:text-blue-400 transition-colors">
            Portfolio
          </a>
          <a href="/services" className="hover:text-blue-400 transition-colors">
            Our Services
          </a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <a
            href="/"
            className="block hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="https://www.behance.net/sanjulamaduranga"
            className="block hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
          >
            Portfolio
          </a>
          <a
            href="/services"
            className="block hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="block hover:text-blue-400 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;