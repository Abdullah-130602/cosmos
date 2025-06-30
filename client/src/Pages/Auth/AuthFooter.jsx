import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const AuthFooter = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 border-t">
      <Link to="/" className="flex items-end space-x-2">
        <img src={Logo} className="w-20" alt="Flowbite Logo" />
        <span
          className="self-center hidden md:block md:text-2xl font-semibold whitespace-nowrap text-[#
            ]"
        >
          COSMOS
        </span>
      </Link>
      <span className="block text-sm text-gray-500 sm:text-center">
        © 2025{" "}
        <a href="https://cosmos.com/" className="hover:underline">
          cosmos™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default AuthFooter;
