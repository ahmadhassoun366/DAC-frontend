import React from 'react';

function Invoice() {
    return (
        <div className="flex flex-col bg-white p-6 border-gray-300">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Company Setting</h2>
                <button className="p-2 rounded hover:bg-gray-200">X</button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
                {/* Left Section */}
                <div className="col-span-1 flex flex-col space-y-4">
                    <button className="py-2 bg-red-500 text-white rounded">Customers</button>
                    <button className="py-2 bg-red-500 text-white rounded">Salesmen</button>
                    <button className="py-2 bg-red-500 text-white rounded">Items</button>
                    <button className="py-2 bg-red-500 text-white rounded">Categories</button>
                    {/* ... other buttons */}
                </div>

                {/* Middle Section */}
                <div className="col-span-2 flex flex-col space-y-4">
                    <div>
                        <label className="block mb-2">Show Payment and Receipt Voucher In Invoice</label>
                        <input type="checkbox" className="mr-2" />
                    </div>

                    <div>
                        <label className="block mb-2">Print Weight On Invoice</label>
                        <input type="checkbox" className="mr-2" />
                    </div>
                    
                    {/* ... other checkboxes */}

                    <div className="mt-4">
                        <label className="block mb-2">Show hold invoices</label>
                        <select className="w-full border rounded px-2 py-1">
                            <option value="all">All</option>
                            {/* ... other options */}
                        </select>
                    </div>
                    
                    {/* ... other dropdowns and inputs */}
                </div>

                {/* Right Section */}
                <div className="col-span-1 flex flex-col space-y-4">
                    <div>
                        <label className="block mb-2">Field 1</label>
                        <input type="text" className="w-full border rounded px-2 py-1" />
                    </div>

                    <div>
                        <label className="block mb-2">Field 2</label>
                        <input type="text" className="w-full border rounded px-2 py-1" />
                    </div>

                    <div>
                        <label className="block mb-2">Field 3</label>
                        <input type="text" className="w-full border rounded px-2 py-1" />
                    </div>

                    {/* ... other inputs */}
                </div>
            </div>

            <div className="flex mt-4 space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Exit</button>
            </div>
        </div>
    );
}

export default Invoice;
