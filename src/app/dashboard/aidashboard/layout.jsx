import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-screen bg-slate-100 w-full  ">
      <div className="flex justify-between items-center p-4 w-full fixed bg-white">
        {/* <div className="flex items-center">
          <img
            src="https://placehold.co/50x50"
            alt="Gala logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold">GALA</span>
        </div> */}
        <nav className="hidden md:flex space-x-4">
          <a href="/dashboard/aidashboard" className="text-gray-950">
            Information
          </a>
          <a href="/dashboard/aidashboard/role" className="text-gray-950">
            Role
          </a>
        </nav>
        {/* <div className="flex items-center space-x-4"> */}
        {/* <i className="fab fa-telegram text-gray-950"></i>
          <i className="fab fa-discord text-gray-950"></i>
          <button className="bg-slate-300 text-black px-4 py-2 rounded-full">
            Sign up
          </button>
          <a href="#" className="text-gray-950">
            Login
          </a> */}
        {/* </div> */}
      </div>
      <main className="px-10 py-20 w-full">{children}</main>
    </div>
  );
};

export default layout;
