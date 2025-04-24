import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
function IssuebookForm({ dialogRef }) {
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [BookName, setBookName] = useState('');
  const [SBIN, setIsbn] = useState('');
  const [Name, setStudentName] = useState('');
  const [Roll_No, setRollNo] = useState('');
  const [Dept, setDept] = useState('');
  const [Date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = {
      BookName,
      SBIN,
      Name,
      Roll_No,
      Dept,
      Date
    };
    axios.post("http://localhost:3000/api/Issuebook/create", data)
      .then(res => {
        console.log("Book issue:", res.data);
        alert("book issue successfully!");
        closeDialog();
      })
      .catch(err => {
        console.error("Error issue book:", err.response?.data || err.message);
        alert("Failed to issue book.");
      });

    
  // axios
  //   .put(`http://localhost:3000/api/Book/updateCopies/${book._id}`)
  //   .then((res) => {
  //     alert("Book issued successfully!");
  //     console.log("Updated book:", res.data);
  //     // Optionally update the UI after issuing
  //     // reloadBooks(); // if you have a function to reload the table
  //   })
  //   .catch((err) => {
  //     console.error("Issue book error:", err.response?.data || err.message);
  //     alert("Failed to issue book.");
  //   });


  };

  return (
    <div className="items-center justify-center flex">
      <div className="bg-gray-800 w-96 p-6 text-white rounded-md shadow-lg relative">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 rounded-full border-2 px-2 py-1 text-red-700"
          onClick={closeDialog}
        >
          X
        </button>
        <h2 className="text-center text-3xl font-bold mb-6">
          Issue <span className="text-yellow-400">Book</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="bookName">Book Name</label>
            <input
              id="bookName"
              type="text"
              value={BookName}
              onChange={(e) => setBookName(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="isbn">ISBN</label>
            <input
              id="isbn"
              type="text"
              value={SBIN}
              onChange={(e) => setIsbn(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="studentName">Student Name</label>
            <input
              id="studentName"
              type="text"
              value={Name}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="rollNo">Roll No</label>
            <input
              id="rollNo"
              type="text"
              value={Roll_No}
              onChange={(e) => setRollNo(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="department">Department</label>
            <input
              id="department"
              type="text"
              value={Dept}
              onChange={(e) => setDept(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="date">Issue Date</label>
            <input
              id="date"
              type="Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-evenly">
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

export default IssuebookForm;
