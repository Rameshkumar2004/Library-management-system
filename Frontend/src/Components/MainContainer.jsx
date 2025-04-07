import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../LoginPage/AdminLogin";
import Home from "./Home";
import About from "./About";
import UserLogin from "../LoginPage/UserLogin";
import UserRegister from "../LoginPage/UserRegister";
import Contact from "./Contact";
import Navebar from './Navebar';

import AdminMain from './../AdminPage/AdminMain';

import Dashboard from "../AdminPage/Dashboard";
import Books from "./../AdminPage/Books";
import IssueBook from "./../AdminPage/IssueBook";
import User from "./../AdminPage/User";
import Author from './../AdminPage/Author';
import Category from './../AdminPage/Category';
import Publisher from './../AdminPage/Publisher';
import Rack from './../AdminPage/Rack';
import AddBook from './../AdminPage/AddBook';
import AddUser from '../AdminPage/AddUser'
import Returnbook from "../AdminPage/Returnbook";
import Studentmainpage from "../Studentpage/Studentmainpage";
import AllBook from "../Studentpage/AllBook";
import BookRack from './../Studentpage/BookRack';
import Issuebook from "../Studentpage/Issuebook";

function MainContainer() {
  return (
    <div>
      {/* <BrowserRouter> */}
        {/* <Navebar /> */}
        <Routes>
          {/* Public Routes */}
          {/* <Route path="/" element={<Navebar />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* Admin Routes */}
          <Route path="/Adminpage" element={<AdminMain />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="books" element={<Books />} />
            <Route path="author" element={<Author />} />
            <Route path="category" element={<Category />} />
            <Route path="publisher" element={<Publisher />} />
            <Route path="rack" element={<Rack />} />
            <Route path="issuebook" element={<IssueBook />} />
            <Route path="returnbook" element={<Returnbook />} />


            {/* <Route path="user" element={<User />} /> */}
            <Route path="addbook" element={<AddBook />} />
            <Route path="user" element={<User />}>
            <Route path="adduser" element={<AddUser />} />
            </Route>
          </Route>

          <Route path="Studentpage" element={<Studentmainpage/>}>
            <Route path="Avelablebook" element={<AllBook />} />
            <Route path="bookrack" element={<BookRack/>} />
            <Route path="Stdissuebook" element={<Issuebook />} />

          </Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default MainContainer;
