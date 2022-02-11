import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Loginform from "../components/loginPage/LoginForm";
import Socials from "../components/loginPage/Socials";
const Login = () => {
  const router = useRouter();
  const signUpHandler = () => {
    router.push("/signup");
  };
  const loginHandler = () => {
    // router.push("/signup");
    console.log("user signed in");
  };
  const homeRouteHandler = (e) => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Quicky</title>
      </Head>
      <div className="w-full h-[100vh] lg:bg-gradient-to-r from-pink-50 to-pink-200 flex  lg:justify-center">
        <div className="w-4/5 lg:w-3/4  flex  m-auto shadow-2xl rounded-2xl items-center max-w-4xl bg-white">
          <div className="w-full lg:w-3/5 flex-1 p-5">
            <h1
              onClick={homeRouteHandler}
              className=" cursor-pointer p-2 bg-clip-text text-center lg:text-left bg-gradient-to-r from-[#F72585] via-[#7209B7] to-[#4361EE] text-transparent text-4xl lg:text-5xl font-semibold font-rancho tracking-wide"
            >
              Quicky
            </h1>
            <h2 className="text-xl lg:text-3xl text-center text-pink-600 py-3 mb-2 font-bold">
              Sign in to Account
            </h2>
            <Socials />
            {/* socials */}
            <p className=" text-gray-400 text-center my-3">
              or <br />
              use your email account
            </p>
            <Loginform />
            {/* form */}
          </div>
          {/* left section */}
          <div className=" hidden lg:block w-2/5 bg-gradient-to-br from-pink-700  to-pink-400   py-36 px-6   rounded-br-2xl rounded-tr-2xl ">
            <div
              className="rounded-2xl p-4 border  bg-pink-500 bg-opacity-5 backdrop-blur-xl
             "
            >
              <h2 className="text-3xl text-center text-white py-3 mb-2 font-bold">
                Hello, Shopman
              </h2>
              <div className="border-2 bg-white boder-white mb-3  w-10 m-auto  "></div>
              <p className="text-white text-center">
                Be a part of the Quicky family and grow your business with us
              </p>
              <button
                className=" m-auto mt-10 md:block px-12 py-2 font-semibold  text-white  border-2 border-white hover:scale-105 
              transition-transform ease-out rounded-full shadow-sm lg:px-12 lg:py-2 text-lg  lg:font-normal"
                onClick={signUpHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
          {/* right */}
        </div>
      </div>
    </>
  );
};

export default Login;
