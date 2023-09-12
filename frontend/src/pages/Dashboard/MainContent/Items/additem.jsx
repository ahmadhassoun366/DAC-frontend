import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Additem = () => {
    const history = useNavigate();

    const [supcode, setSupCode] = useState("");
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [unit, setUnit] = useState("");
    const [quantity, setQuantity] = useState("");
    const [total, setTotal] = useState("");
    const [TVA, setTva] = useState(false);
    const [TVA_value, setTvaValue] = useState("");
    const [TTC, setTtc] = useState("");
    const [place, setPlace] = useState("");
    const [addValueCost, setAddValueCost] = useState("");
    const [unit_price, setUnitPrice] = useState("");
    const [cost, setCost] = useState("");
    const [revenue, setRevenue] = useState("");
    const [purchase, setPurchase] = useState("");
    const [expense, setExpense] = useState("");
    const [final_good, setFinalGood] = useState(false);
    const [change_inv_acc, setChangeInvAcc] = useState(false);
    const [inventory_account, setInventoryAccount] = useState("");
    const [image, setimage] = useState("");

    const manager = localStorage.getItem("userId");
    console.log("manager", manager);

    const setFile = (event) => {
        setimage(URL.createObjectURL(event.target.files[0]));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const itemdata = {
            supcode,
            code,
            name,
            unit,
            quantity,
            total,
            TVA,
            TVA_value,
            TTC,
            place,
            addValueCost,
            unit_price,
            cost,
            revenue,
            purchase,
            expense,
            final_good,
            change_inv_acc,
            inventory_account,
            manager,
            image

        };

        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/item/add`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // Add any authorization headers here, if 
                    },
                    body: JSON.stringify(itemdata),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Data from server", data);

            // Reset form fields

        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    return (

        <div className="flex flex-col max-w-none mx-auto">
            <form className="m-10" onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="FirstHalf">
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Supplier Code</label>
                                <input className="border-2 p-2" type="text" placeholder="SupCode (optional)" value={supcode} onChange={e => setSupCode(e.target.value)} />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Internal Item Code</label>
                                <input className="border-2 p-2" type="text" placeholder="Code (optional)" value={code} onChange={e => setCode(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Item Name</label>
                                <input className="border-2 p-2" type="text" placeholder="Name (optional)" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Unit</label>
                                <select className="border-2 bg-white" value={unit} onChange={e => setUnit(e.target.value)}>
                                    <option value="">Select Unit (optional)</option>
                                    <option value="Unit1">Unit1</option>
                                    <option value="Unit2">Unit2</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Quantity Available</label>
                                <input className="border-2 p-2" type="text" placeholder="Quantity (optional)" value={quantity} onChange={e => setQuantity(e.target.value)} />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="mb-2">HT Total</label>
                                <input className="border-2 p-2" type="text" placeholder="Total (optional)" value={total} onChange={e => setTotal(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Include TVA</label>
                                <input className="border-2 p-2" type="checkbox" checked={TVA} onChange={e => setTva(!TVA)} />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="mb-2">TVA Value</label>
                                <input className="border-2 p-2" type="text" placeholder="TVA Value (optional)" value={TVA_value} onChange={e => setTvaValue(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Item Price</label>
                                <input className="border-2 p-2" type="text" placeholder="TTC Value (optional)" value={TTC} onChange={e => setTtc(e.target.value)} />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Place</label>
                                <input className="border-2 p-2" type="textarea" placeholder="place (optional)" value={place} onChange={e => setPlace(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Item Cost</label>
                                <input className="border-2 p-2" type="text" placeholder="Value Cost (optional)" value={addValueCost} onChange={e => setAddValueCost(e.target.value)} />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Middle Price</label>
                                <input className="border-2 p-2" type="number" placeholder="Unit Price (optional)" value={unit_price} onChange={e => setUnitPrice(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="FirstHalf">
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Cost</label>
                                <input className="border-2 p-2" type="number" placeholder="Cost (optional)" value={cost} onChange={e => setCost(e.target.value)} />
                            </div>

                            <div className="flex flex-col m-4">
                                <label className="mb-2">Revenue Account</label>
                                <input className="border-2 p-2" type="number" placeholder="Revenue (optional)" value={revenue} onChange={e => setRevenue(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Purchase Account</label>
                                <input className="border-2 p-2" type="number" placeholder="Purchase (optional)" value={purchase} onChange={e => setPurchase(e.target.value)} />
                            </div>

                            <div className="flex flex-col m-4">
                                <label className="mb-2">Expense Account</label>
                                <input className="border-2 p-2" type="number" placeholder="Expense (optional)" value={expense} onChange={e => setExpense(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex -mx-3 mb-2">
                            <div className="flex flex-col m-4">
                                <label className="mb-2">Final Good</label>
                                <input className="border-2 p-2" type="checkbox" checked={final_good} onChange={e => setFinalGood(!final_good)} />
                            </div>

                            <div className="flex flex-col m-4">
                                <label className="mb-2">Change Inventory Account</label>
                                <input className="border-2 p-2" type="checkbox" checked={change_inv_acc} onChange={e => setChangeInvAcc(!change_inv_acc)} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">Inventory Account</label>
                            <select className="border-2 bg-white" value={inventory_account} onChange={e => setInventoryAccount(e.target.value)}>
                                <option value="">Select Inventory Account (optional)</option>
                                <option value="Unit1">A</option>
                                <option value="Unit2">B</option>
                            </select>
                        </div>
                        <div className="flex flex-col m-4">
                            <label className="mb-2">Upload Image</label>
                            <input className="border-2 p-2" type="file" onChange={setFile} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>



    );
};
export default Additem;
