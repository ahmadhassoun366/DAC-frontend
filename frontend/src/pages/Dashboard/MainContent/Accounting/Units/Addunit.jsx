import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addunit = () => {
    // State for form fields
    const [unitName, setUnitName] = useState("");
    const [description, setDescription] = useState("");
    const [subUnit, setSubUnit] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Construct the payload
        const payload = {
            name: unitName,
            unit_symbol: description, 
            sub_unit: subUnit
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
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("There was an error submitting the form", error);
        }
    };
    

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

                    {/* Description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            rows="4"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
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
                            <option value="1">Sub Unit 1</option>
                            <option value="2">Sub Unit 2</option>
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
                    <Link to="/dashboard/accounting/units" className="text-black-500 hover:underline">
                        Back to Units
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Addunit;
