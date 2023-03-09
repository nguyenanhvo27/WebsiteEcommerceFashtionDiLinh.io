import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart,total,clearCart,itemAmount } = useContext(CartContext);
 
  return (
    <div
      className={`${
        isOpen ? "right-0 " : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
   xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className=" flex items-center justify-between py-6 boder-b">
        <div className="uppercase text-sm font-semibold ">Shopping Cart:({itemAmount})</div>
        <div
          onClick={handleClose}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl " />
        </div>
      </div>
      <hr></hr>
      {cart.length==0 ?<></>:
      <div className="mt-3">
       <input type="checkbox" className="w-5 h-4"></input>
       <label className=" ml-3 font-semibold text-red-500">Tất cả sản phẩm</label>
       </div>
       }
      <div className="flex flex-col gap-y-2 h-[330px] lg:h-[350px] overflow-x-hidden border-b">
        {cart.length == 0 ? 
        <div onClick={handleClose} className="m-40">
          <h1 className="text-[20px] text-red-600 font-medium mb-2 mx-auto ">Giỏ hàng trống</h1>
          <Link to={"/"} className="bg-gray-200 flex p-4 justify-center items-center text-primary w-[150px]  font-medium" >
          Mua hàng
          </Link>
        </div>:<> {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}</>}
      </div>
      {cart.length ==0 ?
      <></>:
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${parseFloat(total)}
          </div>
          <div onClick={()=>clearCart()} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FaTrashAlt />
          </div>
        </div>
        <Link to='/' className= "bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">View Cart</Link>
        <Link onClick={handleClose} to={"/checkout"} className= "bg-black flex p-4 justify-center items-center text-white w-full font-medium">Checkout</Link>
      </div>}
    </div>
  );
};

export default Sidebar;
