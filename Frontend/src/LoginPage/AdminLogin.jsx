import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


function AdminLogin() {
  const [name, setname]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [Message, setMessage]=useState("")


  const navigate = useNavigate()
  const  submitHandler=(event)=>{
    event.preventDefault();
    axios.get("http://localhost:3000/api/admin/getadmin", {
         name:name,
         email:email,
         password:password 
      })
      .then(res=>{
        navigate('/adminpage')
        console.log(res);
        
      })
     .catch (err =>{
      setMessage("Please provide a valid email and password") 
      console.error(err)
  } )

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 w-96 p-6 text-white rounded-md shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-6">Admin Login</h2>
        <form
          onSubmit={submitHandler}
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
            <label className="mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
            required
              onChange={e=>{setEmail(e.target.value)}}
              id="email"
              type="email"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
            required
              onChange={e=>{setPassword(e.target.value)}}
              id="password"
              type="password"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
          >
            {/* <a href="/Adminpage">Login</a> */}
           Login 
            
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
