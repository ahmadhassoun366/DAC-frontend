import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const Addunit = (props) => {
    // State for form fields
    const [unitName, setUnitName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [subUnit, setSubUnit] = useState("");
    const [operation, setOperation] = useState("");
    const [amount, setAmount] = useState("");
    const [Subunitlist, setSubunitlist] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    //fetch subunit http://127.0.0.1:8000/api/subunit/
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construct the payload
        const payload = {
            name: unitName,
            unit_symbol: symbol,
            sub_unit: subUnit.name,
            operation,
            amount, // Include Amount in the payload
        };

        try {
            // Make a POST request to your API endpoint
            const response = await fetch('http://127.0.0.1:8000/api/unit/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Success:", data);
                // Here you can reset your form or navigate the user to another page or show a success message
                props.UpdateSettingUnits();
                props.closeModal()
                toast.success("Successfully Added!");
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("There was an error submitting the form", error);
        }
    };

    const fetchSubUnits = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/subunit");
            setSubunitlist(response.data);
            console.log("response", response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching the units:", error);
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchSubUnits();
        console.log("heeeeeeeeeeeeeeeeeeeeee", Subunitlist)
    }, [Subunitlist]);
    return (
        <div className="py-6 px-4">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add Unit</h2>
                <form onSubmit={handleSubmit}>
                    {/* Unit Name */}
                    <div className="mb-4">
                        <label htmlFor="unitName" className="block text-gray-700 font-medium mb-2">
                            Unit Name
                        </label>
                        <input
                            type="text"
                            id="unitName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter unit name"
                            value={unitName}
                            onChange={(e) => setUnitName(e.target.value)}
                            required
                        />
                    </div>
                    {/* Amount */}
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    {/* Operation */}
                    <div className="mb-4">
                        <label htmlFor="operation" className="block text-gray-700 font-medium mb-2">
                            Operation
                        </label>
                        <select
                            id="operation"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            value={operation}
                            onChange={(e) => setOperation(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select operation</option>
                            <option value="+">Addition (+)</option>
                            <option value="-">Subtraction (-)</option>
                            <option value="*">Multiplication (*)</option>
                            <option value="/">Division (/)</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* Symbol */}
                    <div className="mb-4">
                        <label htmlFor="symbol" className="block text-gray-700 font-medium mb-2">
                            Symbol
                        </label>
                        <input
                            type="text"
                            id="symbol"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter symbol"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                            required
                        />
                    </div>

                    {/* Sub Unit */}
                    <div className="mb-4">
                        <label htmlFor="subUnit" className="block text-gray-700 font-medium mb-2">
                            Sub Unit
                        </label>
                        <select
                            id="subUnit"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            value={subUnit}
                            onChange={(e) => setSubUnit(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select sub unit</option>
                            {Subunitlist.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.name}
                                </option>
                            ))}
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
                    >
                        Add Unit
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button
                        // to="/dashboard/accounting/units"
                        onClick={() => props.closeModal()}
                        className="text-black-500 hover:underline">
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Addunit;
