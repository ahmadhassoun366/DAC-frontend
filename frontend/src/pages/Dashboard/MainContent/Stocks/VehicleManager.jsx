import React, { useState } from "react";

const VehicleCard = ({ title, description }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const VehicleManager = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicleName, setNewVehicleName] = useState("");

  const addVehicle = () => {
    setVehicles([...vehicles, { name: newVehicleName, categories: [] }]);
    setNewVehicleName("");
  };

  const addCategoryItem = (vehicleIndex, category, itemName) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles[vehicleIndex].categories.push({ category, itemName });
    setVehicles(updatedVehicles);
  };

  return (
    <div className="p-10 space-y-10">
      <div className="space-x-5">
        <input
          value={newVehicleName}
          onChange={(e) => setNewVehicleName(e.target.value)}
          placeholder="Enter vehicle name"
          className="w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <button
          onClick={addVehicle}
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition ease-in-out duration-200"
        >
          Add Vehicle
        </button>
      </div>

      {vehicles.map((vehicle, vehicleIndex) => (
        <div key={vehicleIndex} className="mb-10">
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-xl font-semibold mr-2">
              Vehicle Name:
            </span>
            <h2 className="text-cyan-600 text-2xl font-bold">{vehicle.name}</h2>
          </div>

          <div className="flex justify-around p-10 gap-8">
            <VehicleCard
              title={vehicle.name}
              description="Manage your deliveries, categorize routes, track fuel consumption and more"
            />
          </div>

          {/* Form to create new Category Item */}
          {/* ... (rest of your logic) */}
        </div>
      ))}
    </div>
  );
};

export default VehicleManager;
