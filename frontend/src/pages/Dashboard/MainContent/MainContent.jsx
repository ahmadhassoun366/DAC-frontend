import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stock/Stock";
import Additem from "./Items/additem";
import Items from "./Items/Items";
import ItemsDetails from "./Items/itemsDetails";
const MainContent = () => {
    const [currentitem, setcurrentitem] = useState([{}]);
    const onEdit = () => {
        alert("edit")
    }
    const onDelete = () => {
        alert("onDelete")
    }
    console.log("currentitem", currentitem)
    return (
        <main>
            <Routes>
                <Route index element={<MainDashboard />} />
                <Route path="stock" element={<Stock />} />
                <Route path="stock/items/additem" element={<Additem />} />
                <Route path="stock/items" element={<Items setcurrentitem={setcurrentitem} />} />
                <Route path="stock/items/itemdetails" element={<ItemsDetails item={currentitem} onEdit={onEdit} onDelete={onDelete} />} />
            </Routes>
        </main>

    )
};

export default MainContent;
