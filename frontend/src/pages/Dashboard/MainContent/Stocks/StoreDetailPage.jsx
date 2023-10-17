import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const StoreDetailPage = () => {
  const { storeId } = useParams(); // Getting the storeId from the URL
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the store data from local storage based on storeId
    const storedStores = localStorage.getItem('stores');
    console.log("Stored stores:", storedStores);  // Check what's in local storage

    if (storedStores) {
      const allStores = JSON.parse(storedStores);
      const foundStore = allStores.find(s => String(s.id) === String(storeId));
      console.log("Found store:", foundStore); // Check if a store was found

      if (foundStore) {
        setStore(foundStore);
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
        <h1 className="text-3xl mb-5 text-center">{store.title}</h1>
        <p className="mt-2 text-gray-600">
          Inventory Account Number: {store.inventoryAccountNumber}
        </p>
        <p className="mt-2 text-gray-600">Assets Account Number: {store.assetsAccountNumber}</p>
        <p className="mt-2 text-gray-600">Address: {store.address}</p>
      </div>
    </>
  );
};

export default StoreDetailPage;
