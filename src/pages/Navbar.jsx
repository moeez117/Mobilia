import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png"; // import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src={logo}
            alt="Mobilia Consulting Logo"
            className="h-8 w-auto"
          />
          <span
            className="text-[1.25rem] font-extrabold tracking-tight text-[#0a3c6d] 
                       opacity-0 translate-x-4 
                       group-hover:opacity-100 group-hover:translate-x-0 
                       transition-all duration-500"
          >
            Mobilia<span className="text-[#00bfa6]">Consulting</span>
          </span>
        </Link>

        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-5 lg:space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative font-medium text-[0.95rem] tracking-wide transition-all duration-300 group ${
                location.pathname === link.href
                  ? "text-[#00bfa6]"
                  : "text-gray-700 hover:text-[#00bfa6]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#00bfa6] to-[#0a3c6d] transition-all duration-300 rounded-full ${
                  location.pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/login"
            className="px-4 py-1.5 text-[#0a3c6d] font-semibold border border-[#0a3c6d]/70 rounded-full hover:bg-[#0a3c6d] hover:text-white transition-all duration-300 text-sm"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 bg-gradient-to-r from-[#00bfa6] to-[#009b85] text-white font-semibold rounded-full shadow-sm hover:shadow-lg transform hover:scale-[1.05] transition-all duration-300 text-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 shadow-md" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium rounded-lg py-1.5 px-3 transition-all duration-300 ${
                location.pathname === link.href
                  ? "text-[#00bfa6] bg-[#00bfa6]/10 border-l-4 border-[#00bfa6]"
                  : "text-gray-700 hover:text-[#00bfa6] hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 space-y-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-1.5 text-[#0a3c6d] font-semibold rounded-full border border-[#0a3c6d] hover:bg-[#0a3c6d] hover:text-white transition-all duration-300 text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-1.5 bg-gradient-to-r from-[#00bfa6] to-[#009b85] text-white font-semibold rounded-full shadow-sm hover:shadow-md transform hover:scale-[1.04] transition-all duration-300 text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
