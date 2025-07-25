// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-bounce">
          RoadCode 🚀
        </h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links & Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 items-center font-semibold text-gray-800">
            {['Home', 'Products', 'About'].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="transition-colors duration-200 group-hover:text-blue-600">
                    {item}
                  </span>
                  <span className="block h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="relative inline-block px-5 py-2 font-bold text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-full"></span>
                <span className="absolute inset-0 w-full h-full bg-blue-500 rounded-full"></span>
                <span className="relative">Login</span>
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 text-2xl text-gray-700">
            <a
              href="https://www.instagram.com/nikkkhil/?hl=en"
              target="_blank"
              className="hover:text-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@MumbikerNikhil"
              target="_blank"
              className="hover:text-red-600 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {['Home', 'Products', 'About'].map((item, i) => (
            <div key={i}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600"
              >
                {item}
              </Link>
            </div>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-purple-500 transition"
          >
            Login
          </Link>
          <div className="flex gap-4 text-2xl text-gray-700 pt-2">
            <a
              href="https://www.instagram.com/nikkkhil/"
              target="_blank"
              className="hover:text-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@MumbikerNikhil"
              target="_blank"
              className="hover:text-red-600 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
