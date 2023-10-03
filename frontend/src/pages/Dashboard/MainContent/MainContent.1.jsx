import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stock/Stock";
import Additem from "./Items/additem";
import Items from "./Items/Items";
import Accounting from "./Accounting/Accounting";
import Units from "./Accounting/Units/Units";
import Addunit from "./Accounting/Units/Addunit";
import Subunits from "./Accounting/Subunits/Subunits";
import Managment from "./Managment/Managment";
import TVAs from "./Managment/TVAs/TVAs";

export const MainContent = () => {
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
                <Route path="accounting" element={<Accounting />} />
                <Route path="Managment" element={<Managment />} />
                <Route path="Managment/tva" element={<TVAs />} />
                <Route path="accounting/units" element={<Units />} />
                <Route path="accounting/units/addunit" element={<Addunit />} />
                <Route path="accounting/Subunits" element={<Subunits />} />
                <Route
                    path="Stock/Items/*"
                    element={<Items />} />
                <Route path="Stock/Items/addItems" element={<Additem />} />
            </Routes>
        </main>
    );
};
