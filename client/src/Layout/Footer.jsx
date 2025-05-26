import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2"
          >
            <img
              src={Logo}
              className="w-20"
              alt="Flowbite Logo"
            />
            <span className="self-center hidden md:block md:text-2xl text-[#19467E] font-semibold whitespace-nowrap">
              COSMOS
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 space-x-5">
            <li className="list-disc">
              <Link to="/" className="hover:underline me-4 md:me-6">
                About the journal
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/" className="hover:underline me-4 md:me-6">
                Policies of journal
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <a href="https://cosmos.com/" className="hover:underline">
            cosmos™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
