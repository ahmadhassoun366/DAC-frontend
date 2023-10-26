import React, { useState } from 'react';

function CompanySettings() {
    const [currency, setCurrency] = useState("");
    const [classification, setClassification] = useState("");
    const [salesman, setSalesman] = useState("");
    const [paymentPeriod, setPaymentPeriod] = useState("");
    const [priceList, setPriceList] = useState("");
    const [dollarCurrency, setDollarCurrency] = useState("");
    const [rootAccountNbrForCUST, setRootAccountNbrForCUST] = useState("");
    const [rootAccountNbrForSUPP, setRootAccountNbrForSUPP] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h1 className="text-2xl mb-4">Company Setting</h1>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                    <span className="text-gray-700">Currency</span>
                    <select value={currency} onChange={e => setCurrency(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm">
                        {/* Example options */}
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        {/* Add more options here */}
                    </select>
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Customer Classification</span>
                    <select value={classification} onChange={e => setClassification(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm">
                        {/* Example options */}
                        <option value="Regular">Regular</option>
                        <option value="VIP">VIP</option>
                        {/* Add more options here */}
                    </select>
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Salesman</span>
                    <select value={salesman} onChange={e => setSalesman(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm">
                        {/* Example options */}
                        <option value="John">John</option>
                        <option value="Jane">Jane</option>
                        {/* Add more options here */}
                    </select>
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Payment Period</span>
                    <select value={paymentPeriod} onChange={e => setPaymentPeriod(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm">
                        {/* Example options */}
                        <option value="7 days">7 days</option>
                        <option value="30 days">30 days</option>
                        {/* Add more options here */}
                    </select>
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Price List</span>
                    <select value={priceList} onChange={e => setPriceList(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm">
                        {/* Example options */}
                        <option value="Retail">Retail</option>
                        <option value="Wholesale">Wholesale</option>
                        {/* Add more options here */}
                    </select>
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Dollar Currency</span>
                    <input type="text" value={dollarCurrency} onChange={e => setDollarCurrency(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm" />
                </label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <label className="block">
                        <span className="text-gray-700">Root Account NBR For CUST</span>
                        <input type="text" value={rootAccountNbrForCUST} onChange={e => setRootAccountNbrForCUST(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">For SUPP</span>
                        <input type="text" value={rootAccountNbrForSUPP} onChange={e => setRootAccountNbrForSUPP(e.target.value)} className="mt-1 block w-full rounded-md shadow-sm" />
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </form>
        </div>
    );
}

export default CompanySettings;
