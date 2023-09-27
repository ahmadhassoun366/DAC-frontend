import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import ItemsDetails from "./ItemsDetails";
import p1 from "../../../../Assets/p1.jpg";
import p2 from "../../../../Assets/p2.jpg";

const Items = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentitem, setcurrentitem] = useState(0);
  const manager = localStorage.getItem("userId");
  console.log("manager", manager);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/item/${manager}/`) // replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log(`Deleting item with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Implement your update logic here
    console.log(`Updating item with id: ${id}`);
  };
  const handleClick = (id) => {
    console.log(`clicking item with id: ${id}`);
    fetch(`http://127.0.0.1:8000/api/item/details/${id}/`) // replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setcurrentitem(data[0]);
        console.log("data !", data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    navigate("itemdetails");
    console.log(" props.setcurrentitem(data[0]);", currentitem);
  };
  // http://127.0.0.1:8000/api/item/details/2/
  console.log("items", items);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="mt-10">
        <div className="flex justify-end items-center mr-10">
          <Link
            to="./addItems"
            className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center"
          >
            + Add Items
          </Link>
        </div>

        <div className="mx-10 mt-4 mr-10 ">
          <table className="w-full bg-white border rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="border px-4 py-2">Supcode</th>
                <th className="border px-4 py-2">Code</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Unit</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Total</th>

                {/* Add more column headers as needed */}
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  itemDetails={item}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                  onView={handleClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Routes>
        <Route
          path="/itemdetails"
          element={
            <ItemsDetails item={currentitem} />
          }
        />
      </Routes>
    </>
  );
};

export default Items;
