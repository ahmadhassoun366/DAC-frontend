import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addunit = () => {
    // State for form fields
    const [unitName, setUnitName] = useState("");
    const [description, setDescription] = useState("");
    const [subUnit, setSubUnit] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your form submission logic here
        console.log("Form submitted with data:", { unitName, description, subUnit });
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
                            <option value="subUnit1">Sub Unit 1</option>
                            <option value="subUnit2">Sub Unit 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Add Unit
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link to="/dashboard/accounting/units" className="text-blue-500 hover:underline">
                        Back to Units
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Addunit;
