import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ShopDetailPage = () => {
  const { shopId } = useParams(); // Getting the shopId from the URL
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the shop data from local storage based on shopId
    const storedShops = localStorage.getItem("shops");
    console.log("Stored shops:", storedShops); // Check what's in local storage

    if (storedShops) {
      const allShops = JSON.parse(storedShops);
      const foundShop = allShops.find((s) => String(s.id) === String(shopId));
      console.log("Found shop:", foundShop); // Check if a shop was found

      if (foundShop) {
        setShop(foundShop);
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
        <h1 className="text-3xl mb-5 text-center">{shop.title}</h1>
        <p className="mt-2 text-gray-600">
          Inventory Account Number: {shop.inventoryAccountNumber}
        </p>
        <p className="mt-2 text-gray-600">Assets Account Number: {shop.assetsAccountNumber}</p>
        <p className="mt-2 text-gray-600">Address: {shop.address}</p>
      </div>
    </>
  );
};

export default ShopDetailPage;
