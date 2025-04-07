import React from "react";
import Sidebar from "./Sidebar";
// import Container from './Container';

import Adminroutes from "../Components/Adminroutes";
import { Outlet } from "react-router-dom";
// import Container from '../Components/MainContainer';
import logo from "../assets/agclogo.png";

function AdminMain() {
  return (
    <div className="flex flex-col  h-full">
      <div className="bg-pink-900 text-white text-2xl font-bold w-full p-4 h-full  flex">
        <div className="flex items-center justify-center flex-grow">Welcome to Admin Page</div>
        <div className="flex  justify-end items-center ">
          <img src={logo} alt="" className=" h-[50px] w-[50px] rounded-full object-cover" />
                    
            <p>AGC Library</p>
            
          
        </div>
      </div>

      <div className="flex">
        <div className=" w-[20%] ">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
