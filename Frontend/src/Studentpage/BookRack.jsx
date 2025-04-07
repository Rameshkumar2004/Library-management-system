import React from 'react'
import { IoSearch } from "react-icons/io5";
function BookRack() {
  return (
    <div div className="p-4  w-full h-[100%]">
        <div className="text-black flex  items-center mb-4 lg:gap-x-80 md:gap-x-60 sm: gap-x-40">
        <p className="font-bold text-2xl">Rack</p>
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
              <th className="p-2">Book</th>
              {/* <th className="p-2">Author</th> */}
              <th className="p-2">Category</th>
              <th className="p-2">Rack</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="text-center bg-white border-b">
              <td className="p-2">Data Science</td>
              {/* <td className="p-2">John Doe</td> */}
              <td className="p-2">Research</td>
              <td className="p-2">A1</td>
              {/* <td className="p-2">5</td> */}
              <td className="p-2 text-green-600">Available</td>
              
            </tr>
          </tbody>

          </table>
          </div>
    </div>
  )
}

export default BookRack
