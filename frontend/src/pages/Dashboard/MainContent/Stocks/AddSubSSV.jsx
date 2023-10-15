import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const AddSubSSV = (props) => {
    useEffect(() => {
    }, []);
    return (
        <div className="py-6 px-4">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" style={{ border: "1px solid black" }}>
                <h2 className="text-2xl font-semibold mb-4">Add Store</h2>
                <form>
                    {/* Unit Name */}
                    <div className="mb-4">
                        <label htmlFor="unitName" className="block text-gray-700 font-medium mb-2">
                            Store Name
                        </label>
                        <input
                            type="text"
                            id="unitName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter unit name"
                            // value={unitName}
                            // onChange={(e) => setUnitName(e.target.value)}
                            required
                        />
                    </div>
                    {/* Amount */}
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                            Address
                        </label>
                        <input
                            type="number"
                            id="amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter amount"
                            // value={amount}
                            // onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    {/* Operation */}
                    <div className="mb-4">
                        <label htmlFor="operation" className="block text-gray-700 font-medium mb-2">
                            Description
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            type="textarea" />
                    </div>
                    {/* Symbol */}
                    <div className="mb-4">
                        <label htmlFor="symbol" className="block text-gray-700 font-medium mb-2">
                            Manager
                        </label>
                        <input
                            type="text"
                            id="symbol"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter symbol"
                            // value={symbol}
                            // onChange={(e) => setSymbol(e.target.value)}
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
                    >
                        Add Store
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => props.closeModal()}
                        className="text-black-500 hover:underline">
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddSubSSV;
