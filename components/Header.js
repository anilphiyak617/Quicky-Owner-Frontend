import React from "react";
import Image from "next/image";
import img from "../public/images/logo.jpg";
import { useState } from "react";
import Menu from "./Menu";
import { Transition } from "@headlessui/react";
import xIcon from "../public/x.svg";
import Test from "./Test";
import Menumobile from "./MenuMobile";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let height = `${menuOpen ? "shadow-md h-[100vh]" : "shadow-md"}`;
  return (
    <div className={height}>
      {/* // menu bar */}
      <div className=" flex items-center space-x-4 p-4 h-20 lg:h-24 lg:px-10 ">
        {!menuOpen && (
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-gray-500"></div>
              <div className="w-5 h-0.5 bg-gray-500"></div>
              <div className="w-5 h-0.5 bg-gray-500"></div>
            </div>
          </div>
        )}

        {/* menu */}
        {menuOpen && (
          <>
            <div
              className="relative transition-all h-6 w-6 ease-in-out duration-1000"
              onClick={() => setMenuOpen(false)}
            >
              <Image src={xIcon} alt="xicon" layout="fill" />
            </div>
          </>
        )}
        {/* logo */}
        <div className="cursor-pointer relative h-10 w-16  lg:h-16 lg:w-24 ">
          <Image src={img} alt="logo" layout="fill" />
        </div>

        {/* menu */}
        <Menu />

        {/* buttons */}
        <div className="flex space-x-2 justify-end flex-grow">
          <button className=" hidden md:block px-6 py-2 font-semibold  text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow-sm lg:px-8 lg:py-2 text-lg  lg:font-normal">
            Join Us
          </button>
          <button className=" px-6 py-2 font-normal text-sm border lg:border-1 text-pink-600 border-pink-400 rounded-full shadow-sm lg:px-8 lg:py-2 lg:text-lg">
            Login
          </button>
        </div>
      </div>
      {/* {menu mobile} */}
      <Menumobile menuOpen={menuOpen} />
    </div>
  );
};

export default Header;
