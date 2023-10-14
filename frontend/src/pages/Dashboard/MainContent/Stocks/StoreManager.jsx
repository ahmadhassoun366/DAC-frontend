import React, { useState } from "react";

const StoreCard = ({ title, description }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const StoreManager = () => {
  const [shops, setShops] = useState([]);
  const [newShopName, setNewShopName] = useState("");

  // Function to handle adding a new shop
  const addShop = () => {
    setShops([...shops, { name: newShopName, categories: [] }]);
    setNewShopName("");
  };

  // Function to handle adding a new category item
  const addCategoryItem = (shopIndex, category, itemName) => {
    const updatedShops = [...shops];
    updatedShops[shopIndex].categories.push({ category, itemName });
    setShops(updatedShops);
  };

  return (
    <div className="p-10 space-y-10">
      {/* Form to create new Shop */}
      <div className="space-x-5">
        <input
          value={newShopName}
          onChange={(e) => setNewShopName(e.target.value)}
          placeholder="Enter shop name"
          className="w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <button
          onClick={addShop}
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition ease-in-out duration-200"
        >
          Add Shop
        </button>
      </div>

      {/* Display Shops */}
      {shops.map((shop, shopIndex) => (
        <div key={shopIndex} className="mb-10">
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-xl font-semibold mr-2">
              Shop Name:
            </span>
            <h2 className="text-cyan-600 text-2xl font-bold">{shop.name}</h2>
          </div>

          <div className="flex justify-around p-10 gap-8">
            <StoreCard
              title={shop.name}
              description="Manage your inventory, categorize products, track sales and more"
            />
          </div>

          {/* Form to create new Category Item */}
          {/* ... (rest of your logic) */}
        </div>
      ))}
    </div>
  );
};

export default StoreManager;
