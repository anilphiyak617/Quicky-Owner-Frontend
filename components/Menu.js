import React from "react";

const Menu = () => {
  const navList = [
    { title: "Home" },
    { title: "Menu" },
    { title: "Services" },
    { title: "Create Account" },
  ];
  return (
    <div className=" hidden md:block">
      <div className="ml-10  lg:flex-rows items-baseline space-x-4">
        {navList.map((item) => (
          <a
            href={item.title}
            key={item.title}
            className="text-gray-900 font-sans  text-left font-normal hover:text-[#4CC9F0] px-3 py-2  text-md cursor-pointer select-none "
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
