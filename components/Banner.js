import React from "react";
import BannerImage from "../public/svgs/banner.svg";
import Image from "next/image";
// import Button from "./Button";
const Banner = () => {
  return (
    <div className="p-6  pt-14 align-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 bg-pink-50">
      {/* left */}
      <div className="transform flex  lg:order-1">
        {/* <div> */}
        <BannerImage className="h-64 m-auto w-64 lg:h-[70vh] lg:w-[50vw] fill-[#3A0CA3]" />
        {/* </div> */}
        {/* <CartImage className="h-72 w- lg:h-[70vh] lg:w-[50vw] " /> */}
      </div>

      {/* right  */}
      <div className="flex flex-col lg:pl-10   m-auto space-y-3 ">
        <h1 className="text-3xl text-center lg:text-6xl lg:text-left  lg:w-2/3 lg:leading-tight text-[#F72585] font-sans font-bold lg:font-bold">
          Register your Shop on{" "}
          <span className="bg-clip-text  bg-gradient-to-r from-[#F72585] via-[#7209B7] to-[#4361EE] text-transparent font-rancho lg:text-7xl tracking-wider">
            Quicky
          </span>
        </h1>
        <h3 className="text-lg lg:text-xl text-center lg:text-left text-[#ee5c9e] font-normal ">
          Enhance your customer experience for free!
        </h3>
        <div className="flex flex-col lg:flex-row py-6 items-center space-y-2 lg:space-y-0 lg:space-x-3">
          <button className="  text-lg text-white py-2 w-[100%] xl:px-10 bg-[#7209B7] hover:bg-[#3A0CA3] shadow-sm rounded-3xl">
            Get your Shop on Quicky
          </button>
          <button className="  text-lg text-[#3A0CA3] border border-[#3A0CA3] w-[100%]  py-2  xl:px-8 shadow-sm rounded-3xl">
            Already a part? Login now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
