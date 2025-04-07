import React from 'react'
import  { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { GoIssueClosed } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import pic from "../assets/pic.jpg"

import axios from "axios";

function StdSidebar() {

    const [usestudent, setStudent]=useState([]);

    const fetchAllBook= async()=>{
      const res=await axios.get("http://localhost:3000/api/User/getUsers");
      console.log(res);
      setStudent(res.data)
      
    }
    useEffect(()=>{
      fetchAllBook();
    },[])

  return (
    <div className="bg-gray-700 text-white text-lg font-bold  p-4 min-h-screen">
        <div className='h-[100px] bg-white text-black rounded-lg flex items-center'>
            <img  className='h-[90px] w-[100px] rounded-full' src={pic} alt="" />
        <tbody className=' flex flex-col'>
           {/* {
             usestudent.map((item )=>(
               <tr className="text-center bg-white border-b">
               <td className="p-2 text-green-600">{item.Name}</td>
               <td className="p-2">{item.Rollno}</td>
               
             </tr>
             ))
           } */}

             <td className="">Ramesh kumar</td>
             <td className="">2131918</td>
             <td className=''>CSE</td>
           </tbody>

        </div>
    <nav>
      <ul className="space-y-2">
        <li>
          <Link to="Avelablebook" className="flex p-2 hover:bg-gray-600 rounded  items-center gap-1">< FaBookReader  className="text-yellow-400 " /> All Books</Link>
        </li>
         <li><Link to="bookrack" className="flex p-2 hover:bg-gray-600 rounded  items-center gap-1"><FaBookReader   className="text-yellow-400 "/>Rack</Link></li>
        <li>
          <Link to="Stdissuebook" className="flex p-2 hover:bg-gray-600 rounded  items-center gap-1"><GoIssueClosed    className="text-yellow-400 "/> IssueBook </Link>
        </li>
        <li>
            <Link to="/" className="flex p-1  hover:bg-red-700 rounded bg-red-500 items-center gap-1"><IoIosLogOut  className="text-yellow-400 "/> Logout </Link>
          </li>
      </ul>
    </nav>
   </div>
  )
}

export default StdSidebar
