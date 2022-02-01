import Image from "next/image";
import React from "react";
import headlessui, { Transition } from "@headlessui/react";

const Reviewcard = ({ img, ownerName, address, content, length, hidden }) => {
  return (
    <div
      className={` bg-pink-100 w-[96%] shadow-md lg:w-[90%] shrink-0 p-6  lg:p-16 lg:px-48 space-y-8  rounded-md m-auto select-none  transform transition ease-in-out duration-500  `}
    >
      {/* content */}
      <div className="text-center md:text-left  text-gray-600 tracking-wide">
        {content}
      </div>
      <div
        className="text-center flex flex-col items-center
        gap-6 lg:flex-row lg:justify-start "
      >
        <div className="relative h-20 w-20 lg:h-40 lg:w-40  ">
          <Image
            src={img}
            layout="fill"
            className="rounded-full lg:rounded-2xl"
            objectFit="cover"
            alt="review image"
          />
        </div>
        <div className="text-center lg:text-left flex flex-col justify-end px-6">
          {/*name  */}
          <h2 className="text-[#F72585] font-semibold">{ownerName}</h2>
          {/*address   */}
          <h2 className="text-gray-600 font-semibold">{address}</h2>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
