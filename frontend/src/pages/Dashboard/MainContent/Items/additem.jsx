import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Additem = () => {
  const history = useNavigate();
  const [supcode, setSupCode] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState(0);
  const [tva, setTva] = useState();
  const [ttc, setTtc] = useState(0);
  const [place, setPlace] = useState("");
  const [addValueCost, setAddValueCost] = useState();
  const [unit_price, setUnitPrice] = useState("");
  const [cost, setCost] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [purchase, setPurchase] = useState(0);
  const [expense, setExpense] = useState(0);
  const [final_good, setFinalGood] = useState("");
  const [change_inv_acc, setChangeInvAcc] = useState(false);
  const [inventory_account, setInventoryAccount] = useState("");
  const [image, setImage] = useState(null);
  const [minimum_quantity, setMquentity] = useState("");
  const [kind, setKind] = useState("");
  const manager = localStorage.getItem("userId");
  console.log("manager", manager);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    formData.append("inventory_account", inventory_account);
    formData.append("manager", manager);
    formData.append("image", image);
    formData.append("minimum_quantity", minimum_quantity);
    formData.append("kind", kind);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/item/add", {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      // handle the response as needed
      console.log(data);
    } catch (error) {
      console.error("Error uploading the data", error);
    }

  };

  useEffect(() => {
    console.log("Updated state value for TVA:", tva);
  }, [tva]);

  return (
    <div className="flex flex-col max-w-none mx-auto">
      <form className="m-10" onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="flex">
          <div className="FirstHalf">
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">SupCode</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="SupCode (optional)"
                  value={supcode}
                  onChange={(e) => setSupCode(e.target.value)}
                />
              </div>
              <div className="flex flex-col m-4">
                <label className="mb-2">Code</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="Code (optional)"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Name</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col m-4">
                <label className="mb-2">Unit</label>
                <select
                  className="border-2 p-2 w-[200px] "
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="">Select Unit (optional)</option>
                  <option value="Unit1">Unit1</option>
                  <option value="Unit2">Unit2</option>
                </select>
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Quantity</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="Quantity (optional)"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="flex flex-col m-4">
                <label className="mb-2">Total</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="Total (optional)"
                  value={total}
                  C
                />
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">TVA</label>

                <select
                  className="border-2 p-2 w-[200px]"
                  type="dropdown"
                  placeholder="TVA (optional)"
                  value={tva}
                  onChange={(e) => {
                    console.log("Event value:", e.target.value);
                    setTva(e.target.value);
                  }}
                >
                  <option value={0.0}>No TVA</option>
                  <option value={0.05}>5%</option>
                  <option value={0.1}>10%</option>
                </select>
              </div>
              <div className="flex flex-col m-4">
                <label className="mb-2">Place</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="place (optional)"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2"></div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Add Value Cost</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="Value Cost (optional)"
                  value={addValueCost}
                  onChange={(e) => setAddValueCost(e.target.value)}
                />
              </div>
              <div className="flex flex-col m-4">
                <label className="mb-2">TTC</label>
                <input
                  className="border-2 p-2"
                  type="number"
                  placeholder="TTC Auto Calculated"
                  value={ttc}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Group Kind</label>
                <input
                  className="border-2 p-2"
                  type="text"
                  placeholder="Item Kind"
                  value={kind}
                  onChange={(e) => setKind(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="FirstHalf">
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Cost</label>
                <input
                  className="border-2 p-2"
                  type="number"
                  placeholder="Cost Auto Calculated"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>

              <div className="flex flex-col m-4">
                <label className="mb-2">Revenue</label>
                <input
                  className="border-2 p-2"
                  type="number"
                  placeholder="Revenue (optional)"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Purchase</label>
                <input
                  className="border-2 p-2"
                  type="number"
                  placeholder="Purchase (optional)"
                  value={purchase}
                  onChange={(e) => setPurchase(e.target.value)}
                />
              </div>

              <div className="flex flex-col m-4">
                <label className="mb-2">Expense</label>
                <input
                  className="border-2 p-2"
                  type="number"
                  placeholder="Expense (optional)"
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex -mx-3 mb-2">
              <div className="flex flex-col m-4">
                <label className="mb-2">Final Good</label>
                <select
                  className="border-2 p-2"
                  type="dropdown"
                  placeholder="final good"
                  onChange={(e) => setFinalGood(e.target.value)}
                >
                  <option value={null}>Not Specified</option>
                  <option value={"start"}>Start</option>
                  <option value="mid">Mid</option>
                  <option value="finish">Finished</option>
                </select>
              </div>

              <div className="flex flex-col m-4">
                <label className="mb-2">Change Inventory Account</label>
                <input
                  className="border-2 p-2"
                  type="checkbox"
                  checked={change_inv_acc}
                  onChange={(e) => setChangeInvAcc(!change_inv_acc)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Inventory Account</label>
              <select
                className="border-2 bg-white"
                value={inventory_account}
                onChange={(e) => setInventoryAccount(e.target.value)}
              >
                <option value="">Select Inventory Account (optional)</option>
                <option value="Unit1">A</option>
                <option value="Unit2">B</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Item Image</label>
              <input
                className="border-2 p-2"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Minimum Quentity</label>
              <input
                className="border-2 p-2"
                type="number"
                onChange={(e) => setMquentity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Additem;
