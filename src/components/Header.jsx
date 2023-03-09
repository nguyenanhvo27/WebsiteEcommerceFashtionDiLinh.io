import React, { useContext, useState, useEffect } from "react";
import { FaShoppingBag, FaUserAstronaut } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 900 ? setIsActive(true) : setIsActive(false);
    });
  });
  const [showOption, setShowOption] = useState(false);
  const handleShowOption = () => {
    setShowOption(!showOption);
  };

  return (
    <header
      className={`${
        isActive ? "bg-blue-400 shadow-md" : "bg-orange-300"
      } fixed w-full z-10 transition-all text-center `}
    >
      <nav className="flex flex-row justify-between items-center py- mx-10 relative ">
        <div className="basic-1/4 flex justify-between items-center">
          <Link to={"/"}>
            <img className="w-32 h-32" src={Logo} />
          </Link>
          <span className=" lg:ml-3 lg:text-4xl font-semibold cursor-pointer">
            DiLinh
          </span>
        </div>
        <ul className="basis-3/6 lg:flex lg:items-center lg:justify-center lg:gap-8 uppercase text-xl text-gray-700 ">
          <Link to={"/"}>
            <li className="cursor-pointer py-1 hover:text-gray-800 hover:font-bold">
              Home
            </li>
          </Link>
          <Link to={"/shop"}>
            <li className="cursor-pointer py-1 hover:text-gray-800 hover:font-bold">
              Shop
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="cursor-pointer py-1 hover:text-gray-800 hover:font-bold">
              About
            </li>
          </Link>
          <li className="cursor-pointer py-1 hover:text-gray-800 hover:font-bold">
            Contact
          </li>
        </ul>
        <ul className="basic-3/6 flex gap-2 justify-end lg:justify-start ">
          <li>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex text-gray-50 hover:text-teal-100"
            >
              <FaShoppingBag className=" text-gray-50 hover:text-teal-100 text-3xl" />
              <div className="bg-red-500 absolute-right-2-bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
          </li>
          <div className="w-0.5 h-[40px] bg-red-500 mr-3"></div>
          <li>
            <div class=" justify-end">
              <div class="relative mx-auto">
                <div>
                  <FaUserAstronaut
                    onClick={handleShowOption}
                    className="rounded-full bg-slate-400 text-gray-50 hover:text-teal-100 text-4xl"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </FaUserAstronaut>
                </div>
                {showOption && (
                  <div
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      <a
                        href="/login"
                        class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                      >
                        Login
                      </a>
                      <a
                        href="/register"
                        class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                      >
                        Register
                      </a>
                      <a
                        href="#"
                        class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                      >
                        License
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-3"
                        >
                          Log out
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
        <div className=" basic-1/6 lg:hidden text-4xl">
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
