import React from 'react'


function Publisher() {
  return (
    <div div className="p-4  w-full h-[100%]">
        <div className="text-black flex justify-between items-center mb-4">
        <p className="font-bold text-2xl">Publisher</p>
        
      </div>
      <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
              <th className="p-2">Book</th>
              <th className="p-2">Publisher</th>
              <th className="p-2">Rack</th>
              <th className="p-2">Status</th>
             
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="text-center bg-white border-b">
              <td className="p-2">Data Science</td>
              <td className="p-2">XYZ Publishing</td>
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

export default Publisher;
