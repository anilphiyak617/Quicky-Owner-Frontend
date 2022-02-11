import React from "react";
import Socials from "../components/loginPage/Socials";
import Signupform from "../components/SignUpPage/SignupForm";
import LeftBanner from "../components/SignUpPage/LeftBanner";
import Link from "next/link";

const Signup = () => {
  // FIXME: make a cutom hook to handle routes

  return (
    <div className=" flex bg-pink-50">
      <div className="bg-white w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-coolGray-900 dark:text-coolGray-100  lg:shadow-2xl md:m-auto md:mt-8 lg:m-8 lg:ml-40 ">
        <Link href="/" passHref>
          <h1 className=" cursor-pointer p-2 bg-clip-text text-center lg:text-left bg-gradient-to-r from-[#F72585] via-[#7209B7] to-[#4361EE] text-transparent text-4xl lg:text-5xl font-semibold font-rancho tracking-wide">
            <a>Quicky</a>
          </h1>
        </Link>
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Get Started with Quicky
        </h2>
        <Signupform />
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-coolGray-700"></div>
          <p className="px-2 text-md text-gray-400">or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-coolGray-700"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            {/* google logo */}
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            {/* twitter logo */}
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-coolGray-400">
          Already have an account?
          <Link href="/login">
            <a className="underline font-bold dark:text-blue-600">
              &nbsp;Login
            </a>
          </Link>
        </p>
      </div>
      {/* left */}
      <LeftBanner />
    </div>
  );
};

export default Signup;
