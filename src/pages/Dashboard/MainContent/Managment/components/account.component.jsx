import React from 'react';

const AccountComponent = () => {
  return (
    <div className="bg-white p-10 m-10 rounded-md shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Account Management</h2>

      <div className="grid grid-cols-2 gap-4">
        
        <div className="flex flex-col">
          <label className="mb-2">Account Number</label>
          <input type="text" className="border p-2 rounded" value="70900" />
        </div>

        <div className="flex flex-col">
          <label className="mb-2">Balance</label>
          <input type="text" className="border p-2 rounded" value="60900" />
        </div>

      </div>

      <div className="mt-4 flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default AccountComponent;
