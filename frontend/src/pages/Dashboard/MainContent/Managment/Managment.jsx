import React, { useState } from "react";
import AccountComponent from "./components/account.component";
import General from "./components/general.component";
import CustomerSettings from "./components/customer.component";
import Salesman from "./components/salesman.component";
import ItemsSettings from "./components/items.component";
import Categories from "./components/categories.component";
import Invoice from "./components/invoice.component";

const Managment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

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
    <main className="pt-6 px-4">
      <header className="grid grid-cols-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 rounded">
          Main files
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 rounded">
          Reports
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 rounded">
          Utilities
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 mr-2 hover:bg-blue-600 rounded"
        >
          Setup
        </button>
      </header>
      <section>
        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto mt-20">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="bg-white rounded-lg w-[800px] overflow-hidden shadow-xl transform transition-all ">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  {[
                    "customers",
                    "salesman",
                    "items",
                    "categories",
                    "accounts",
                    "invoice",
                    "general",
                    "softwave",
                  ].map((key) => (
                    <button
                      key={key}
                      className={`text-sm px-3 py-2 ${
                        activeComponent === key
                          ? "bg-blue-500 text-white rounded"
                          : "text-blue-500"
                      }`}
                      onClick={() => setActiveComponent(key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                  <button
                    className="ml-4 bg-red-500 text-white rounded-full w-6 h-6 leading-none text-xs flex items-center justify-center"
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
