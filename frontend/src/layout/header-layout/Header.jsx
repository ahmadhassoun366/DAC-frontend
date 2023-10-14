import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "#pricing" },
    { label: "Contact", path: "#contact" },
    { label: "FAQ", path: "#faq" },
  ];

  return (
    <header className="bg-gray-900 fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 sm:py-5 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <Link className="text-2xl font-bold text-white lg:text-3xl" to="/">
            DAC
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-200 focus:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full 
          
          gap-24 bg-gray-900 px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100`}
        >
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-20 lg:flex-row">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className="text-gray-200 hover:text-blue-500 lg:mx-6"
                href={link.path}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            className="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 lg:mt-0 lg:w-auto mr-4"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
