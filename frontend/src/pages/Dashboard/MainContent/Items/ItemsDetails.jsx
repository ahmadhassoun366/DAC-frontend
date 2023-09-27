import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ItemsDetails = ({ item, onEdit, onDelete }) => {

  const [supcode, setSupcode] = useState();
  const [code, setCode] = useState(item.code);
  const [unit, setUnit] = useState(item.unit);
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);
  const [tva, setTva] = useState(item.TVA);
  const [ttc, setTtc] = useState(item.TTC);
  const [place, setPlace] = useState(item.place);
  const [addValueCost, setAddValueCost] = useState(item.addValueCost);
  const [cost, setCost] = useState(item.cost);
  const [revenue, setRevenue] = useState(item.revenue);
  const [purchase, setPurchase] = useState(item.purchase);
  const [expense, setExpense] = useState(item.expense);
  const [final_good, setFinalGood] = useState(item.final_good);
  const [change_inv_acc, setChangeInvAcc] = useState(item.change_inv_acc);
  const [manager, setManager] = useState(item.manager);
  const [image, setImage] = useState(item.image);
  const [name, setName] = useState(item.name);
  const [isEditing, setisEditing] = useState(false);
  const [items, setItems] = useState([]);

  const UpdateDetails = (item) => {
    setisEditing(true);
    // onEdit(item);
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
  // const handleInputChange = (e, id) => {
  //   const updatedDetails = details.map((detail) => {
  //     if (detail.id === id) {
  //       // Update the detail in details state
  //       return { ...detail, value: e.target.value };
  //     }
  //     return detail;
  //   });

  //   setDetails(updatedDetails); // Update the details state

  //   // Update the updatedItem state as well
  //   const updatedValue = e.target.value;
  //   setUpdatedItem((prevItem) => ({
  //     ...prevItem,
  //     [details.find((detail) => detail.id === id).label]: updatedValue,
  //   }));
  // };

  const handleUpdate = (id) => {

    console.log(`Updating item with id: ${id}`, supcode);
    const formData = new FormData();
    formData.append("supcode", supcode);
    formData.append("code", code);
    formData.append("name", name);
    formData.append("unit", unit);
    formData.append("quantity", quantity);
    formData.append("total", total);
    formData.append("tva", tva);
    formData.append("ttc", ttc);
    formData.append("place", place);
    formData.append("addValueCost", addValueCost);
    formData.append("cost", cost);
    formData.append("revenue", revenue);
    formData.append("purchase", purchase);
    formData.append("expense", expense);
    formData.append("final_good", final_good);
    formData.append("change_inv_acc", change_inv_acc);
    formData.append("manager", manager);
    formData.append("image", image);

    fetch(`http://127.0.0.1:8000/api/item/${item.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
  const handleInputChange = (e, target) => {
    switch (target) {
      case 'name':
        setName(e.target.value);
        break;
      case 'supcode':
        setSupcode(e.target.value);
        break;
      case 'code':
        setCode(e.target.value);
        break;
      case 'unit':
        setUnit(e.target.value);
        break;
      case 'quantity':
        setQuantity(e.target.value);
        break;
      case 'total':
        setTotal(e.target.value);
        break;
      case 'tva':
        setTva(e.target.value);
        break;
      case 'ttc':
        setTtc(e.target.value);
        break;
      case 'place':
        setPlace(e.target.value);
        break;
      case 'addValueCost':
        setAddValueCost(e.target.value);
        break;
      case 'Cost':
        setCost(e.target.value);
        break;
      case 'revenue':
        setRevenue(e.target.value);
        break;
      case 'purchase':
        setPurchase(e.target.value);
        break;
      case 'expense':
        setExpense(e.target.value);
        break;
      case 'final_good':
        setFinalGood(e.target.value);
        break;
      case 'change_inv_acc':
        setChangeInvAcc(e.target.value);
        break;
      case 'manager':
        setManager(e.target.value);
        break;
      case 'image':
        setImage(e.target.value);
        break;
      default:
        // Handle cases where 'target' doesn't match any of the hooks
        break;
    }
  }
  return (
    <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex md:items-stretch md:h-auto">
      <div className="md:flex-shrink-0 md:w-48 md:h-full md:flex md:items-center md:justify-center p-8">

        {isEditing ?
          <input
            className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange(e, 'image')}
          /> :
          <img
            className="rounded-full w-full h-full object-cover"
            src={`http://127.0.0.1:8000/${item.image}`}
            alt={item.id}
          />
        }
      </div>
      <div className="flex-1 px-6 py-4 md:px-12">
        {isEditing ?
          <input
            className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
            type="text"
            onChange={(e) => handleInputChange(e, 'name')}
          /> :
          <h2 className="text-xl leading-tight mb-2 text-gray-800 font-bold uppercase">

            {item.name}
          </h2>
        }
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
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    supcode
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.supcode}
                      onChange={(e) => handleInputChange(e, 'supcode')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.supcode}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    code
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.code}
                      onChange={(e) => handleInputChange(e, 'code')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.code}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    unit
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.unit}
                      onChange={(e) => handleInputChange(e, 'unit')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.unit}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    quantity
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.quantity}
                      onChange={(e) => handleInputChange(e, 'quantity')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.quantity}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    total
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.total}
                      onChange={(e) => handleInputChange(e, 'total')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.total}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    tva
                  </div>
                  {isEditing ?
                    <select
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      value={item.tva}
                      onChange={(e) => handleInputChange(e, 'tva')}
                    >
                      <option value={0.0}>No TVA</option>
                      <option value={0.05}>5%</option>
                      <option value={0.1}>10%</option>
                    </select> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.tva}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    ttc
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.ttc}
                      onChange={(e) => handleInputChange(e, 'ttc')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.ttc}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    place
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.place}
                      onChange={(e) => handleInputChange(e, 'place')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.place}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    add Value Cost
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.addValueCost}
                      onChange={(e) => handleInputChange(e, 'addValueCost')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.addValueCost}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    Cost
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.cost}
                      onChange={(e) => handleInputChange(e, 'Cost')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.cost}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    revenue
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.revenue}
                      onChange={(e) => handleInputChange(e, 'revenue')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.revenue}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    Purchase
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.purchase}
                      onChange={(e) => handleInputChange(e, 'purchase')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.purchase}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    expense
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.expense}
                      onChange={(e) => handleInputChange(e, 'expense')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.expense}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    final good
                  </div>
                  {isEditing ?
                    <input
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      type="text"
                      defaultValue={item.final_good}
                      onChange={(e) => handleInputChange(e, 'final_good')}
                    /> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.final_good}
                    </h1>
                  }
                </div>
              </div>
              <div
                className="my-1 px-4 w-full md:w-6/12 xl:w-4/12"
              >
                <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                  <div className="text-lg text-gray-900 font-semibold pb-2">
                    change inv acc
                  </div>
                  {isEditing ?
                    <select
                      className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none"
                      value={item.change_inv_acc}
                      onChange={(e) => handleInputChange(e, 'change_inv_acc')}
                    >
                      <option value="option1">A</option>
                      <option value="option2">B</option>
                    </select> :
                    <h1 className="text-xl text-gray-700 font-bold">
                      {item.change_inv_acc}
                    </h1>
                  }
                </div>
              </div>
            </div>
          </div>
          {/** End Edit logic */}
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
