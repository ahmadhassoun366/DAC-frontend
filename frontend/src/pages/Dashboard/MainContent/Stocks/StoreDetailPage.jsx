import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchItems, addItem } from "../Items/itemsAPI";

const StoreDetailPage = () => {
  const { storeId } = useParams(); // Getting the storeId from the URL
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [allItems, setAllItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);

  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const handleSelectItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);

    const storedStores = localStorage.getItem("stores");
    if (storedStores) {
      const stores = JSON.parse(storedStores);
      const updatedStores = stores.map((s) => {
        if (String(s.id) === String(storeId)) {
          return {
            ...s,
            selectedItems: s.selectedItems
              ? [...s.selectedItems, item.id]
              : [item.id],
          };
        }
        return s;
      });
      localStorage.setItem("stores", JSON.stringify(updatedStores));
    }
  };

  const handleAddItem = () => {
    if (newItemName.trim() === "") return;

    const newItem = addItem({
      name: newItemName,
      description: newItemDescription,
      price: parseFloat(newItemPrice) || 0,
    });
    setAllItems((prevItems) => [...prevItems, newItem]);

    setNewItemName("");
    setNewItemDescription("");
    setNewItemPrice(0);
  };

  useEffect(() => {
    const availableItems = fetchItems();
    setAllItems(availableItems);

    const storedStores = localStorage.getItem("stores");

    if (storedStores) {
      const allStores = JSON.parse(storedStores);
      const foundStore = allStores.find(
        (s) => String(s.id) === String(storeId)
      );

      if (foundStore) {
        setStore(foundStore);

        const storeSelectedItems = availableItems.filter(
          (item) =>
            foundStore.selectedItems &&
            foundStore.selectedItems.includes(item.id)
        );

        setSelectedItems(storeSelectedItems);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [storeId]);

  if (loading) {
    return <div>Loading store details...</div>;
  }

  if (!store) {
    return <div>Store not found!</div>;
  }

  return (
    <section className="px-10 py-5 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-700">{store.title}</h1>
      </header>

      <div className="flex justify-end items-center mb-6 gap-6">
        <button
          className="bg-gray-800 text-white px-6 py-2 rounded-md shadow-sm hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          Manage Items
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-4/5 md:w-3/5 lg:w-1/2 transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100">
            <button
              className="absolute top-4 right-4 bg-gray-500 text-white px-2 py-1 rounded-full hover:bg-gray-600 transition-all duration-300 focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Select an Item
            </h2>
            <ul className="mt-2 space-y-4 overflow-y-auto max-h-60">
              {allItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-3 bg-gray-200 rounded-xl shadow-sm hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="w-1/3 font-medium text-gray-700">
                    {item.name}
                  </span>
                  <span className="w-1/3 text-sm text-gray-600">
                    {item.description}
                  </span>
                  <span className="w-1/4 text-gray-800">${item.price}</span>
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-all duration-300 focus:outline-none"
                    onClick={() => handleSelectItem(item)}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Item Name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="flex-1 border-2 rounded-xl p-2 shadow-sm hover:border-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                className="flex-1 border-2 rounded-xl p-2 shadow-sm hover:border-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Price"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
                className="flex-1 border-2 rounded-xl p-2 shadow-sm hover:border-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
                onClick={(e) => handleAddItem(e)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

<div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-medium mb-4 text-gray-800">Store Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Inventory Account Number:</strong> {store.inventoryAccountNumber}</p>
          <p><strong>Assets Account Number:</strong> {store.assetsAccountNumber}</p>
          <p><strong>Address:</strong> {store.address}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4 text-gray-800">Selected Items</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-700">Total Price:</span>
          <span className="text-xl text-gray-600 font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition-all duration-200"
                >
                  <td className="border px-4 py-2 text-gray-700">{item.name}</td>
                  <td className="border px-4 py-2 text-gray-600">{item.description}</td>
                  <td className="border px-4 py-2 text-gray-700">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StoreDetailPage;
