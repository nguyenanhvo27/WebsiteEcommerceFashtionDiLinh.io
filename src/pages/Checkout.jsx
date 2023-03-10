import React from "react";
import { TiMail } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserAlt, FaHome, FaCity, FaRegAddressCard } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
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
        <div className=" flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
          <input className="" type="checkbox" />
          <div className="w-full min-h-[150px] flex items-center gap-x-4">
            {/* image  */}

            <img
              className="max-w-[70px]"
              src={
                "data:image/jpeg;base64,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"
              }
              alt="product in cart"
            />

            {/* title */}
            <div className="w-full flex flex-col">
              <div className="flex justify-between mb-2">
                <p className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                  balo xanh
                </p>
              </div>
              <div className=" flex gap-x-2 h-[36px] text-sm">
                <div className="flex flex-1 max-w-[100px] items-center h-full border tex-primary font-medium">
                  <div className="h-full flex justify-center items-center px-2">
                    <IoMdRemove />
                  </div>
                  <div className="h-full flex justify-center items-center px-2">
                    3
                  </div>
                  <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                    <IoMdAdd />
                  </div>
                </div>
                <div className="flex-1 flex items-center">Giá</div>
                <div className="flex-1 flex   text-primary font-medium">
                  Tổng
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
