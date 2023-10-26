import React from 'react';

function Categories() {
    return (
        <div className="flex flex-col  p-4 bg-white ">
            <div className="flex space-x-4">
                {/* Expenses Currency */}
                <div className="w-1/2">
                    <label className="block mb-2">Currency for Expenses CATG</label>
                    <select className="w-full border rounded px-2 py-1">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                
                {/* Income Currency */}
                <div className="w-1/2">
                    <label className="block mb-2">Currency for Income CATG</label>
                    <select className="w-full border rounded px-2 py-1">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
            </div>
            
            {/* Root Account NBR */}
            <div className="flex mt-4">
                <label className="w-1/3 block mb-2">Root Account NBR</label>
                <div className="w-2/3 flex space-x-4">
                    <div className="w-1/2">
                        <label className="block mb-2">Expences</label>
                        <input type="text" className="w-full border rounded px-2 py-1" placeholder="601" />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-2">Income</label>
                        <input type="text" className="w-full border rounded px-2 py-1" placeholder="701" />
                    </div>
                </div>
            </div>

            {/* Expenses/Incomes DISC */}
            <div className="flex mt-4">
                <label className="w-1/3 block mb-2">Expences/Incomes DISC</label>
                <div className="w-2/3 flex space-x-4">
                    <div className="w-1/2">
                        <input type="text" className="w-full border rounded px-2 py-1" placeholder="609" />
                    </div>
                    <div className="w-1/2">
                        <input type="text" className="w-full border rounded px-2 py-1" placeholder="709" />
                    </div>
                </div>
            </div>
            
            {/* Save and Exit buttons */}
            <div className="flex mt-4 space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Exit</button>
            </div>
        </div>
    );
}

export default Categories;
