import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Auth/login/index";
import Signup from "./pages/Auth/signup/index";
import Dashboard from "./pages/Dashboard/Index";
import CreateCompany from "./pages/CreateCompany/CreateCompany";
import { AuthProvider } from "../src/AuthProvider/AuthProvider";
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
toast.configure()

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/CreateCompany" element={<CreateCompany />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
