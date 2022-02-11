import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function leftBanner() {
  return (
    <div className=" hidden relative lg:flex items-center  w-full bg-pink-100  ">
      <div className="absolute p-6 px-14 top-0 w-full flex justify-end">
        <Link href="/login" passHref>
          <button className="p-2 px-10 text-center  text-pink-500 font-semibold border  border-pink-500 rounded-3xl hover:bg-pink-500 hover:text-white hover:border-0    transition ease-in cursor-pointer z-10">
            <a>Login</a>
          </button>
        </Link>
      </div>
      <div className="relative  w-full h-[90%] ">
        <Image
          src="/../public/svgs/signupPageBanner.svg"
          layout="fill"
          objectFit="cover"
          alt="BannerImage"
        />
      </div>
      <div className="absolute px-12 py-10 w-[70%] flex flex-col justify-center left-1/2 top-1/3 -translate-x-1/2  -translate-y-1/2  border-2  rounded-2xl bg-white bg-opacity-50 bg-clip-padding backdrop-blur-sm">
        <h1 className="cursor-pointer p-2  text-6xl font-rancho   font-bold ">
          Welcome to the
          <span className="text-pink-600"> &nbsp;Family</span>
        </h1>
        <p className="mt-8 select-none text-left text-gray-800 font-semibold ">
          Did you know that the presence of peoples faces in interfaces Property
          — Irelands new real estate platform that Ive
        </p>
      </div>
    </div>
  );
}
