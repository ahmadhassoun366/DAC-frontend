import React, { useState } from "react";
import Header from "../../../layout/header-layout/header";
import { Link } from "react-router-dom";
const Index = () => {
  // Assume we have onSignup function that handles sign up process
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    description: ""
  });

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-5 flex flex-col items-center justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 text-blue-500">
                  <svg width="20" height="20" fill="currentColor"></svg>
                </div>
                <h1 className="font-semibold text-gray-700">Sign up</h1>
              </div>
              <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
                <input type="text" placeholder="First Name" name="firstName"
                  onChange={handleInputChange} required className="w-full h-10 mb-2" />
                <input type="text" placeholder="Last Name" name="lastName"
                  onChange={handleInputChange} required className="w-full h-10 mb-2" />
                <input type="email" placeholder="Email" name="email"
                  onChange={handleInputChange} required className="w-full h-10 mb-2" />
                <input type="password" placeholder="Password" name="password"
                  onChange={handleInputChange} required className="w-full h-10 mb-2" />
                <input type="password" placeholder="Confirm Password" name="confirmPassword"
                  onChange={handleInputChange} required className="w-full h-10 mb-2" />
                <select name="role" onChange={handleInputChange} className="w-full h-10 mb-2">
                  <option value="">Select Role</option>
                  <option value="accountant">Accountant</option>
                  <option value="company">Company</option>
                  <option value="admin">Admin</option>
                  <option value="store_manager">Store Manager</option>
                  <option value="client">Client</option>
                </select>
                <textarea name="description" placeholder="Description for your profile"
                  onChange={handleInputChange} className="w-full h-20 resize-none mb-2" />
                <button type="submit" className="mt-4 w-full font-semibold text-white bg-blue-500 py-2 rounded-md">
                  Signup
                </button>
              </form>
              <div className="py-5 text-sm text-center">
                <div className="py-2">Or signup with</div>
                <div className="flex justify-center gap-4">
                  <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white text-white">
                    <img src="icons8-facebook-144.png" alt="" />
                  </button>
                  <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white text-white">
                    <img src="icons8-gmail-144.png" alt="" />

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
