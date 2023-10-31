import React from "react";
import {
  FaBook,
  FaSearch,
  FaCalendarAlt,
  FaLock,
  FaUnlock,
} from "react-icons/fa";

const buttons = [
  { label: "Zeroize And Repost Journal", icon: FaBook, color: "blue" },
  { label: "Search JV's Contents", icon: FaSearch, color: "green" },
  { label: "End of year", icon: FaCalendarAlt, color: "yellow" },
  { label: "Change Password", icon: FaLock, color: "red" },
  { label: "Manually unlocking document", icon: FaUnlock, color: "purple" },
];
const Utilities = () => {
  return (
    <>
      <header className="grid grid-cols-5 gap-4 mb-6">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`border-2 border-${btn.color}-500 bg-${btn.color}-200 text-${btn.color}-700 px-4 py-2 hover:bg-${btn.color}-300 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${btn.color}-300 shadow-md`}
          >
            <btn.icon className="mr-2 inline-block" /> {btn.label}
          </button>
        ))}
      </header>
    </>
  );
};

export default Utilities;
