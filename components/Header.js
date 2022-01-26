import React from "react";
import Image from "next/image";
import img from "../public/images/logo.jpg";
import { useState } from "react";
import Menu from "./Menu";
import { Transition } from "@headlessui/react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="shadow-md h-[100vh]">
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
              className="transition-all ease-in-out duration-1000"
              onClick={() => setMenuOpen(false)}
            >
              ❌
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
      <Transition
        show={menuOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="grid grid-cols-1 px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-green-500 px-3 py-2  text-md border-b-2 "
              >
                Home
              </a>

              <a
                href="#"
                className="text-gray-900 font-medium hover:text-green-500  px-3 py-2  text-md border-b-2"
              >
                Menu
              </a>

              <a
                href="#"
                className="text-gray-900  font-medium hover:text-green-500  px-3 py-2 text-md border-b-2"
              >
                Services
              </a>

              <a
                href="#"
                className="text-gray-900 font-medium hover:text-green-500  py-2  text-md border-b-2"
              >
                How it works
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Header;
