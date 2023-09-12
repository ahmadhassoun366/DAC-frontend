import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import p1 from "../../../../Assets/p1.jpg";
import p2 from "../../../../Assets/p2.jpg";
import { Link } from "react-router-dom";
const Items = (props) => {
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
    const key = 0;


    const manager = localStorage.getItem("userId");
    console.log("manager", manager);


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/item/` + manager + '/')
            .then(response => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => console.error(`Error: ${error}`));
    }, []);
    // props.setcurrentitem(items);
    // console.log("items", items);
    return (
        <div className="container mx-auto">
            {items.map((item, index) => (
                <ItemCard key={item.id} itemDetails={item} onclick={() => props.setcurrentitem(items[index])} />
            ))}
            <Link to="additem" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add item</Link>
        </div>
    );
};
export default Items;
