
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const CreateCompany = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [financeNumber, setFinanceNumber] = useState('');
    const [registerNumber, setRegisterNumber] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();

        var ManagerId = localStorage.getItem('userId');
        console.log("SeekerId", ManagerId);
        const registrationData = {
            name,
            brand,
            financeNumber,
            registerNumber,
            address,
            phone,
            ManagerId
        };
        await fetch(`http://127.0.0.1:8000/api/company_register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                name('')
                brand('')
                financeNumber('')
                setPhone('')
                registerNumber('')
                address('')
                phone('')
                ManagerId('')
                console.log(data);
                history.push("/");
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });

    }

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "lightgray" }} >
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mr-10" style={{ marginLeft: "5%" }} onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="brand">
                        Brand Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="brand" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="financeNumber">
                        Financial Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="financeNumber" type="text" value={financeNumber} onChange={(e) => setFinanceNumber(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="registerNumber">
                        Commercial Registration Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registerNumber" type="text" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="address">
                        Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        Phone Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <div className="bg-center bg-cover w-1/2" ><img src='content-management-system.png' alt='' style={{ width: "50%", margin: "auto" }} />
                <h3 style={{
                    width: "50%",
                    margin: "auto",
                    textAlign: "center",
                    marginTop: "10%"
                }}>CREATE YOUR OWN COMPANY</h3>   </div>
        </div>
    )
}
export default CreateCompany;