import React from "react";
import { TiMail } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserAlt, FaHome, FaCity, FaRegAddressCard } from "react-icons/fa";
import CartItem from "../components/CartItem";
function Checkout() {
  return (
    <div className="flex ml-[200px] pt-32">
      <div className="flex-1">
        <h1 className="text-5xl font-semibold">Checkout</h1>
        <div className="">
          <p className="mt-[30px] text-4xl font-semibold">Thông tin liên hệ</p>
          <div className="mt-5 grid">
            <label className="text-sm">E-mail</label>
            <div className="relative items-center text-gray-400 focus-within:text-gray-600">
              <TiMail className="w-10 h-9 absolute  " />
              <input
                className=" pr-3 pl-10 w-[500px] rounded-lg  p-2 bg-slate-200  focus:bg-gray-300 focus:outline-none"
                type="email"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="mt-5 grid">
            <label className="text-sm">Điện thoại</label>
            <div className="relative items-center text-gray-400 focus-within:text-gray-600">
              <BsFillTelephoneFill className="w-5 h-9 ml-3 absolute   " />
              <input
                className=" pr-3 pl-10 w-[500px] rounded-lg  p-2 bg-slate-200  focus:bg-gray-300 focus:outline-none"
                type="text"
                placeholder="Phone"
              ></input>
            </div>
          </div>
        </div>
        <p className="mt-[30px] text-4xl font-semibold">Địa chỉ </p>
        <div className="mt-5 grid">
          <label className="text-sm">Họ và Tên</label>
          <div className="relative items-center text-gray-400 focus-within:text-gray-600">
            <FaUserAlt className="w-6 h-6 absolute mt-2 ml-2 " />
            <input
              className=" pr-3 pl-10 w-[500px] rounded-lg  p-2 bg-slate-200  focus:bg-gray-300 focus:outline-none"
              type="email"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="mt-5 grid">
          <label className="text-sm">Địa chỉ</label>
          <div className="relative items-center text-gray-400 focus-within:text-gray-600">
            <FaHome className="w-7 h-7 absolute ml-1 mt-1 " />
            <input
              className=" pr-3 pl-10 w-[500px] rounded-lg  p-2 bg-slate-200  focus:bg-gray-300 focus:outline-none"
              type="email"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="mt-5 grid">
          <label className="text-sm">Thành phố/Huyện</label>
          <div className="relative items-center text-gray-400 focus-within:text-gray-600">
            <FaCity className="w-7 h-7 absolute ml-1 mt-1 " />
            <input
              className=" pr-3 pl-10 w-[500px] rounded-lg  p-2 bg-slate-200  focus:bg-gray-300 focus:outline-none"
              type="email"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="mt-5 grid">
          <label className="text-sm">Địa chỉ cụ thể</label>
          <div className="relative items-center text-gray-400 focus-within:text-gray-600">
            <FaRegAddressCard className="w-7 h-7 absolute ml-1 mt-1 " />
            <input
              className=" pr-3 pl-10 w-[500px] rounded-lg  p-2 bg-slate-200  focus:bg-gray-300 focus:outline-none"
              type="email"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <input type="checkbox" name="" id="" />
          <p className="ml-2">Lưu thông tin cho lần sau</p>
        </div>
        <button className="bg-orange-500 w-[100px] h-[40px] rounded-md mt-8 ">
          Tiếp tục
        </button>
       
      </div>
      <div className="flex-1">
            {/* <CartItem/> */}
      </div>
    </div>
  );
}

export default Checkout;
