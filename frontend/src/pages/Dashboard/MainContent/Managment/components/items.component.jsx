import React, { useState } from 'react';

function ItemsSettings() {
    const [purchItemCurrency, setPurchItemCurrency] = useState("");
    const [saleItemsCurrency, setSaleItemsCurrency] = useState("");
    const [itemUnit, setItemUnit] = useState("");
    const [costType, setCostType] = useState("");
    const [itemInventoryBy, setItemInventoryBy] = useState("");

    return (
        <div className="min-h-screen flex items-start justify-center bg-gray-200 p-6">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">PUR Item Currency</label>
                    <select 
                        value={purchItemCurrency} 
                        onChange={(e) => setPurchItemCurrency(e.target.value)} 
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select Currency</option>
                        {/* Add more options here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Sale Items Currency</label>
                    <select 
                        value={saleItemsCurrency} 
                        onChange={(e) => setSaleItemsCurrency(e.target.value)} 
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select Currency</option>
                        {/* Add more options here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Items Unit</label>
                    <select 
                        value={itemUnit} 
                        onChange={(e) => setItemUnit(e.target.value)} 
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select Unit</option>
                        {/* Add more options here */}
                    </select>
                </div>

                {/* More options like checkboxes and inputs can be added here following a similar structure. */}
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Cost</label>
                    <select 
                        value={costType} 
                        onChange={(e) => setCostType(e.target.value)} 
                        className="w-full border rounded p-2"
                    >
                        <option value="">AVG Price</option>
                        {/* Add more options here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Item Inventory By</label>
                    <label className="block text-gray-700 mb-2">
                        <input type="radio" name="inventory" value="warehouse" onChange={(e) => setItemInventoryBy(e.target.value)} />
                        Warehouse
                    </label>
                    <label className="block text-gray-700 mb-2">
                        <input type="radio" name="inventory" value="branch" onChange={(e) => setItemInventoryBy(e.target.value)} />
                        Branch
                    </label>
                </div>

                {/* Other settings and checkboxes can be added similarly */}
                <div className="flex space-x-4 mt-4">
                    <button className="bg-blue-500 text-white rounded p-2 w-1/2">Save</button>
                    <button className="bg-red-500 text-white rounded p-2 w-1/2">Exit</button>
                </div>
            </div>
        </div>
    );
}

export default ItemsSettings;
