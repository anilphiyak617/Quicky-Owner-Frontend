import React from "react";
import { Transition } from "@headlessui/react";
const Menumobile = ({ menuOpen }) => {
  const navList = [
    { title: "Home" },
    { title: "Menu" },
    { title: "Services" },
    { title: "Create Account" },
  ];
  return (
    <Transition
      show={menuOpen}
      enter="transition ease-in duration-200 transform"
      enterFrom="opacity-0 scale-100"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="md:hidden" id="mobile-menu">
        <div className="grid grid-cols-1 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navList.map((item) => (
            <a
              href={item.title}
              key={item.title}
              className="text-gray-900 text-left font-normal hover:text-green-500 px-3 py-2  text-md border-b-2 select-none "
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default Menumobile;
