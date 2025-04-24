import React, { useState, useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import axios from "axios";

function Issuebook() {

       const [time, setTime] = useState(new Date());
       const [Issue, setIssueData]=useState([]);
   
       useEffect(() => {
         const intervalId = setInterval(() => {
           setTime(new Date());
         }, 1000);
     
         // Cleanup interval on component unmount
         return () => clearInterval(intervalId);
       }, []);

       const fetchAllUser= async()=>{
             const res=await axios.get("http://localhost:3000/api/Issuebook/showissuebook");
             console.log(res);

             setIssueData(res.data.filter((Data) => Data.Roll_No ==="2131918"));
             
           }
           useEffect(()=>{
             fetchAllUser();
           },[])
       
       return (
         <div div className="p-4  w-full h-[100%]">
           <div className="text-black flex justify-between items-center mb-4 px-2">
             <p className="font-bold text-2xl">ReturnBook</p>
             <p className="p-2 font-bold bg-green-600 text-white rounded-lg">
               {time.toLocaleDateString()} - {time.toLocaleTimeString()}{" "}
             </p>
           </div>
           <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
             <table className="w-full border-collapse">
               <thead>
                 <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
                   <th className="p-2">S.N</th>
                   <th className="p-2">Book</th>
                   <th className="p-2">ISBN</th>
                   <th className="p-2">Stu. Name</th>
                   <th className="p-2">Roll No</th>
                   <th className="p-2">Dept..</th>

                   <th className="p-2"> Issue Date</th>
                   <th className="p-2"> Return Date</th>
                   <th className="p-2 flex">
                     {" "}
                     Fine (
                     <span className="text-red-600 font-semibold flex items-center">
                       1day = <MdCurrencyRupee />1
                     </span>
                     )
                   </th>
                   <th className="p-2"> Return Status</th>
                 </tr>
               </thead>
               <tbody>
                 {/* Example Row */}
                 {Issue.map((item, i) => (
                   <tr className="text-center bg-white border-b" key={item.id} item={item}>
                     <td className="p-2">{i + 1}</td>
                     <td className="p-2">{item.BookName}</td>
                     <td className="p-2">{item.SBIN}</td>
                     <td className="p-2">{item.Name}</td>
                     <td className="p-2">{item.Roll_No}</td>
                     <td className="p-2">{item.Dept}</td>
                     <td className="p-2">
                       {new Date(item.Date).toLocaleDateString()}
                     </td>
                     <td className="p-2">
                     {new Date(new Date(item.Date).setDate(new Date(item.Date).getDate() + 15)).toLocaleDateString()}
                     </td>

                     <td className="p-2">0</td>
                     <td className="p-2 text-red-600 font-bold">Panding</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       );
}

export default Issuebook
