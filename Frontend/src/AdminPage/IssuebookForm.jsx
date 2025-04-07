import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function IssuebookForm({ dialogRef }) {
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [bookName, setBookName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (data) => {
    console.log(data);
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="bookName">Book Name</label>
            <input
              id="bookName"
              type="text"
              value={bookName}
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
              value={isbn}
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
              value={studentName}
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
              value={rollNo}
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
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="date">Issue Date</label>
            <input
              id="date"
              type="date"
              value={date}
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
