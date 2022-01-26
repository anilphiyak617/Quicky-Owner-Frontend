import React from "react";

const Menu = () => {
  return (
    <div className=" hidden md:block">
      <div className="ml-10  lg:flex-rows items-baseline space-x-4">
        <a
          href="#"
          className="text-gray-900 font-medium hover:text-green-500 px-3 py-2  text-md "
        >
          Home
        </a>

        <a
          href="#"
          className="text-gray-900 font-medium hover:text-green-500  px-3 py-2  text-md "
        >
          Menu
        </a>

        <a
          href="#"
          className="text-gray-900  font-medium hover:text-green-500  px-3 py-2 text-md "
        >
          Services
        </a>

        <a
          href="#"
          className="text-gray-900 font-medium hover:text-green-500  py-2  text-md "
        >
          How it works
        </a>
      </div>
    </div>
  );
};

export default Menu;
