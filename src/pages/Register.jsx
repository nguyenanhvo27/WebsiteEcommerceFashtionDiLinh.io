import React from "react";
import LoginImg from "../assets/img/Login.jpg";
function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div>
        <img
          className="w-full h-full object-cover"
          src={LoginImg}
          alt="hinh anh login"
        />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center ">
        <form className="max-w-[370px] w-full mx-auto bg-black p-8 px-8 rounded-lg">
          <h2 className="text-4xl text-white font-blod text-center font-Lucida">
            REGISTER
          </h2>

          <div className="text-xs flex flex-col text-base text-gray-400 py-2 font-light font-mono">
            <label>User Name</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>
          <div className="text-xs flex flex-col text-base text-gray-400 py-2 font-light font-mono">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <div className="text-xs flex flex-col text-base text-gray-400 py-2 font-light font-mono">
            <label>Comfirm Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <button className="text-base rounded-lg w-full my-3 py-2 shadow-teal-500/50 bg-teal-500 hover:bg-teal-600 font-mono ">
            Register
          </button>
          <h3 className="text-xs my-3 text-white text-center font-light font-mono">
            Login with
          </h3>
          <div className="flex justify-between">
            <button className="text-xs rounded-lg w-2/5 h-6 bg-white hover:bg-slate-300 font-mono text-sm">
              Facebook
            </button>
            <button className="text-xs rounded-lg w-2/5 h-6 bg-white hover:bg-slate-300 font-mono text-sm">
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
