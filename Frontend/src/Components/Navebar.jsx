import React from "react";
import { Link } from "react-router-dom";

import Img from "../assets/logo.png";


function Navbar() {
  return (
    <nav className="bg-blue-700 text-white w-full h-[80px] flex items-center justify-between px-6 md:px-12">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={Img} alt="Logo" className="w-12 h-12 rounded-full bg-white" />
        <span className=" font-bold text-3xl">LMS</span>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-12   font-semibold text-2xl text-white">
   
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/contact">Contact</Link></p>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none">☰</button>
      </div>
    </nav>
  );
}

export default Navbar;