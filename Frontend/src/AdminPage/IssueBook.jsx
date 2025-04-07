import React, { useRef } from 'react';
import IssuebookForm from './IssuebookForm';

function IssueBook() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
 
  return (
    <div className="p-4 w-full h-full">
      <div className="text-black flex justify-between items-center mb-4 px-2">
        <p className="font-bold text-2xl">All IssueBook</p>
        <button 
          className="p-2 bg-sky-600 rounded-lg font-bold text-2xl px-4" 
          onClick={openDialog}
        >
          Issue Book
        </button>
      </div>
      
      <div className="w-full h-[90%] bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300 text-gray-700 font-bold text-lg">
              <th className="p-2">Book</th>
              <th className="p-2">ISBN</th>
              <th className="p-2">Author</th>
              <th className="p-2">Category</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="text-center bg-white border-b">
              <td className="p-2">Data Science</td>
              <td className="p-2">123456</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">Research</td>
              <td className="p-2">2024-03-11</td>
              <td className="p-2 text-green-600">Successful</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Issue Book Modal */}
      <dialog ref={dialogRef} className="bg-gray-800 p-6 rounded-md shadow-lg text-white">
        <IssuebookForm dialogRef={dialogRef} />
      </dialog>
    </div>
  );
}

export default IssueBook;
