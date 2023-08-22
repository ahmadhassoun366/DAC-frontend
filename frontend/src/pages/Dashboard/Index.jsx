import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/Navbar";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent"
import Footer from "./Footer/Footer";
const index = () => {
    return (
        <div>
            <NavBar />
            <div class="flex overflow-hidden bg-white pt-16">
                <SideBar />
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <MainContent />
                    <Footer />
                </div>
            </div >
        </div >
    )
};

export default index;
