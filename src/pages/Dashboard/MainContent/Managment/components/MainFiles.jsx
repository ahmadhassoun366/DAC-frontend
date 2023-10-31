import React from "react";
import { FaBook, FaBuilding, FaHandHoldingUsd, FaHeading, FaBalanceScale } from "react-icons/fa";

const MainFiles = () => {
  return (
    <>
      <header className="grid grid-cols-5 gap-4 mb-6">
        <button
          className="border-2 border-blue-500 bg-blue-200 text-blue-700 px-4 py-2 hover:bg-blue-300 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
        >
          <FaBook className="mr-2 inline-block" /> Chart of Accounts
        </button>
        <button
          className="border-2 border-green-500 bg-green-200 text-green-700 px-4 py-2 hover:bg-green-300 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md"
        >
          <FaBuilding className="mr-2 inline-block" /> Company Parameters
        </button>
        <button
          className="border-2 border-yellow-500 bg-yellow-200 text-yellow-700 px-4 py-2 hover:bg-yellow-300 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md"
        >
          <FaHandHoldingUsd className="mr-2 inline-block" /> PayReceipt Accounts
        </button>
        <button
          className="border-2 border-red-500 bg-red-200 text-red-700 px-4 py-2 hover:bg-red-300 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md"
        >
          <FaHeading className="mr-2 inline-block" /> Titles
        </button>
        <button
          className="border-2 border-purple-500 bg-purple-200 text-purple-700 px-4 py-2 hover:bg-purple-300 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-md"
        >
          <FaBalanceScale className="mr-2 inline-block" /> Balance Sheet Schema
        </button>
      </header>
    </>
  );
};

export default MainFiles;
