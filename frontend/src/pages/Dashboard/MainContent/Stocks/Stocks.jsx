import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import van from "../../../../Assets/van.png";
import shop from "../../../../Assets/store.png";
import storepng from "../../../../Assets/department.png";

const Stocks = () => {
  const [stores, setStores] = useState([]);
  const [shops, setShops] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentType, setCurrentType] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [inventoryAccountNumber, setInventoryAccountNumber] = useState("");
  const [assetsAccountNumber, setAssetsAccountNumber] = useState("");

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const createEntity = () => {
    if (!title || !address || !inventoryAccountNumber || !assetsAccountNumber) {
      alert("Please fill all fields!");
      return;
    }

    const newEntity = {
      id: generateId(),
      inventoryAccountNumber,
      title,
      address,
      assetsAccountNumber,
      imgSrc:
        currentType === "Store"
          ? storepng
          : currentType === "Shop"
          ? shop
          : van,
    };

    if (currentType === "Store") {
      const newStores = [...stores, newEntity];
      setStores(newStores);
      localStorage.setItem("stores", JSON.stringify(newStores));
    } else if (currentType === "Shop") {
      const newShops = [...shops, newEntity];
      setShops(newShops);
      localStorage.setItem("shops", JSON.stringify(newShops));
    } else {
      const newVehicles = [...vehicles, newEntity];
      setVehicles(newVehicles);
      localStorage.setItem("vehicles", JSON.stringify(newVehicles));
    }

    alert(`${currentType} created successfully!`);
    setTitle("");
    setAddress("");
    setInventoryAccountNumber("");
    setAssetsAccountNumber("");
    setShowModal(false);
  };

  useEffect(() => {
    const storedStores = JSON.parse(localStorage.getItem("stores"));
    const storedShops = JSON.parse(localStorage.getItem("shops"));
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles"));

    if (storedStores) setStores(storedStores);
    if (storedShops) setShops(storedShops);
    if (storedVehicles) setVehicles(storedVehicles);
  }, []);

  const CreatedEntityCard = ({
    id,
    title,
    address,
    imgSrc,
    entityType,
    inventoryAccountNumber,
    assetsAccountNumber,
  }) => (
    <Link
      to={`${entityType}/${id}`}
      className="relative w-full p-5 bg-transparent hover:bg-gray-50 transition-all duration-300 ease-in-out rounded-lg m-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer"
    >
      <img
        className="absolute top-0 left-0 transform -translate-x-1 -translate-y-1/2 w-20 h-20 object-cover rounded-full shadow-md border-4 border-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
        src={imgSrc}
        alt={title}
      />

      <div className="flex items-center justify-center space-x-6 ">
        <div>
          <h2 className="text-gray-800 text-2xl font-medium mb-2 border-b border-gray-300 pb-2 text-center">
            {title}
          </h2>

          <div className="grid grid-cols-2 gap-4 text-gray-700 space-x-5 py-5">
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wide font-semibold text-gray-500 mb-1">
                Inventory
              </p>
              <span className="text-base text-gray-800">
                {inventoryAccountNumber}
              </span>
            </div>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wide font-semibold text-gray-500 mb-1">
                Assets
              </p>
              <span className="text-base text-gray-800">
                {assetsAccountNumber}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="p-8 bg-gray-100">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-4">
                Available total amount of inventory: $1500
              </h1>
              <h1 className="text-2xl font-semibold text-cyan-600">
                Beginning inventory: $1500
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold">Current Year:</span>
              <h1 className="text-xl font-semibold text-gray-600">2023</h1>
            </div>
          </div>

          <div className="flex justify-center space-x-6 my-6">
            <button
              className="bg-cyan-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-cyan-700 focus:outline-none"
              onClick={() => {
                setShowModal(true);
                setCurrentType("Store");
              }}
            >
              Create Store
            </button>
            <button
              className="bg-cyan-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-cyan-700 focus:outline-none"
              onClick={() => {
                setShowModal(true);
                setCurrentType("Shop");
              }}
            >
              Create Shop
            </button>
            <button
              className="bg-cyan-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-cyan-700 focus:outline-none"
              onClick={() => {
                setShowModal(true);
                setCurrentType("Vehicle");
              }}
            >
              Create Vehicle
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Render Created Stores */}
            <div className="flex-1 border border-gray-400 rounded p-4">
              <h3 className="text-2xl text-center font-bold mb-4">Stores</h3>
              <div className="flex flex-wrap">
                {stores.map((store) => (
                  <CreatedEntityCard
                    key={store.id}
                    title={store.title}
                    address={store.address}
                    imgSrc={store.imgSrc}
                    entityType="store"
                    id={store.id}
                    inventoryAccountNumber={store.inventoryAccountNumber}
                    assetsAccountNumber={store.assetsAccountNumber}
                  />
                ))}
              </div>
            </div>

            {/* Render Created Shops */}
            <div className="flex-1 border border-gray-400 rounded p-4">
              <h3 className="text-2xl text-center font-bold mb-4">Shops</h3>
              <div className="flex flex-wrap">
                {shops.map((shop) => (
                  <CreatedEntityCard
                    key={shop.id}
                    title={shop.title}
                    address={shop.address}
                    imgSrc={shop.imgSrc}
                    entityType="shop"
                    id={shop.id}
                    inventoryAccountNumber={shop.inventoryAccountNumber}
                    assetsAccountNumber={shop.assetsAccountNumber}
                  />
                ))}
              </div>
            </div>

            {/* Render Created Vehicles */}
            <div className="flex-1 border border-gray-400 rounded p-4">
              <h3 className="text-2xl text-center font-bold mb-4">Vehicles</h3>
              <div className="flex flex-wrap">
                {vehicles.map((vehicle) => (
                  <CreatedEntityCard
                    key={vehicle.id}
                    title={vehicle.title}
                    address={vehicle.address}
                    imgSrc={vehicle.imgSrc}
                    entityType="vehicle"
                    id={vehicle.id}
                    assetsAccountNumber={vehicle.assetsAccountNumber}
                    inventoryAccountNumber={vehicle.inventoryAccountNumber}
                  />
                ))}
              </div>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h3 className="text-xl mb-4 font-semibold">
                  Create {currentType}
                </h3>
                <input
                  className="border p-2 rounded mb-2 w-full"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="border p-2 rounded mb-2 w-full"
                  placeholder="Description"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  className="border p-2 rounded mb-2 w-full"
                  placeholder="Inventory Account Number"
                  value={inventoryAccountNumber}
                  onChange={(e) => setInventoryAccountNumber(e.target.value)}
                />
                <input
                  className="border p-2 rounded mb-2 w-full"
                  placeholder="Assets Account Number"
                  value={assetsAccountNumber}
                  onChange={(e) => setAssetsAccountNumber(e.target.value)}
                />
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 focus:outline-none"
                    onClick={createEntity}
                  >
                    Submit
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
