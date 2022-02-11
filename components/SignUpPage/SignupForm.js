import React from "react";

import { useForm } from "react-hook-form";
const Signupform = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("error:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmit(onSubmit))}
      className="space-y-6 "
    >
      <div className="space-y-1 text-sm">
        <label htmlFor="firstName" className="block dark:text-coolGray-400">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          className={`w-full px-4 py-3 rounded-md border-2 ${
            !errors.firstName && "outline-[#4CC9F0]"
          }  ${errors.firstName && "outline-pink-500"}`}
          {...register("firstName", {
            required: "First Name is required",
          })}
        ></input>
        {errors.firstName && (
          <p className="before:content-['⚠'] block text-red-600 text-sm font-normal">
            &nbsp;{errors.firstName.message}
          </p>
        )}
      </div>
      {/* firstname */}
      <div className="space-y-1 text-sm">
        <label htmlFor="lastname" className="block dark:text-coolGray-400">
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last name"
          className={`w-full px-4 py-3 rounded-md border-2 outline-[#4CC9F0] `}
          {...register("lastName")}
        />
      </div>
      {/* lastname */}
      <div className="space-y-1 text-sm">
        <label htmlFor="email" className="block dark:text-coolGray-400">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`w-full px-4 py-3 rounded-md border-2 ${
            !errors.email && "outline-[#4CC9F0]"
          }  ${errors.email && "outline-pink-500"}`}
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="before:content-['⚠'] block text-red-600 text-sm font-normal">
            &nbsp;{errors.email.message}
          </p>
        )}
      </div>
      {/* email */}
      <div className="space-y-1 text-sm">
        <label htmlFor="password" className="block dark:text-coolGray-400">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={`w-full px-4 py-3 rounded-md border-2 ${
            !errors.password && "outline-[#4CC9F0]"
          }  ${errors.password && "outline-pink-500"}`}
          {...register("password", {
            required: "password is required",
            pattern: {
              value: new RegExp(
                "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
              ),
              message:
                "Must be 8 characters or more and contains a combination of uppercase and lowercase letter and number.",
            },
          })}
        />
        {errors.password && (
          <p
            className={`before:content-['⚠'] block text-red-600 text-sm font-normal`}
          >
            &nbsp;{errors.password.message}
          </p>
        )}
      </div>
      {/*password  */}
      <button className="block w-full p-3 text-center  bg-pink-500 rounded-3xl text-white font-semibold hover:bg-pink-600">
        Sign Up
      </button>
    </form>
  );
};

export default Signupform;
