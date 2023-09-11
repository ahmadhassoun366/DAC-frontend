import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import p1 from "../../../../Assets/p1.jpg";
import p2 from "../../../../Assets/p2.jpg";

const Items = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const manager = localStorage.getItem("userId");
  console.log("manager", manager);
  const itemId = 1;

  useEffect(() => {
    getItems();
  }, []);

  let getItems = async () => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/api/item/${itemId}`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
  
      let data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
      // Set error state here if you have one
    }
  };

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/item/${itemId}`)
//       .then((response) => {
//         if (!response.ok) throw new Error(`Status code: ${response.status}`);
//         return response.json();
//       })
//       .then((data) => {
//         setItems(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(`Fetch error: ${error}`);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

  console.log("items", items);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Link
        to="./addItems"
        className="mt-4 bg-cyan-600 text-white px-2 py-2 rounded inline-flex items-center"
      >
        Add Items
      </Link>
      <div className="container mx-auto">
        {items.map((item) => (
          <ItemCard key={item.id} itemDetails={item} />
        ))}
      </div>
    </>
  );
};

export default Items;
