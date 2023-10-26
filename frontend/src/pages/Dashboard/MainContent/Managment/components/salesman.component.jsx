import React, { useState } from 'react';

function Salesman() {
    const [currency, setCurrency] = useState("");
    const [rootAccount, setRootAccount] = useState("");
    const [salesmanExpenses, setSalesmanExpenses] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Currency</label>
                    <select 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)} 
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select Currency</option>
                        {/* You can add more options here */}
                    </select>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Root Account NBR</label>
                    <input 
                        type="text" 
                        value={rootAccount}
                        onChange={(e) => setRootAccount(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Salesman Expenses Root Account</label>
                    <input 
                        type="text" 
                        value={salesmanExpenses}
                        onChange={(e) => setSalesmanExpenses(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* Buttons can go here */}
                <button className="bg-blue-500 text-white rounded p-2 w-full">Save</button>
            </div>
        </div>
    );
}

export default Salesman;
