import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import navLinks from ".";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isServicePage = location.pathname === "/services";
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1B2340] shadow-md" : "bg-[#000000]"
        }`}
      >
      <div className="container mx-auto flex items-center justify-between px-5 h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-[#F5D386] font-semibold hover:text-white transition-colors"
        >
          <img src="/images/logo.png" alt="Logo" className="h-12 mr-2" />
          Agua International Education
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8 text-[#F5D386] focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>

        {/* Menu items */}
        <ul
          className={`absolute md:static top-20 left-0 w-full md:w-auto bg-[#1B2340] md:bg-transparent flex flex-col md:flex-row md:items-center md:space-x-6 text-lg transition-all duration-300 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.path} className="text-center md:text-left">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-[#F5D386] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
