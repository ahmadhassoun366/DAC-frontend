import React, { useState } from "react";
import AccountComponent from "./components/account.component";
import General from "./components/general.component";
import CustomerSettings from "./components/customer.component";
import Salesman from "./components/salesman.component";
import ItemsSettings from "./components/items.component";
import Categories from "./components/categories.component";
import Invoice from "./components/invoice.component";
import { FaFileAlt, FaChartBar, FaWrench, FaCogs } from "react-icons/fa";
import MainFiles from "./components/MainFiles";
import Reports from "./components/Reports";
import Utilities from "./components/Utilities";

const Managment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [activePage, setActivePage] = useState(null);

  const components = {
    customers: <CustomerSettings />,
    salesman: <Salesman />,
    items: <ItemsSettings />,
    categories: <Categories />,
    accounts: <AccountComponent />,
    invoice: <Invoice />,
    general: <General />,
    softwave: <div>Softwave Content</div>,
  };

  return (
    <main className="pt-6 px-4 bg-gray-100 min-h-screen text-gray-800 font-sans">
      <header className="flex justify-around space-x-6 mb-6 border-b border-gray-300 pb-3 ">
        <div
          onClick={() => setActivePage("mainFiles")}
          className={`${
            activePage === "mainFiles"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-gray-700 cursor-pointer"
          } py-1 flex items-center`}
        >
          <FaFileAlt className="mr-2" /> Main files
        </div>

        <div
          onClick={() => setActivePage("reports")}
          className={`${
            activePage === "reports"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-gray-700 cursor-pointer"
          } py-1 flex items-center`}
        >
          <FaChartBar className="mr-2" /> Reports
        </div>

        <div
          onClick={() => setActivePage("utilities")}
          className={`${
            activePage === "utilities"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-gray-700 cursor-pointer"
          } py-1 flex items-center`}
        >
          <FaWrench className="mr-2" /> Utilities
        </div>

        <div
          onClick={() => {
            setIsModalOpen(true);
            setActivePage("setup");
          }}
          className={`${
            activePage === "setup"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-gray-700 cursor-pointer"
          } py-1 flex items-center`}
        >
          <FaCogs className="mr-2" /> Setup
        </div>
      </header>

      {
        (activePage === "mainFiles" && <MainFiles />) ||
          (activePage === "reports" && <Reports />) ||
          (activePage === "utilities" && <Utilities />)
        // ... other components based on activePage ...
      }

      <section>
        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto mt-20 left-60">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="bg-white rounded-lg w-[800px] shadow-lg transform transition-all border border-gray-300">
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                  {Object.keys(components).map((key) => (
                    <button
                      key={key}
                      className={`text-blue-600 hover:bg-blue-100 px-2 py-1 rounded ${
                        activeComponent === key
                          ? "bg-blue-100 border-blue-500"
                          : ""
                      }`}
                      onClick={() => setActiveComponent(key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                  <button
                    className="ml-4 bg-red-200 text-red-600 rounded-full w-6 h-6 leading-none text-xs flex items-center justify-center focus:outline-none"
                    onClick={() => setIsModalOpen(false)}
                  >
                    X
                  </button>
                </div>
                <div className="p-4">{components[activeComponent]}</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Managment;
