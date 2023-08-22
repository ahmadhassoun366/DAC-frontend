import { React, useState } from "react";
import Header from "../../../layout/header-layout/header";
import { Link } from "react-router-dom";
import { useAuth } from '../../../AuthProvider/AuthProvider';

const Index = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // call the login function with the entered email and password
    // await login(email, password);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-5 flex flex-row justify-center sm:py-12">
        <div className="pr-10 flex-grow flex items-center justify-center ">
          <img src="content-management-system.png" alt="Logo" className="" />
        </div>
        <div className="relative py-3 m:max-w-xl sm:mx-auto flex-grow" style={{ width: "15vw", height: "50%", margin: "auto", marginRight: "10%" }}>
          <div className="absolute inset-0 bg-CustomColor4 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-semibold px-20">Sign in to account</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <Link className="bg-gray-900 text-white rounded-md px-4 py-1 font-semibold" to="/dashboard">
                      Submit
                    </Link>
                  </div>
                  <div className="relative">
                    <Link to="/signup" className="absolute right-0 bottom-0 p-3 bg-CustomColor4 text-CustomColor1 rounded-md">
                      Signup
                    </Link>
                  </div>
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
