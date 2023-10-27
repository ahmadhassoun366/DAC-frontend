import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [ setAccessToken] = useState(null);
  const [email, ] = useState("");
  const [password,] = useState("");
  const [error, setError] = useState("");
  const [setUserId] = useState("");
  const [ setSeekerId] = useState("");

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
  }, [isAuthenticated]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/token/`, {
        email,
        password,
      });

      const { refresh, access } = response.data;

      setIsAuthenticated(true);
      setRefreshToken(refresh);
      setAccessToken(access);
      console.log("refresh token is " + refresh);
      console.log("access token is " + access);

      setError("");

      let userId;

      if (refresh) {
        const decodedToken = jwt_decode(refresh);
        console.log("decoded", decodedToken);
        userId = decodedToken.user_id; // Assuming the user ID is stored in the 'user_id' claim
        console.log("User ID:", userId);
        // Use the user ID as needed
        setUserId(userId);
        localStorage.setItem("userId", userId);
        localStorage.setItem("isAuthenticated", true.toString());
      }
      if (userId) {
        const managerResponse = await axios.get(
          `http://127.0.0.1:8000/api/manager/${userId}/`
        );
        console.log("manager", managerResponse.data);
        if (managerResponse.data.length > 0) {
          console.log("manager Logged In Successfully");
          setSeekerId(managerResponse.data[0].id);
          localStorage.setItem("seekerId", managerResponse.data[0].id);
          toast.success("Successfully LoggedIn!");
          navigate("/dashboard");
        }
      }
    } catch (error) {
      if (error.response.status === 401) alert("Invalid email or password.");
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setRefreshToken(null);
    setAccessToken(null);

    localStorage.setItem("isAuthenticated", false.toString());
    navigate("/login"); // Replace '/login' with the actual path of your login page
  };

  useEffect(() => {
    // Retrieve the isAuthenticated value from local storage
    const isAuthenticatedValue = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(isAuthenticatedValue === "true");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        refreshToken,
        email,
        password,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
