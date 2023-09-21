import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ItemsDetails = ({ item, onEdit, onDelete }) => {
  const [isEditing, setisEditing] = useState(false);
  const [items, setItems] = useState([]);

  //http://127.0.0.1:8000/api/item/<int:item_id>/update/

  const UpdateDetails = (item) => {
    setisEditing(true);
    onEdit(item);
  };
  const history = useNavigate();

  const handleDelete = (id) => {
    // Start deletion process, you may want to set some loading state here
    console.log(`Deleting item with id: ${id}`);

    // Make a DELETE request to your API endpoint
    fetch(`http://127.0.0.1:8000/api/item/${id}/delete`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // You may want to remove the item from the local state here
        setItems(items.filter((item) => item.id !== id));
        toast.success("Successfully deleted!");
        history("/dashboard/stock/items");
      })
      .catch((error) => {
        // Handle errors
        console.error(`There was a problem with the delete request: ${error}`);
      });
  };

  const [details, setDetails] = useState([
    { id: 1, label: "supcode", value: item.supcode },
    { id: 2, label: "code", value: item.code },
    { id: 3, label: "unit", value: item.unit },
    { id: 4, label: "quantity", value: item.quantity },
    { id: 5, label: "total", value: item.total },
    { id: 6, label: "tva", value: item.TVA },
    // { id: 7, label: 'TVA Value', value: item.TVA_value },
    { id: 8, label: "ttc", value: item.TTC },
    { id: 9, label: "place", value: item.place },
    { id: 10, label: "addValueCost", value: item.addValueCost },
    { id: 12, label: "Cost", value: item.cost },
    { id: 13, label: "revenue", value: item.revenue },
    { id: 14, label: "purchase", value: item.purchase },
    { id: 15, label: "expense", value: item.expense },
    { id: 16, label: "final_good", value: item.final_good },
    { id: 17, label: "change_inv_acc", value: item.change_inv_acc },
    { id: 19, label: 'manager', value: item.manager },
    { id: 20, label: "image", value: item.image },
  ]);
  const [updatedItem, setUpdatedItem] = useState({ ...item });
  const handleInputChange = (e, id) => {
    const updatedDetails = details.map((detail) => {
      if (detail.id === id) {
        // Update the detail in details state
        return { ...detail, value: e.target.value };
      }
      return detail;
    });

    setDetails(updatedDetails); // Update the details state

    // Update the updatedItem state as well
    const updatedValue = e.target.value;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [details.find((detail) => detail.id === id).label]: updatedValue,
    }));
  };

  const handleUpdate = (id) => {
    console.log("updatedItem", updatedItem);
    console.log(`Updating item with id: ${id}`);

    fetch(`http://127.0.0.1:8000/api/item/${item.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        toast.success("Successfully updated!");
      })
      .catch((error) => {
        // Handle errors
        console.error(
          `There was a problem with the update request: ${error.message}`
        );
        // Display an error message to the user
        toast.error("Update failed. Please try again later.");
      });
  };

  return (
    <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex md:items-stretch md:h-auto">
      <div className="md:flex-shrink-0 md:w-48 md:h-full md:flex md:items-center md:justify-center p-8">
        <img
          className="rounded-full w-full h-full object-cover"
          src={`http://127.0.0.1:8000/${item.image}`}
          alt={item.id}
        />
      </div>

      <div className="flex-1 px-6 py-4 md:px-12">
        <h2 className="text-xl leading-tight mb-2 text-gray-800 font-bold uppercase">
          {item.name}
        </h2>

        <div className="flex items-center md:justify-between mt-2 mb-6 px-6 py-4 text-sm relative bg-indigo-100 rounded-md text-indigo-500">
          Click {isEditing ? "update" : "edit"} to change different types of
          information.
        </div>

        <div className="w-full">
          <ul className="flex border-b">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-cyan-700">
                Details
              </a>
            </li>
          </ul>

          <div className="py-6">
            <div className="flex flex-wrap -mx-4 lg:-mx-8">
              {details.map((detail) => (
                <div
                  key={detail.id}
                  className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
                >
                  <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                    <div className="text-lg text-gray-900 font-semibold pb-2">
                      {detail.label}
                    </div>
                    {isEditing ? (
                      // Check the data type and render accordingly
                      detail.label === "Image" ? (
                        <input
                          className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                          type="file"
                          accept="image/*"
                          value={detail.value}
                          onChange={(e) => handleInputChange(e, detail.id)}
                        />
                      ) : detail.label === "Unit" ? (
                        <select
                          className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                          value={detail.value}
                          onChange={(e) => handleInputChange(e, detail.id)}
                        >
                          <option value="option1">Unit 1</option>
                          <option value="option2">Unit 2</option>
                        </select>
                      ) : detail.label === "TVA" ? (
                        <select
                          className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                          value={detail.value}
                          onChange={(e) => handleInputChange(e, detail.id)}
                        >
                          <option value={0.0}>No TVA</option>
                          <option value={0.05}>5%</option>
                          <option value={0.1}>10%</option>
                        </select>
                      ) : detail.label === "Inventory Account" ? (
                        <select
                          className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                          value={detail.value}
                          onChange={(e) => handleInputChange(e, detail.id)}
                        >
                          <option value="option1">A</option>
                          <option value="option2">B</option>
                        </select>
                      ) : (
                        <input
                          className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                          type="text"
                          defaultValue={detail.value}
                          onChange={(e) => handleInputChange(e, detail.id)}
                        />
                      )
                    ) : (
                      <h1 className="text-xl text-gray-700 font-bold">
                        {detail.value}
                      </h1>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center pb-3">
            {isEditing ? (
              <button
                onClick={() => handleUpdate(item.id)}
                className="mr-4 bg-cyan-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Update
              </button>
            ) : (
              <button
                onClick={() => UpdateDetails(item)}
                className="mr-4 bg-cyan-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => handleDelete(item.id)}
              className="mr-4 bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemsDetails;
