import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Link from "next/link";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch("http://localhost:5000/login", {
      ...options,
    }).then((res) => res.json());
    console.log(response);
  };
  // fetching login Data handler
  // FIXME: This is testing code

  return (
    <>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="lex flex-col gap-10 w-full lg:w-4/5 m-auto ">
          <div
            className={`flex  border-2 rounded-md  items-center mt-4  ${
              errors.email && "border-red-400"
            } `}
          >
            <FaRegEnvelope className="mx-2" />
            <input
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  message: "Enter a valid email",
                },
              })}
              type="text"
              name="email"
              placeholder="Email"
              className="lowercase p-3 text-gray-600 bg-transparent flex-1 outline-none text"
            ></input>
          </div>
          {errors.email && (
            <p className="before:content-['⚠'] block text-red-600 text-sm font-normal">
              &nbsp;{errors.email.message}
            </p>
          )}
          {/* email input */}
          <div
            className={`flex w-full    border-2 focus:border-pink-600  rounded-md   items-center mt-4 ${
              errors.password && "border-red-400"
            } `}
          >
            <MdLockOutline className="mx-2" />
            <input
              {...register("password", {
                required: { value: true, message: "password is required" },
              })}
              type="password"
              name="password"
              placeholder="password"
              className=" p-3 text-gray-600 bg-transparent flex-1 outline-none select-none"
            ></input>
          </div>
          {errors.password && (
            <p className="before:content-['⚠'] block text-red-600 text-sm font-normal">
              &nbsp;{errors.password.message}
            </p>
          )}
        </div>
        {/* password  input section */}

        {/* //second section */}

        {/* <div className=" flex 0 lg:w-1/2 m-auto mt-3">
          <label className="flex flex-1 items-center  text-md lg:text-sm font-normal">
            <input
              type="checkbox"
              name="remember"
              className="mr-1 cursor-pointer"
            ></input>
            Remember me
          </label>
          <a href="#" className="text-md text-blue-600 lg:text-sm font-normal">
            Forgot Password?
          </a>
        </div> */}
        {/* forgot password */}
        <div className="flex mt-6 align justify-center">
          <button
            className="lg:mt-10 px-12 py-2 font-semibold  text-white  border-2 bg-pink-500 hover:bg-pink-600 transition ease-in rounded-full shadow-sm lg:px-12 lg:py-2 text-lg  lg:font-normal"
            type="submit"
          >
            Sign In
          </button>
        </div>
        {/* signin btn */}
      </form>
      <Link href={"/signup"} passHref className="lg:hidden">
        <h3 className="cursor-pointer mt-4 w-1/3 m-auto  text-lg font-semibold  text-center text-pink-600 border-b-2 border-pink-300 hover:text-pink-400 ">
          Create a Account
        </h3>
      </Link>
    </>
  );
};
export default Loginform;
