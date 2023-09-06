import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stock/Stock";
import Additem from "./Items/additem";

const MainContent = () => {
    return (
        <main>
            <Routes>
                <Route index element={<MainDashboard />} />
                <Route path="stock" element={<Stock />} />
                <Route path="additem" element={<Additem />} />
            </Routes>
        </main>

    )
};

export default MainContent;
