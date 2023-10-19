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

  const handleAddItem = () => {
    if (newItemName.trim() === "") return;

    const newItem = addItem({ name: newItemName, description: "" });
    setAllItems((prevItems) => [...prevItems, newItem]);

    setNewItemName("");
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

        const shopSelectedItems = availableItems.filter((item) =>
          foundShop.selectedItems.includes(item.id)
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
    <>
      <div className="flex justify-end items-center mr-10 gap-10">
        <button className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center">
          + Add Item
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Select Items
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 rounded p-5">
            <button
              className="float-right bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            {/* List of all items */}
            <ul className="mt-10">
              {allItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center my-2"
                >
                  <span>{item.name}</span>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => handleSelectItem(item)}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
            {/* TODO: Add logic to display and select items from allItems here. */}

            <div className="mt-5">
              <input
                type="text"
                placeholder="Enter new item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="border rounded p-2 mr-2"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddItem}
              >
                Add New Item
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-xl mx-auto mt-10 bg-white p-5 rounded shadow-md">
        <h1 className="text-3xl mb-5 text-center">{shop.title}</h1>
        <p className="mt-2 text-gray-600">
          Inventory Account Number: {shop.inventoryAccountNumber}
        </p>
        <p className="mt-2 text-gray-600">
          Assets Account Number: {shop.assetsAccountNumber}
        </p>
        <p className="mt-2 text-gray-600">Address: {shop.address}</p>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl mb-4">Selected Items:</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id} className="bg-gray-100 p-2 my-1 rounded">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopDetailPage;
