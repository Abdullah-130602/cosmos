import React from "react";
import { Drawer } from "antd";

const SideDrawer = ({ onClose, currentUrl, open, navigate }) => {
  return (
    <Drawer
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={onClose}
      open={open}
    >
      <ul className="flex flex-col gap-2 text-sm my-5">
        <button
          onClick={() => {
            navigate("/");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/editorial-leadership");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/editorial-leadership" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Editorial Leadership
        </button>
        <button
          onClick={() => {
            navigate("/submit-article");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/submit-article" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Submit Article
        </button>
        <button
          onClick={() => {
            navigate("/issues");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/issues" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Issues
        </button>
        {/* <Link
                to="/downloads"
                className={`text-gray-900 ${
                  currentUrl === "/downloads" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Downloads
              </Link> */}
        <button
          onClick={() => {
            navigate("/apply-hardcopy");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/apply-hardcopy" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Apply hardcopy
        </button>
        <button
          onClick={() => {
            navigate("/about-journal");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/about-journal" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          About the journal
        </button>
        <button
          onClick={() => {
            navigate("/policies-of-journal");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/policies-of-journal" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Policies of journal
        </button>
        <button
          onClick={() => {
            navigate("/contact-us");
            onClose();
          }}
          className={`text-gray-900 ${
            currentUrl === "/contact-us" && "bg-[#F29E23] text-white"
          } py-2 px-2`}
        >
          Contact Us
        </button>
      </ul>
    </Drawer>
  );
};

export default SideDrawer;
