import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Publisher from './Publisher';
import axios from 'axios'

function AddBook({ dialogRef }) {
     const closeDialog = () => {
         if (dialogRef.current) {
           dialogRef.current.close();
         }
       };
     
       const { register, handleSubmit, formState: { errors } } = useForm();
       const onSubmit = (data) => {
         console.log(data);
       };

  const [bookname, setBookname]=useState("")
  const [sbin, setSBIN]=useState(null)
  const [author, setAuthor]=useState("")
  const [publisher ,setPublisher]=useState("")
  const [category, setCategory]=useState("")
  const [rack, setRack]=useState("")
  const [nocopies, setNocopies]=useState(null)
  const [status, setStatus]=useState("")


  const SubmitHandler=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append('bookname',bookname);
    formData.append("sbin",sbin);
    formData.append('author',author);
    formData.append('publisher',publisher);
    formData.append('category',category);
    formData.append('rack', rack);
    formData.append('nocopies',nocopies);
    formData.append('status',status);
    axios.post("http://localhost:3000/api/Book/create", formData)
    .then(res=>{
      console.log(res);
      
    })
    .catch(err=>{
      console.log(err);
      
    })

  }


  return (
    <div className=" items-center justify-center flex">
      <div className="bg-gray-800 w-96 p-6 text-white rounded-md shadow-lg   relative">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 rounded-full border-2 px-2 py-1 text-red-700"
          onClick={closeDialog}
        >
         {/* <Link to="http://localhost:5173/adminpage/books">X</Link>  */}
         X
        </button>
        <h2 className="text-center text-3xl font-bold mb-6">
          Add <span className=" text-yellow-400">Book</span>
        </h2>
        
        <form
           onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="name">
              Book Name
            </label>
            <input
            required
            onChange={e=>{setBookname(e.target.value)}}
              
              id="name"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="ISBN_NO">
              ISBN_NO
            </label>
            <input
            required
             onChange={e=>{setSBIN(e.target.value)}}
              id="ISBN_NO"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="Author">
              Author
            </label>
            <input
            required
              onChange={e=>{setAuthor(e.target.value)}}
              id="Author"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Publisher</label>
            <input
            required
              onChange={e=>{setPublisher(e.target.value)}}
              id="Publisher"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Category</label>
            <input
            required
            onChange={e=>{setCategory(e.target.value)}}
              id="Category"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Rack</label>
            <select
            onChange={e=>{setRack(e.target.value)}}
              id="Rack"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              
              <option value="R1">R1</option>
              <option value="R2">R2</option>
              <option value="R3">R3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">No_Copies</label>
            <input
            required
             onChange={e=>{setNocopies(e.target.value)}}
              id="No_Copies"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Status</label>
            <select
            onChange={e=>{setStatus(e.target.value)}}
              id="Status"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              
              <option value="Available" className=" text-green-400 font-semibold">
                Available
              </option>
              <option value="Not Available" className=" text-red-400 font-semibold">
                Not Available
              </option>
            </select>
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
  );
}

export default AddBook;
