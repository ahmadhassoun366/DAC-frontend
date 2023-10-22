import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchItems, addItem } from "../Items/itemsAPI";

const ShopDetailPage = () => {
  const { shopId } = useParams();
  const [shop, setShop] = useState(null);
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

    const storedShops = localStorage.getItem("shops");
    if (storedShops) {
      const shops = JSON.parse(storedShops);
      const updatedShops = shops.map((s) => {
        if (String(s.id) === String(shopId)) {
          return {
            ...s,
            selectedItems: s.selectedItems
              ? [...s.selectedItems, item.id]
              : [item.id],
          };
        }
        return s;
      });
      localStorage.setItem("shops", JSON.stringify(updatedShops));
    }
  };

  const handleAddItem = (e) => {
    console.log("handleAddItem called");
    e.preventDefault();
    e.stopPropagation();
    if (newItemName.trim() === "") return;

    const newItem = addItem({
      name: newItemName,
      description: newItemDescription,
      price: parseFloat(newItemPrice) || 0,
    });

    console.log("New item after addItem:", newItem);

    setAllItems((prevItems) => {
      console.log("Previous items:", prevItems);
      return [...prevItems, newItem];
    });

    setNewItemName("");
    setNewItemDescription("");
    setNewItemPrice(0);
  };

  useEffect(() => {
    const availableItems = fetchItems();
    setAllItems(availableItems);

    const storedShops = localStorage.getItem("shops");
    if (storedShops) {
      const allShops = JSON.parse(storedShops);
      const foundShop = allShops.find((s) => String(s.id) === String(shopId));
      if (foundShop) {
        setShop(foundShop);

        const shopSelectedItems = availableItems.filter(
          (item) =>
            foundShop.selectedItems && foundShop.selectedItems.includes(item.id)
        );
        setSelectedItems(shopSelectedItems);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [shopId]);

  if (loading) {
    return <div>Loading shop details...</div>;
  }

  if (!shop) {
    return <div>Shop not found!</div>;
  }

  return (
    <section className="px-10">
      <div className="flex justify-end items-center mr-10 gap-10 transform transition-transform ">
        <button
          className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform"
          onClick={() => setShowModal(true)}
        >
          Select Items
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-3/4 md:w-2/3 h-3/4 transform transition-transform duration-500 ease-in-out scale-90 hover:scale-100">
            <button
              className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <ul className="mt-10 space-y-4">
              {allItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-3 bg-gray-900 rounded-xl shadow-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="w-1/3 font-semibold text-white">{item.name}</span>
                  <span className="w-1/3 text-sm text-white">
                    {item.description}
                  </span>
                  <span className="w-1/4 text-gray-300">${item.price}</span>
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-all duration-300"
                    onClick={() => handleSelectItem(item)}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              <input
                type="text"
                placeholder="Enter new item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="flex-1 border-2 rounded-xl p-2 shadow-sm hover:border-gray-500 transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Enter item description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                className="flex-1 border-2 rounded-xl p-2 shadow-sm hover:border-gray-500 transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Enter item price"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
                className="flex-1 border-2 rounded-xl p-2 shadow-sm hover:border-gray-500 transition-all duration-300"
              />
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                onClick={(e) => handleAddItem(e)}
              >
                + Add Item
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-6 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl mb-5 text-center text-gray-500">
          {shop.title}
        </h1>
        <p className="mt-2 text-gray-900">
          Inventory Account Number: {shop.inventoryAccountNumber}
        </p>
        <p className="mt-2 text-gray-900">
          Assets Account Number: {shop.assetsAccountNumber}
        </p>
        <p className="mt-2 text-gray-900">Address: {shop.address}</p>
      </div>

      <div className="mt-5">
        <div className="px-10 flex justify-between items-center my-5 text-lg ">
          <h2 className="font-bold  text-gray-900">Selected Items:</h2>
          <h2 className="text-gray-600 font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
        </div>
        <ul className="space-y-3 hover:text-gray-800">
          {selectedItems.map((item) => (
            <li
              key={item.id}
              className="bg-gray-900 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-gray-300 "
            >
              <h2 className="font-semibold text-gray-200 ">
                Name: {item.name}
              </h2>
              <h2 className="text-sm text-gray-100">
                Description: {item.description}
              </h2>
              <h2 className="text-gray-100">Price: ${item.price}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShopDetailPage;
