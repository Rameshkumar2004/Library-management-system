import React from 'react';
import { Route, Routes } from "react-router-dom";


import Dashboard from './../AdminPage/Dashboard';
import Books from './../AdminPage/Books';
import Author from './../AdminPage/Author';
import Category from './../AdminPage/Category';
import Publisher from './../AdminPage/Publisher';
import Rack from './../AdminPage/Rack';
import IssueBook from './../AdminPage/IssueBook';
import User from './../AdminPage/User';
import AddBook from './../AdminPage/AddBook';

function Adminroutes() {
  return (
    <div className="flex-1 border-2 border-blue-600 p-2 w-full h-full overflow-auto">
      {/* <BrowserRouter> */}
        {/* <HomePage/> */}
        {/* <Dashboard/> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/author" element={<Author/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/Publisher" element={<Publisher/>}/>
          <Route path="/rack" element={<Rack/>}/>
          <Route path="/IssueBook" element={<IssueBook/>} />
          <Route path="/user" element={<User/>} />

          <Route path='/Addbook'  element={<AddBook/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default Adminroutes
