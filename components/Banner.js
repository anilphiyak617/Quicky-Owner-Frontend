import Image from "next/image";
import React from "react";
import CartImage from "../public/svgs/cart-image.svg";
import BannerImage from "../public/svgs/banner.svg";
// import Button from "./Button";
const Banner = () => {
  return (
    <div className="p-6  pt-12 align-center grid grid-cols-1 lg:grid-cols-2   ">
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
          <span className="bg-clip-text bg-gradient-to-r from-[#F72585] via-[#7209B7] to-[#4361EE] text-transparent">
            Quicky
          </span>
        </h1>
        <h3 className="text-xl text-center lg:text-left text-[#ee5c9e] font-normal ">
          Enhance your customer experience for free!
        </h3>
        <div className="flex flex-col lg:flex-row py-6 items-center space-y-2 lg:space-y-0 lg:space-x-3">
          <button className="  text-lg text-white py-2 px-16 xl:px-10 bg-[#7209B7] hover:bg-[#3A0CA3] shadow-md rounded-3xl">
            Get your Shop on Quicky
          </button>
          <button className="  text-lg text-[#3A0CA3] border border-[#3A0CA3]  py-2 px-14 xl:px-8 shadow-md rounded-3xl">
            Already a part? Login now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
