import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center  gap-x-2">
      <a className="p-2 cursor-pointer border-2 rounded-full shadow-md">
        <FaFacebookF className="text-md" />
      </a>
      <a className="p-2 cursor-pointer border-2 rounded-full shadow-md">
        <FaGoogle className="text-md" />
      </a>
      <a className="p-2  cursor-pointer border-2 rounded-full shadow-md">
        <FaTwitter className="text-md" />
      </a>
    </div>
  );
};

export default Socials;
