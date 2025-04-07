import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";
import Admin from "../assets/Admin.png";
import student from "../assets/student.png";
import Navbar from './Navebar';

function Home() {
  return (
    <div className=" flex flex-col">
      <Navbar/>
      <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <img
        src={image}
        alt="Library Image"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Container */}
      <div className="relative bg-blue-800 w-[550px] h-[335px] p-4 text-white rounded-md shadow-lg bg-opacity-70">
        <div className="text-2xl font-semibold text-center mb-4">
          Welcome to Library Management System
        </div>
        
        <div className="flex justify-between">
          {/* Admin Section */}
          <div className="w-[48%] text-center">
            <img src={Admin} alt="Admin" className="w-full h-52 p-2 rounded-md" />
            <button className="mt-4 w-full p-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition">
            <Link to="/adminlogin">Signing in as Admin</Link>  
            </button>
          </div>

          {/* Student Section */}
          <div className="w-[48%] text-center rounded-lg">
            <img src={student} alt="Student" className="w-full h-52 p-2 rounded-lg" />
            <button className="mt-4 w-full p-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition">
            <Link to="/login">Signing in as Student</Link> 
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
