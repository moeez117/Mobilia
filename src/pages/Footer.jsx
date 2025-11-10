import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  // ✅ Exact same routes as navbar - consistent with header
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", href: "https://linkedin.com/company/mobiliaconsulting" },
    { icon: <FaTwitter />, name: "Twitter", href: "https://twitter.com/mobiliaconsult" },
    { icon: <FaFacebook />, name: "Facebook", href: "https://facebook.com/mobiliaconsulting" },
    { icon: <FaInstagram />, name: "Instagram", href: "https://instagram.com/mobiliaconsulting" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* ✅ Main Footer Sections - Proper footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* ✅ Brand Section */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="text-2xl font-extrabold text-white tracking-tight inline-block mb-4"
            >
              Mobilia<span className="text-[#00bfa6]">Consulting</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Transforming businesses through innovation and strategic consulting solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-[#00bfa6] transform hover:scale-110 transition-all duration-300 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Quick Links - Similar to navbar but footer style */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block transition duration-300 hover:text-[#00bfa6] ${
                    location.pathname === link.href ? "text-[#00bfa6] font-medium" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ✅ Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-[#00bfa6] transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ✅ Contact & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <div className="flex items-center mb-3">
              <FaEnvelope className="text-[#00bfa6] mr-2" />
              <p className="text-gray-300 text-sm">Get the latest insights</p>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bfa6] focus:border-transparent text-sm text-white placeholder-gray-400"
              />
              <button className="w-full px-4 py-2 bg-[#00bfa6] text-white font-semibold rounded-lg hover:bg-[#00a38c] transition-all duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Bar - Similar to navbar bottom section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MobiliaConsulting. All rights reserved.
          </div>

          {/* ✅ Auth Links - Consistent with navbar */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-[#00bfa6] text-white text-sm font-semibold rounded-lg hover:bg-[#00a38c] transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* ✅ Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 text-center">
            <a href="mailto:hello@mobiliaconsulting.com" className="hover:text-[#00bfa6] transition-colors duration-300">
              ✉️ hello@mobiliaconsulting.com
            </a>
            <a href="tel:+1234567890" className="hover:text-[#00bfa6] transition-colors duration-300">
              📞 +1 (234) 567-890
            </a>
            <span>📍 123 Business Ave, City, State 12345</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;