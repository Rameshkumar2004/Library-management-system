import React from "react";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="flex-col w-full bg-gray-900  flex min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-evenly text-center m-5 md:m-16">
          {/* Contact Info Section */}
          <div className="text-white p-3 w-full md:w-[50%] items-center justify-center text-center flex-col flex">
            <h3 className="p-3 font-bold text-3xl">Contact <span className="text-yellow-500">Me</span></h3>
            <div className="mt-5">
              <div className="flex items-center gap-3 md:gap-5 justify-center text-center text-lg md:text-3xl">
                <MdEmail /> rameshcse918@gmail.com
              </div>
              <div className="flex items-center gap-3 md:gap-5 mt-2 text-lg md:text-3xl">
                <IoCall /> +91 7368-XXXXXX
              </div>
              <div className="flex items-center gap-5 md:gap-5 mt-2 text-lg md:text-3xl">
                {/* <a href=""><LuInstagram /></a>  */}
                {/* <a href=""><FaTwitter /> </a> */}
                {/* <a href="Linkedin.com/in/ramesh-kumar-7147a8226/"><FaLinkedin /></a> */}
              </div>
              
            </div>
          </div>

          {/* Email Form Section */}
          <div className="w-full md:w-[35%] items-center justify-center text-center flex-col flex mt-10 md:mt-0 bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-bold text-3xl mb-5">
              Email <span className="text-yellow-400">Me</span> ✈️
            </h3>
            <input
              type="text"
              placeholder="Email"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-slate-700 rounded-lg w-[90%] md:w-[70%] mb-3"
            />
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 bg-slate-700 rounded-lg w-[90%] md:w-[70%] mb-3"
            />
            <textarea
              placeholder="Message"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 p-3 rounded-lg w-[90%] md:w-[70%] h-28 mb-3"
            />
            <div className="flex bg-gray-900 p-3 text-center rounded-lg justify-center items-center mb-2 w-[50%] md:w-[30%] text-white">
              <IoIosSend size={25} />
              <button className="ml-2 hover:bg-blue-500">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;