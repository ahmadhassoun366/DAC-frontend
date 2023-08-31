import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-900 fixed w-full z-50">
      <nav className="container mx-auto px-6 sm:py-4 py-5 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-2xl font-bold text-white lg:text-3xl"
              href="#"
              to="/"
            >
              DAC
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-200 focus:text-gray-600 focus:outline-none "
              aria-label="toggle menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill=""
                  color="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  color="white"

                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={` w-full gap-24 bg-gray-900 px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 ${
            isOpen ? "text-center" : "hidden"
          }`}
        >
      
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 gap-5">
            <Link
              className="text-gray-200 hover:text-blue-500  lg:mx-6"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-200 hover:text-blue-500 lg:mx-6"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-gray-200 hover:text-blue-500 lg:mx-6"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="text-gray-200 hover:text-blue-500 lg:mx-6"
              href="#"
            >
              FAQ
            </Link>
          </div>
          <Link
            className="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-200 transition-colors duration-300 hover:bg-gray-100  hover:text-gray-700 lg:mt-0 lg:w-auto mr-4"
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