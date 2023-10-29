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

  const modalButtonClasses =
    "text-sm px-3 py-2 hover:bg-blue-200 hover:text-blue-700 focus:outline-none focus:bg-blue-200";
  const activeButtonClasses = "bg-blue-500 text-white rounded";

  return (
    <main className="pt-6 px-4 bg-gray-100 min-h-screen">
      <header className="grid grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => setActivePage("mainFiles")}
          className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          <FaFileAlt className="mr-2 inline-block" /> Main files
        </button>
        <button
          onClick={() => setActivePage("reports")}
          className="bg-gray-700 text-white px-6 py-3 hover:bg-gray-600 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <FaChartBar className="mr-2 inline-block" /> Reports
        </button>
        <button
          onClick={() => setActivePage("utilities")}
          className="bg-blue-900 text-white px-6 py-3 hover:bg-blue-800 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800"
        >
          <FaWrench className="mr-2 inline-block" /> Utilities
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <FaCogs className="mr-2 inline-block" /> Setup
        </button>
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

              <div className="bg-white rounded-lg w-[800px] overflow-hidden shadow-xl transform transition-all">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  {Object.keys(components).map((key) => (
                    <button
                      key={key}
                      className={`${modalButtonClasses} ${
                        activeComponent === key
                          ? activeButtonClasses
                          : "text-blue-500"
                      }`}
                      onClick={() => setActiveComponent(key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                  <button
                    className="ml-4 bg-red-500 text-white rounded-full w-6 h-6 leading-none text-xs flex items-center justify-center focus:outline-none"
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
