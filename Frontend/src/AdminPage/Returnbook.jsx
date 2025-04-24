import React, { useState, useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import axios from "axios";

function Returnbook() {
  const [time, setTime] = useState(new Date());
  // const [Date, setDate] = useState(new Date());
  const [Issuebook, setIssueBook] = useState([]);
  // const [fine, setFine]=useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      // time.setRedate(time + 15)
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchAllBook = async () => {
    const res = await axios.get(
      "http://localhost:3000/api/Issuebook/showissuebook"
    );
    console.log(res);
    setIssueBook(res.data);
  };
  useEffect(() => {
    fetchAllBook();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ISsue book?"
    );
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(
        `http://localhost:3000/api/Issuebook/delete/${id}`
      );
      if (res.status === 200) {
        // Filter out the deleted user from the state
        setIssueBook((prevIssue) =>
          prevIssue.filter((user) => user._id !== id)
        );
        alert("Issue Book deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting IssueBook:", error);
      alert("An error occurred while deleting the Issue Book.");
    }
  };

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
              <th className="p-2"> Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            {Issuebook.map((item, i) => (
              <tr className="text-center bg-white border-b">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{item.BookName}</td>
                <td className="p-2">{item.SBIN}</td>
                <td className="p-2">{item.Name}</td>
                <td className="p-2">{item.Roll_No}</td>
                <td className="p-2">{item.Dept}</td>
                <td className="p-2">
                  {new Date(new Date(item.Date)).toLocaleDateString()}{" "}
                </td>
                <td className="p-2">
                  {" "}
                  {new Date(
                    new Date(item.Date).setDate(
                      new Date(item.Date).getDate() + 15
                    )
                  ).toLocaleDateString()}
                </td>

                <td className="p-2">
                  {(() => {
                    const today = new Date(time);
                    const dueDate = new Date(item.Date);
                    dueDate.setDate(dueDate.getDate() + 16);

                    const diffTime = today - dueDate;
                    const diffDays = Math.ceil(
                      diffTime / (1000 * 60 * 60 * 24)
                    );
                    return diffDays > 0 ? diffDays : 0;
                  })()}
                </td>
                <select
                  className="p-2 text-red-600 font-bold"
                  onChange={(e) => {
                    if (e.target.value === "Submit") {
                      handleDelete(item._id);
                    }
                  }}
                >
                  <option value="Pending" className="font-bold text-red-800">
                    Pending
                  </option>
                  <option value="Submit" className="font-bold text-green-600">
                    Submit
                  </option>
                </select>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Returnbook;
