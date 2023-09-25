import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Auth/login/index";
import Signup from "./pages/Auth/signup/index";
import Dashboard from "./pages/Dashboard/Index";
import CreateCompany from "./pages/CreateCompany/CreateCompany";
import { AuthProvider } from "../src/AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import PrivateRoute from "./AuthProvider/PrivateRoute";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve the isAuthenticated value from local storage
    const isAuthenticatedValue = localStorage.getItem("isAuthenticated");

    setIsAuthenticated(isAuthenticatedValue === "true");
  }, []);
  console.log("isAuthenticated !!!!", isAuthenticated);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isAuthenticated ? (
            <Route path="/dashboard/*" element={<Dashboard />} /> // Protected route
          ) : (
            <Route
              path="/dashboard/*"
              element={<Navigate to="/login" />}
            /> // Redirect to login
          )}

          <Route
            path="/CreateCompany"
            element={
              isAuthenticated ? <CreateCompany /> : <Navigate to="/login" />
            }
          />{" "}
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
