import React, { useState } from "react";
import Header from "../../../layout/header-layout/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Index = () => {
  const navigate  = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    setPasswordMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
    setPasswordMatch(true);
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirst_name(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLast_name(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const registrationData = {
      first_name,
      last_name,
      phone,
      email,
      password,
    };

    await fetch(`http://127.0.0.1:8000/api/manager/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data

        setFirst_name("");
        setLast_name("");
        setPassword("");
        setPhone("");
        setConfirmPassword("");
        console.log(data);
        toast.success("Successfully Registered!");
        navigate("/login");
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-100 py-24 flex flex-col items-center justify-center sm:py-24">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-5">
                <h1 className="font-bold   text-gray-900 text-center capitalize text-2xl">
                  Sign up
                </h1>
              </div>
              <form
                onSubmit={handleSignUp}
                className="divide-y divide-gray-400 my-5"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleFirstNameChange}
                  required
                  className="w-full h-10 mb-2 px-5"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleLastNameChange}
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleEmailChange}
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="phone"
                  placeholder="phone"
                  name="phone"
                  onChange={handlePhoneChange}
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handlePasswordChange}
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleConfirmPasswordChange}
                  onBlur={validatePasswords}
                  required
                  className="w-full h-10 mb-2  px-5"
                />
                <hr/>
                <button
                  type="submit"
                  className="mt-4 w-full font-semibold text-white bg-gray-900 py-2 rounded-md"
                >
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
