import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useLayout } from "../../Context/LayoutContext";
import { GiHamburgerMenu } from "react-icons/gi";
import SideDrawer from "./SideDrawer";
import { useAuth } from "../../Context/AuthContext";
import { FaUser } from "react-icons/fa";
import { ConfigProvider, Dropdown } from "antd";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  let { currentUrl } = useLayout();
  const navigate = useNavigate();

  const userData =
    localStorage?.getItem("token") &&
    JSON.parse(localStorage?.getItem("token"));
  const { isLogin, logout } = useAuth();

  // Drawer
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "4",
      danger: true,
      label: (
        <button
          className="font-medium flex items-center gap-1"
          onClick={logout}
        >
          <MdLogout />
          Logout
        </button>
      ),
    },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 px-3 xl:px-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-0">
          <Link to="/" className="flex items-end space-x-2">
            <img src={Logo} className="w-20" alt="Flowbite Logo" />
            <span
              className="self-center hidden md:block md:text-2xl font-semibold whitespace-nowrap text-[#
            ]"
            >
              COSMOS
            </span>
          </Link>
          <div
            className="flex items-center space-x-6 mr-3
          "
          >
            <div className="hidden lg:block">
              <Link
                to="tel:5541251234"
                className="text-sm  text-gray-500 hover:underline"
              >
                (+91) 12345 67890
              </Link>
            </div>
            {isLogin === true ? (
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {
                      zIndexPopup: 99999,
                    },
                  },
                }}
              >
                <Dropdown menu={{ items }} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#F29E23] w-10 h-10 flex justify-center items-center rounded-full">
                      <p className="text-2xl font-semibold text-white">
                        {userData?.user?.name?.slice(0, 1)}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-xs font-medium">
                        {userData?.user?.name}
                      </h1>
                      <div className="flex items-center gap-1">
                        <FaUser size={12} className="text-gray-400" />
                        <p className="text-xs text-gray-400">
                          {userData?.user?.user_type}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dropdown>
              </ConfigProvider>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-semibold bg-[#F29E23] py-2 px-4 text-white hover:scale-105"
              >
                Login
              </button>
            )}
            <button
              onClick={open === true ? onClose : showDrawer}
              className="block lg:hidden"
            >
              <GiHamburgerMenu size={40} />
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-[#19467E] hidden lg:block">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-14 text-sm">
              <Link
                to="/"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/editorial-leadership"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/editorial-leadership" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Editorial Leadership
              </Link>
              <Link
                to="/submit-article"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/submit-article" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Submit Article
              </Link>
              <Link
                to="/issues"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/issues" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Issues
              </Link>
              {/* <Link
                to="/downloads"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/downloads" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Downloads
              </Link> */}
              <Link
                to="/apply-hardcopy"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/apply-hardcopy" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Apply hardcopy
              </Link>
              <Link
                to="/about-journal"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/about-journal" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                About the journal
              </Link>
              <Link
                to="/policies-of-journal"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/policies-of-journal" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Policies of journal
              </Link>
              <Link
                to="/contact-us"
                className={`text-gray-900 hover:bg-[#F29E23] ${
                  currentUrl === "/contact-us" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <SideDrawer
        onClose={onClose}
        currentUrl={currentUrl}
        open={open}
        navigate={navigate}
      />
    </>
  );
};

export default Navbar;
