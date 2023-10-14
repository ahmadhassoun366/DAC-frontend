import React, { useState } from "react";
import { Link } from "react-router-dom";

import van from "../../../../Assets/van.png";
import shop from "../../../../Assets/store.png";
import storepng from "../../../../Assets/department.png";

const Card = ({ title, description, imgSrc, stockName, managerType }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link
          className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded inline-flex items-center"
          to={`stock/${stockName}/${managerType}`}
        >
          Visit
        </Link>
      </div>
    </div>
  );
};
const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [stockName, setStockName] = useState("");

  const handleAddStock = () => {
    if (stockName) {
      setStocks((prev) => [...prev, { name: stockName }]);
      setStockName(""); // Reset the input field
    }
  };

  return (
    <div className="px-5">
      {/* Add stock section */}
      <div className="flex items-center space-x-4 my-8">
        <input
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
          placeholder="Enter stock name"
          className="w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <button
          onClick={handleAddStock}
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition ease-in-out duration-200"
        >
          Add Stock
        </button>
      </div>

      {/* Display stocks */}
      <div className="mt-8">
        {stocks.map((stock, index) => (
          <div key={index} className="mb-10">
            <div className="flex items-center mb-4">
              <span className="text-gray-600 text-xl font-semibold mr-2">
                Stock Name:
              </span>
              <h2 className="text-cyan-600 text-2xl font-bold">{stock.name}</h2>
            </div>
            <div className="flex justify-around p-10 gap-8">
              <Card
                title="Store"
                description="Manage your inventory, categorize products, track sales and more"
                imgSrc={storepng}
                stockName={stock.name}
                managerType="store"
              />
              <Card
                title="Shop"
                description="Your personal digital storefront to sell products directly to customers"
                imgSrc={shop}
                managerType="shop"
                stockName={stock.name}
              />
              <Card
                title="Vehicle"
                description="Track deliveries and manage logistics for your business operations"
                imgSrc={van}
                managerType="vehicle"
                stockName={stock.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stocks;
