import React from "react";
import Logo from "../assets/img/Logo.jpg";
import { FaCcVisa, FaCcJcb,FaShippingFast,FaFacebookSquare,FaInstagramSquare,FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" py-12">
      <div className="flex bg-gray-300">
        <div className="mx-10 flex">
          <ul className="flex ">
            <img className="w-[200px] mt-5" src={Logo} />
            <div className="ml-5 mt-28">
              <span className="  font-semibold">
                Shop thời trang. Quần áo nam nữ
              </span>
              <p className="font-mono"> "Fasshion and so much more" </p>
            </div>
          </ul>
          <div className=" ml-[100px] w-[1px] h-[250px] bg-gray-400 mr-3"></div>
          <ul className="mt-3">
            <a className="font-semibold">Chăm sóc khách hàng</a>
            <li className="font-light text-sm font-normal">
              Trung tâm trợ giúp
            </li>
            <li className="font-light text-sm font-normal">
              Hướng dẫn mua hàng
            </li>
            <li className="font-light text-sm font-normal">Thanh toán</li>
            <li className="font-light text-sm font-normal">Vận chuyển</li>
          </ul>
          <div className=" ml-[200px] w-[1px] h-[250px] bg-gray-400 mr-3"></div>
          <ul className="mt-3">
            <a className="font-semibold">Phương thức thanh toán</a>
            <li className="font-light text-4xl font-normal">
              <FaCcVisa/>
            </li>
            <li className="font-light text-4xl font-normal">
             <FaCcJcb/>
            </li>
            <li className="font-light text-sm font-normal">Thanh toán khi nhận hàng <FaShippingFast className="text-4xl"/></li>
            
          </ul>
          <div className=" ml-[200px] w-[1px] h-[250px] bg-gray-400 mr-3"></div>
          <ul className="mt-3">
            <a className="font-semibold">Theo dõi chúng tôi ở</a>
            <li className=" flex font-light text-sm font-normal">
              <FaFacebookSquare className="text-4xl"/><p>Facebook</p>
            </li>
            <li className=" flex font-light text-sm font-normal">
              <FaInstagramSquare className="text-4xl"/><p>Instagram</p>
            </li>
            <li className=" flex font-light text-sm font-normal">
              <FaTiktok className="text-4xl"/><p>Tiktok</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black">
        <p className="text-white text-center">Di Linh, Lâm Đồng</p>
      </div>
    </footer>
  );
};

export default Footer;
