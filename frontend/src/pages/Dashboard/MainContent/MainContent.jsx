import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stock/Stock";
import Additem from "./Items/additem";
import Items from "./Items/Items";
import ItemsDetails from "./Items/ItemsDetails";

const MainContent = () => {
    const [currentitem, setcurrentitem] = useState({ supcode: 'a1111', });
    const [itemID, setitemID] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const managerID = localStorage.getItem("userId");
    console.log("manager", managerID);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/management/${managerID}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                alert("done", data);
                setLoading(true);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    const onEdit = () => {
        // alert("edit");
    }
    const onDelete = (currentitem) => {
        alert("onDelete");
        fetch(`http://127.0.0.1:8000/api/item/delete/${currentitem.id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                alert("done");
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(true);
            });
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log("sssssssscurrentitem", currentitem);
    return (
        <main>
            <Routes>
                <Route index element={<MainDashboard />} />
                <Route path="stock" element={<Stock />} />
                <Route path="Stock/Items" element={<Items setcurrentitem={setcurrentitem} currentitem={currentitem} />} />
                <Route path="Stock/Items/addItems" element={<Additem />} />
                <Route path="Stock/items/itemdetails"
                    element={
                        <ItemsDetails
                            item={currentitem}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />}
                />
            </Routes>
        </main>

    )
};

export default MainContent;
