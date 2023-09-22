import React, { useState, useEffect } from "react";

const EditUnit = ({ unitDetails, closeModal }) => {
    const [unitName, setUnitName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [subUnit, setSubUnit] = useState("");
    const [operation, setOperation] = useState("");
    const [amount, setAmount] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    // useEffect(() => {
    //     // If unitDetails prop changes, update the local state
    //     setUnitName(unitDetails.name);
    //     setSymbol(unitDetails.symbol);
    //     setSubUnit(unitDetails.subUnit);
    //     setOperation(unitDetails.operation);
    //     setAmount(unitDetails.amount);
    // }, [unitDetails]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: unitName,
            unit_symbol: symbol,
            sub_unit: subUnit,
            operation,
            amount,
        };

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/unit/${unitDetails.id}/edit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Successfully updated:", data);
                // Here you can navigate the user to another page or show a success message
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("There was an error updating the unit", error);
        }
    };

    return  (
        <div className="py-6 px-4">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Edit Unit</h2>
                
                {!isEditing ? (
                    <div>
                        <p><strong>Unit Name:</strong> {unitName}</p>
                        <p><strong>Symbol:</strong> {symbol}</p>
                        <p><strong>Sub Unit:</strong> {subUnit}</p>
                        <p><strong>Operation:</strong> {operation}</p>
                        <p><strong>Amount:</strong> {amount}</p>
    
                        <button onClick={() => setIsEditing(true)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Edit
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* ... Your existing form fields ... */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </form>
                )}
    
                <div className="mt-4 text-center">
                    <button
                        onClick={closeModal}
                        className="text-black-500 hover:underline">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditUnit;