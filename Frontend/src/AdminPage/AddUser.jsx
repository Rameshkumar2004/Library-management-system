import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Publisher from './Publisher';
import axios from 'axios'

function AddUser({ dialogRef }) {
    const closeDialog = () => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    };
  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };

    const [name, setname]=useState("")
    const [rollno, setRollNo]=useState(null)
    const [dept, setDept]=useState("")
    const [password ,setPassword]=useState("")
   
  
  
    const SubmitHandler=(event)=>{
      event.preventDefault();
      const formData=new FormData();
      formData.append('bookname',name);
      formData.append("sbin",rollno);
      formData.append('author',dept);
      formData.append('publisher',password);
     
    //   axios.post("http://localhost:3000/api/Book/create", formData)
    //   .then(res=>{
    //     console.log(res);
        
    //   })
    //   .catch(err=>{
    //     console.log(err);
        
    //   })
  
    }

  return (
    <div className=" items-center justify-center flex">
    <div className="bg-gray-800 w-96 p-6 text-white rounded-md shadow-lg   relative">
      <button
        type="button"
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 rounded-full border-2 px-2 py-1 text-red-700"
        onClick={closeDialog}
      >
       {/* <Link to="/Adminpage/user">X</Link>  */}
       X
      </button>
      <h2 className="text-center text-3xl font-bold mb-6">
        Add <span className=" text-yellow-400">User</span>
      </h2>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium" htmlFor="name">
          Name
          </label>
          <input
          required
          onChange={e=>{setname(e.target.value)}}
            
            id="name"
            type="text"
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium" htmlFor="ISBN_NO">
            Roll_No
          </label>
          <input
          required
           onChange={e=>{setRollNo(e.target.value)}}
            id="Roll_NO"
            type="number"
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium" htmlFor="Author">
            Dept.
          </label>
          <input
          required
            onChange={e=>{setDeptr(e.target.value)}}
            id="Author"
            type="text"
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">password</label>
          <input
          required
            onChange={e=>{setPassword(e.target.value)}}
            id="Publisher"
            type="password"
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
              
            

        <div className=" flex justify-evenly">
          <button
            type="submit"
            className="mt-4 p-2 w-[300px] bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition"
          >
            Save
          </button>
          </div>
      </form>
    </div>
  </div>
  )
}

export default AddUser;
