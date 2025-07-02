import React from "react";
import { ConfigProvider, Drawer, Menu } from "antd";

const SideDrawer = ({ onClose, currentUrl, open, navigate }) => {
  const items = [
    {
      key: "1",
      label: "Issues",
      // icon: <AppstoreOutlined />,
      children: [
        {
          key: "5",
          label: (
            <button
              onClick={() => {
                navigate("/current-issues");
                onClose();
              }}
            >
              Current Issues
            </button>
          ),
        },
        {
          key: "6",
          label: (
            <button
              onClick={() => {
                navigate("/archives");
                onClose();
              }}
            >
              Archives
            </button>
          ),
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Drawer
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={onClose}
      open={open}
    >
      <ul className="flex flex-col gap-2 text-sm my-5">
        <div className="flex justify-start">
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
        </div>
        <div className="flex justify-start">
          <button
            onClick={() => {
              navigate("/editorial-leadership");
              onClose();
            }}
            className={`text-gray-900 ${
              currentUrl === "/editorial-leadership" &&
              "bg-[#F29E23] text-white"
            } py-2 px-2`}
          >
            Editorial Leadership
          </button>
        </div>
        <div className="flex justify-start">
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
        </div>
        <div className="flex justify-start -mx-4">
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemMarginBlock: 0,
                  itemMarginInline: 0,
                },
              },
            }}
          >
            <Menu
              onClick={onClick}
              // style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </ConfigProvider>
        </div>
        {/* <Link
                to="/downloads"
                className={`text-gray-900 ${
                  currentUrl === "/downloads" && "bg-[#F29E23]"
                } py-2 px-2 text-white`}
              >
                Downloads
              </Link> */}
        <div className="flex justify-start">
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
        </div>
        <div className="flex justify-start">
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
        </div>
        <div className="flex justify-start">
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
        </div>
        <div className="flex justify-start">
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
        </div>
      </ul>
    </Drawer>
  );
};

export default SideDrawer;
