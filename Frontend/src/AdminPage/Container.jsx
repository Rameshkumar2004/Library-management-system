import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Books from './Books';
import IssueBook from './IssueBook';
import User from './User';
// import HomePage from './HomePage';
import Category from './Category';
import Publisher from './Publisher';
import Rack from './Rack';
import Author from './Author';
import AddBook from './AddBook';

function Container() {
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
          <Route path="/IssueBook" element={<IssueBook />} />
          <Route path="/user" element={<User />} />

          <Route path='/Addbook'  element={<AddBook/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default Container;
