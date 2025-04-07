import React from 'react'
import  { useEffect,  useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";



function AllBook() {
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
     <div className=" p-4 w-[100%] h-[100%] border-red-600 border-2">
       <div className="text-white flex  items-center mb-4 lg:gap-x-80 md:gap-x-60 sm: gap-x-40">
       <p className="font-bold text-2xl text-black">All Books</p>
 
       {/* Search input container */}
       <div className="flex items-center w-80 border-2 border-gray-600  rounded-lg">
         <input 
           type="text" 
           placeholder="Search book"  
           className="text-black p-1  w-full block relative"
         />
         <IoSearch   className="  text-black relative "  size={25} />
       </div>
       
     </div>
 
       <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
         <table className="w-full border-collapse">
           <thead>
             <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
               <th className="p-2">SN</th>
               <th className="p-2">Book</th>
               <th className="p-2">ISBN</th>
               <th className="p-2">Author</th>
               <th className="p-2">Publisher</th>
               <th className="p-2">Category</th>
               <th className="p-2">Rack</th>
               <th className="p-2">No. of Copies</th>
               <th className="p-2">Status</th>
               <th className="p-2">Updated On</th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             {/* Example row, replace with dynamic data */}
           {
             useBook.map((item ,i)=>(
               <tr className="text-center bg-white border-b">
               <td className="p-2">{i+1}</td>
               <td className="p-2">{item.BookName}</td>
               <td className="p-2">{item.ISBN}</td>
               <td className="p-2">{item.Author}</td>
               <td className="p-2">{item.Publisher}</td>
               <td className="p-2">{item.Category}</td>
               <td className="p-2">{item.Rack}</td>
               <td className="p-2">{item.No_of_copies}</td>
               <td className="p-2 text-green-600">{item.Status}</td>
               <td className="p-2">{item.createdAt}</td>
               
             </tr>
             ))
           }
           </tbody>
          
         </table>
         
       </div>
       
     </div>
  )
}

export default AllBook
