import React, { useRef ,useState , useEffect} from 'react';
import IssuebookForm from './IssuebookForm';
import axios from 'axios';

function IssueBook() {
  const [Issuebook, setIssueBook]=useState([]);
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const fetchAllBook= async()=>{
      const res=await axios.get("http://localhost:3000/api/Issuebook/showissuebook");
      console.log(res);
      setIssueBook(res.data)
      
    }
    useEffect(()=>{
      fetchAllBook();
    },[])
 
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
            <th className="p-2">S.N</th>
              <th className="p-2">Book</th>
              <th className="p-2">ISBN</th>
              <th className="p-2">Std. Name</th>
              <th className="p-2">Roll_No</th>
              <th className="p-2">Dept</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            {
            Issuebook.map((item ,i)=>(
            <tr className="text-center bg-white border-b">
              <td className="p-2">{i+1}</td>
              <td className="p-2">{item.BookName}</td>
              <td className="p-2">{item.SBIN}</td>
              <td className="p-2">{item.Name}</td>
              <td className="p-2">{item.Roll_No}</td>
              <td className="p-2">{item.Dept}</td>
              <td className="p-2">{new Date(new Date(item.Date)).toLocaleDateString()} </td>
              <td className="p-2 text-green-600">Successful</td>
            </tr>
            ))}
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
