import React from 'react'
import { Outlet } from "react-router-dom";
import logo from "../assets/agclogo.png";
import StdSidebar from './StdSidebar';

function Studentmainpage() {
  return (
    <div className="flex flex-col  h-full">
    <div className="bg-pink-900 text-white text-2xl font-bold w-full p-4 h-full  flex">
      <div className="flex items-center justify-center flex-grow">Welcome to AGC Library</div>
      <div className="flex  justify-end items-center ">
        <img src={logo} alt="" className=" h-[50px] w-[50px] rounded-full object-cover" />
                  
          <p>AGC Library</p>
          
        
      </div>
    </div>

    <div className="flex">
      <div className=" w-[20%] ">
        <StdSidebar />
      </div>
      <div className="w-[80%] bg-white">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Studentmainpage
