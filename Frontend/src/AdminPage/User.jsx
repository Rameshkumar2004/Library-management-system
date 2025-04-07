import React, { useRef } from 'react';
import  { useEffect,  useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import AddUser from "./AddUser";

function User() {
  const [user, setUserData]=useState([]);

  const dialogRef = useRef(null);
  
    const openDialog = () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    };

   const fetchAllUser= async()=>{
      const res=await axios.get("http://localhost:3000/api/User/getUsers");
      console.log(res);
      setUserData(res.data)
      
    }
    useEffect(()=>{
      fetchAllUser();
    },[])

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (!confirmDelete) return;
  
      try {
        const res = await axios.delete(`http://localhost:3000/api/User/delete/${id}`);
        if (res.status === 200) {
          // Filter out the deleted user from the state
          setUserData((prevUsers) => prevUsers.filter((user) => user._id !== id));
          alert("User deleted successfully.");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting the user.");
      }
    };
  
  return (
    <div className=" p-4 w-[100%] h-[100%] border-red-600 border-2">
    <div className="text-white flex justify-between items-center mb-4">
      <p className="font-bold text-2xl text-black">Manage Users</p>
      
      <button
        className="p-2 bg-blue-600 font-bold text-lg rounded-lg"
        onClick={openDialog}
      >
        {/* <Link to="adduser">Add User</Link> */}
        Add User
        
      </button>
    </div>

    <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
            <th className="p-2">SN</th>
            <th className="p-2">Name</th>
            <th className="p-2">Roll_No</th>
            <th className="p-2">Dept.</th>
            <th className="p-2">password</th>
            <th className="p-2">Date</th>
            
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         
         {
          user.map((item ,i)=>(

            <tr key={user.id} className="text-center bg-white border-b">
            <td className="p-2">{i+1}</td>
            <td className="p-2">{item.Name}</td>
            <td className="p-2">{item.Roll_No}</td>
            <td className="p-2">{item.Dept}</td>
            <td className="p-2">{item.Password}</td>
            <td className="p-2">{item.createdAt}</td>
            <td className="p-2 flex justify-center gap-2">
              <button className="py-2 px-4 bg-yellow-300 rounded-lg gap-2 font-semibold">
                Edit
              </button>
              <button className="py-2 px-3 bg-red-600 rounded-lg font-semibold" onClick={()=>handleDelete(item._id)}>
                
                Delete
              </button>
            </td>
          </tr>
          ))
        }
        </tbody>
        {/* <AddBook dialogRef={dialogRef} /> */}
      </table>
      
    </div>
    <dialog ref={dialogRef} className="bg-gray-800 p-6 rounded-md shadow-lg text-white">
        <AddUser dialogRef={dialogRef} />
      </dialog>
  </div>
);
}


export default User
