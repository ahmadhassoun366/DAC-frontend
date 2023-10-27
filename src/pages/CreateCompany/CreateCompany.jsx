import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const CreateCompany = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [commercialRegister, setCommercialRegister] = useState("");
  const [taxIdentification, setTaxIdentification] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const manager = localStorage.getItem("userId");
  console.log("manager", manager);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      name,
      brand,
      taxIdentification,
      commercialRegister,
      address,
      phone,
      manager,
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/company_register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any authorization headers here, if 
          },
          body: JSON.stringify(registrationData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data from server", data);

      // Reset form fields
      setName("");
      setBrand("");
      setTaxIdentification("");
      setCommercialRegister("");
      setAddress("");
      setPhone("");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: "lightgray" }}
    >
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 "
        style={{ marginLeft: "5%" }}
        onSubmit={handleSubmit}
      >
            <h1 className="text-center text-3xl font-semibold">Create Your Own Comanpy</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="brand"
          >
            Brand Name (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="financeNumber"
          >
            Financial Number (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="financeNumber"
            type="text"
            value={taxIdentification}
            onChange={(e) => setTaxIdentification(e.target.value)}
            
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="registerNumber"
          >
            Commercial Registration Number (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="registerNumber"
            type="text"
            value={commercialRegister}
            onChange={(e) => setCommercialRegister(e.target.value)}
            
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="address"
          >
            Address (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
             
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="phone"
          >
            Phone Number (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateCompany;
