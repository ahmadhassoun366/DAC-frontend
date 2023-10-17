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
      className="w-full py-4 px-8 bg-white shadow-md transition-shadow duration-300 ease-in-out rounded-lg m-2 border border-gray-200 relative group cursor-pointer hover:bg-gray-100"
    >
      <Link className="block hover:text-blue-600 group-hover:blur-sm">
        <div className="flex justify-center mb-4">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-gray-900"
            src={imgSrc}
            alt={title}
          />
        </div>
        <h2 className="text-center text-gray-800 text-2xl font-semibold">
          {title}
        </h2>
      </Link>

      {/* Details that appear on hover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="grid grid-cols-2 gap-2 bg-gray-50 p-4 rounded shadow-lg w-3/4 h-3/4">
          <div className="text-sm text-gray-600 font-medium">Inventory:</div>
          <div className="text-sm text-gray-800">{inventoryAccountNumber}</div>
          <div className="text-sm text-gray-600 font-medium">Assets:</div>
          <div className="text-sm text-gray-800">{assetsAccountNumber}</div>
          <div className="text-sm text-gray-600 font-medium">Address:</div>
          <div className="text-sm text-gray-800">{address}</div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="px-5">
      <div className="mt-8">
        <div className="mb-10">
          <div className="flex justify-around px-10 gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Manage Stocks</h2>
              <button
                className="bg-cyan-600 text-white px-6 py-2 rounded m-2"
                onClick={() => {
                  setShowModal(true);
                  setCurrentType("Store");
                }}
              >
                Create Store
              </button>
              <button
                className="bg-cyan-600 text-white px-6 py-2 rounded m-2"
                onClick={() => {
                  setShowModal(true);
                  setCurrentType("Shop");
                }}
              >
                Create Shop
              </button>
              <button
                className="bg-cyan-600 text-white px-6 py-2 rounded m-2"
                onClick={() => {
                  setShowModal(true);
                  setCurrentType("Vehicle");
                }}
              >
                Create Vehicle
              </button>
            </div>
          </div>
          <div className="flex mt-6 gap-6">
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
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="mb-4">Create {currentType}</h3>
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
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded"
                  onClick={createEntity}
                >
                  Submit
                </button>
                <button className="ml-4" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
