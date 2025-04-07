import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { GoIssueClosed } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";


function Sidebar() {
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isIssueOpen, setISIssueOpen]=useState(false)

  return (
    <div className="bg-gray-700 text-white text-lg font-bold  p-4 min-h-screen">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="dashboard" className="flex p-2 hover:bg-gray-600 rounded  items-center gap-1"><MdDashboard  className="text-yellow-400 " /> Dashboard</Link>
          </li>
          <li>
            <button
              className="w-full text-left p-2 hover:bg-gray-600 rounded flex justify-between items-center"
              onClick={() => setIsBooksOpen(!isBooksOpen)}
            >
              
              <p className=" flex items-center gap-1"> <FaBookReader  className="text-yellow-400 "/>Book</p>
              <span>{isBooksOpen ? "▲" : "▼"}</span>
            </button>
            {isBooksOpen && (
              <ul className="ml-4 mt-2 space-y-1 text-sm">
                <li><Link to="books" className="block p-1 hover:bg-gray-600 rounded">Manage Books</Link></li>
                <li><Link to="category" className="block p-1 hover:bg-gray-600 rounded">Category</Link></li>
                <li><Link to="author" className="block p-1 hover:bg-gray-600 rounded">Author</Link></li>
                <li><Link to="Publisher" className="block p-1 hover:bg-gray-600 rounded">Publisher</Link></li>
                <li><Link to="rack" className="block p-1 hover:bg-gray-600 rounded">Rack</Link></li>
              </ul>
            )}
          </li>
          <li>
          <button
                 className="w-full text-left p-2 hover:bg-gray-600 rounded flex justify-between items-center"
                 onClick={() => setISIssueOpen(!isBooksOpen)}
               >
                 
                 <p className=" flex items-center gap-1"> <GoIssueClosed className=" text-yellow-400 "/>Issue</p>
                 <span>{isIssueOpen ? "▲" : "▼"}</span>
               </button>
               {isIssueOpen && (
              <ul className="ml-4 mt-2 space-y-1 text-sm">
                <li><Link to="IssueBook" className="block p-1 hover:bg-gray-600 rounded">IssueBook</Link></li>
                <li><Link to="returnbook" className="block p-1 hover:bg-gray-600 rounded">ReturnBook</Link></li>
                
              </ul>
            )}
            {/* <Link to="IssueBook" className="flex p-2 hover:bg-gray-600 rounded items-center gap-1"><GoIssueClosed className=" text-yellow-400 "/> Issue Books</Link> */}
          </li>
          <li>
            <Link to="user" className="flex p-2 hover:bg-gray-600 rounded items-center gap-1"><FaUserGraduate  className="text-yellow-400 " /> User</Link>
          </li>
          <li>
            <Link to="/" className="flex p-1  hover:bg-red-700 rounded bg-red-500 items-center gap-1"><IoIosLogOut  className="text-yellow-400 "/> Logout </Link>
          </li>
        </ul>
      </nav>
     </div>
  );
}

export default Sidebar;
