import React from 'react'
import  { useEffect,  useState } from "react";
import axios from "axios";

function Rack() {
  const [useBook, setBookData]=useState([]);
  const fetchAllBook= async()=>{
    const res=await axios.get("http://localhost:3000/api/Book/getBooks");
    console.log(res);
    setBookData(res.data)
    
  }
  useEffect(()=>{
    fetchAllBook();
  },[])
  
  return (
    <div div className="p-4  w-full h-[100%]">
        <div className="text-black flex justify-between items-center mb-4">
        <p className="font-bold text-2xl">Rack</p>
        
      </div>
      <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
            <th className="p-2">S.N</th>
              <th className="p-2">Book</th>
              <th className="p-2">Rack</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            {
            useBook.map((item ,i)=>(
              <tr className="text-center bg-white border-b">
              <td className="p-2">{i+1}</td>
              <td className="p-2">{item.BookName}</td>
              <td className="p-2">{item.Rack}</td>
              <td className="p-2 text-green-600">{item.Status}</td>
                           
            </tr>
            ))
          }
          </tbody>

          </table>
          </div>
    </div>
  )
}

export default Rack
