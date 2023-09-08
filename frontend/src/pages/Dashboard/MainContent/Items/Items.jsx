import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import p1 from "../../../../Assets/p1.jpg";
import p2 from "../../../../Assets/p2.jpg";
const Items = () => {
    const history = useNavigate();
    const [items, setItems] = useState([{
        "id": 1,
        "title": "Laptop",
        "price": 200.5678943,
        "description": "This is a laptop description.",
        "image": p1,
    }, {
        "id": 2,
        "title": "Laptop",
        "price": 200.5678943,
        "description": "This is a laptop description.",
        "image": p2,
    }, 3]);



    const manager = localStorage.getItem("userId");
    console.log("manager", manager);


    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/item/details/`)
    //         .then(response => {
    //             if (!response.ok) throw new Error(response.status);
    //             return response.json();
    //         })
    //         .then(data => setItems(data))
    //         .catch(error => console.error(`Error: ${error}`));
    // }, []);
    return (
        <div className="container mx-auto">
            {items.map(item => (
                <ItemCard key={item.id} itemDetails={item} />
            ))}
        </div>
    );
};
export default Items;
