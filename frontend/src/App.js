import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index'
import Login from './pages/Auth/login/index'
import Signup from './pages/Auth/signup/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/signup"  element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
