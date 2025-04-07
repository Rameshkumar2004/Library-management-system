import React, { useState, useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";


function Returnbook() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
    
    return (
    <div div className="p-4  w-full h-[100%]">
    <div className="text-black flex justify-between items-center mb-4 px-2">
    <p className="font-bold text-2xl">ReturnBook</p>
    <p className="p-2 font-bold bg-green-600 text-white rounded-lg">{time.toLocaleDateString()} - {time.toLocaleTimeString()}   </p>
    
    
  </div>
  <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
          <th className="p-2">Book</th>
          <th className="p-2">ISBN</th>
          <th className="p-2">Stu. Name</th>
          <th className="p-2">Roll No</th>
          <th className="p-2">Dept..</th>

          <th className="p-2"> Issue Date</th>
          <th className="p-2"> Return Date</th>
          <th className="p-2 flex"> Fine (<span className='text-red-600 font-semibold flex items-center'>1day = <MdCurrencyRupee/>1</span>)</th>
          <th className="p-2"> Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Example Row */}
        <tr className="text-center bg-white border-b">
          <td className="p-2">Data Science</td>
          <td className="p-2">123456</td>
          <td className="p-2">Ramesh</td>
          <td className="p-2">2131918</td>
          <td className="p-2">Cse</td>
          <td className="p-2">2025-04-01</td>
          <td className="p-2">2025-04-16</td>
          <td className="p-2">0</td>
          <select className="p-2 text-red-600 font-bold">
            <option value="" className='font-bold text-red-800'>Pending</option>
            <option value="" className='font-bold text-green-600'>Submit</option>
          </select>
                        
        </tr>
      </tbody>

      </table>
      </div>
</div>
  )
}

export default Returnbook
