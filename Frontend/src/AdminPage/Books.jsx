import React, { useRef } from 'react';
import  { useEffect,  useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

import { IoSearch } from "react-icons/io5";
import AddBook from './AddBook';


function Books() {

 const [useBook, setBookData]=useState([]);
 const [search, setSearch] = useState("");

   const dialogRef = useRef(null);
    
      const openDialog = () => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      };
  

  const fetchAllBook= async()=>{
    const res=await axios.get("http://localhost:3000/api/Book/getBooks");
    console.log(res);
    setBookData(res.data)
    
  }
  useEffect(()=>{
    fetchAllBook();
  },[])

  const filterBook = useBook.filter((item) => {
    const searchLower = search.toLowerCase();
    return (
      item.BookName?.toLowerCase().includes(searchLower) ||
      item.Author?.toLowerCase().includes(searchLower) ||
      item.ISBN?.toLowerCase().includes(searchLower)||
      item.Category?.toLowerCase().includes(searchLower)||
      item.Rack?.toLowerCase().includes(searchLower)
    );
  });
  
     const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this Book?");
        if (!confirmDelete) return;
    
        try {
          const res = await axios.delete(`http://localhost:3000/api/Book/delete/${id}`);
          if (res.status === 200) {
            // Filter out the deleted user from the state
            setBookData((prevBooks) => prevBooks.filter((useBook) => useBook._id !== id));
            alert("Book deleted successfully.");
          }
        } catch (error) {
          console.error("Error deleting Book:", error);
          alert("An error occurred while deleting the book.");
        }
      };

  return (
    <div className=" p-4 w-[100%] h-[100%] border-red-600 border-2">
      <div className="text-white flex justify-between items-center mb-4">
      <p className="font-bold text-2xl text-black">Manage Books</p>

      {/* Search input container */}
      <div className="flex items-center w-80 border-2 border-gray-600  rounded-lg">
        <input 
          type="text" 
          placeholder="Search book"  
          className="text-black p-1  w-full block relative"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch   className="  text-black relative "  size={25} />
      </div>

      {/* Add book button */}
      <button className="p-2 bg-blue-600 font-bold text-lg rounded-lg text-white"
      onClick={openDialog}
      >
        Add Book
      </button>
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
            filterBook.map((item ,i)=>(
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
              <td className="p-2">{new Date(new Date(item.createdAt)).toLocaleDateString()}</td>
              <td className="p-2 flex justify-center gap-2">
                <button className="py-2 px-4 bg-yellow-300 rounded-lg gap-2 font-semibold"
                onClick={openDialog}>
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
         
        </table>
        
      </div>
      <dialog ref={dialogRef} className="bg-gray-800 p-6 rounded-md shadow-lg text-white">
        <AddBook dialogRef={dialogRef} />
      </dialog>
    </div>
  );
}

export default Books;
