import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stock/Stock";
import Additem from "./Items/additem";
import Items from "./Items/Items";
import ItemsDetails from "./Items/ItemsDetails";

const MainContent = () => {
  const [currentitem, setcurrentitem] = useState({ supcode: "a1111" });
  const [itemID, setitemID] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onEdit = () => {
    // alert("edit");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <Routes>
        <Route index element={<MainDashboard />} />
        <Route path="stock" element={<Stock />} />
        <Route
          path="Stock/Items"
          element={
            <Items setcurrentitem={setcurrentitem} currentitem={currentitem} />
          }
        />
        <Route path="Stock/Items/addItems" element={<Additem />} />
        <Route
          path="Stock/items/itemdetails"
          element={
            <ItemsDetails
              item={currentitem}
              onEdit={onEdit}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default MainContent;
