import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stock/Stock";

const MainContent = () => {
    return (
        <main>
            <Routes>
                <Route index element={<MainDashboard />} />
                <Route path="stock" element={<Stock />} />
            </Routes>
        </main>

    )
};

export default MainContent;
