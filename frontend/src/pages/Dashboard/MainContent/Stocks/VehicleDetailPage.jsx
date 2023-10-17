import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const VehicleDetailPage = () => {
  const { vehicleId } = useParams(); // Getting the vehicleId from the URL
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the vehicle data from local storage based on vehicleId
    const storedVehicles = localStorage.getItem("vehicles");
    console.log("Stored vehicles:", storedVehicles); // Check what's in local storage

    if (storedVehicles) {
      const allVehicles = JSON.parse(storedVehicles);
      const foundVehicle = allVehicles.find(
        (v) => String(v.id) === String(vehicleId)
      );
      console.log("Found vehicle:", foundVehicle); // Check if a vehicle was found

      if (foundVehicle) {
        setVehicle(foundVehicle);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [vehicleId]);

  if (loading) {
    return <div>Loading vehicle details...</div>;
  }

  if (!vehicle) {
    return <div>Vehicle not found!</div>;
  }

  return (
    <>
      <div className="flex justify-end items-center mr-10 gap-10">
        <Link
          to="./addItems"
          className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center"
        >
          + Add Item
        </Link>
        <Link
          to="./addItems"
          className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center"
        >
          Select Item
        </Link>
      </div>
      <div className="max-w-xl mx-auto mt-10 bg-white p-5 rounded shadow-md">
        <h1 className="text-3xl mb-5 text-center">{vehicle.title}</h1>
        <p className="mt-2 text-gray-600">
          Inventory Account Number: {vehicle.inventoryAccountNumber}
        </p>
        <p className="mt-2 text-gray-600">Assets Account Number: {vehicle.assetsAccountNumber}</p>
        <p className="mt-2 text-gray-600">Address: {vehicle.address}</p>
      </div>
    </>
  );
};

export default VehicleDetailPage;
