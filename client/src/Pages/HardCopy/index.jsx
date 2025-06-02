import React, { useState } from "react";
import Banner from "../Home/Banner";
import Container from "../../Layout/Container";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Button, message, Steps, theme, Divider } from "antd";
import { MdOutlineLibraryBooks } from "react-icons/md";
import SideSection from "../../Layout/SideSection";

const index = () => {
  const steps = [
    {
      title: <p className="font-medium text-sm mt-1">Article Details</p>,
      icon: <MdOutlineLibraryBooks />,
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-10 default_animate">
          {/* Manuscript */}
          <div>
            <label htmlFor="Manuscript" className="text-sm font-medium">
              Manuscript No<span className="text-red-500">*</span> :
            </label>
            <input
              type="text"
              name="Manuscript"
              id="Manuscript"
              placeholder="Enter Manuscript No."
              className="text-sm p-2.5 font-medium bg-slate-50 text-gray-400 outline-none border w-full"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email<span className="text-red-500">*</span> :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@xyz.com"
              className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: <p className="font-medium text-sm mt-1">Shipping Details</p>,
      content: (
        <div className="my-10 default_animate space-y-5">
          {/* Address */}
          <div>
            <label htmlFor="address" className="text-sm font-medium">
              Address<span className="text-red-500">*</span> :
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="enter address..."
              className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Area */}
            <div>
              <label htmlFor="area" className="text-sm font-medium">
                Area<span className="text-red-500">*</span> :
              </label>
              <input
                type="text"
                name="area"
                id="area"
                placeholder="Enter area..."
                className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
              />
            </div>
            {/* City */}
            <div>
              <label htmlFor="city" className="text-sm font-medium">
                City<span className="text-red-500">*</span> :
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="enter city name..."
                className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* State */}
            <div>
              <label htmlFor="state" className="text-sm font-medium">
                State<span className="text-red-500">*</span> :
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter state..."
                className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
              />
            </div>
            {/* Pincode */}
            <div>
              <label htmlFor="pincode" className="text-sm font-medium">
                Pincode<span className="text-red-500">*</span> :
              </label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                placeholder="enter pincode..."
                className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <p className="font-medium text-sm mt-1">Confirm Details</p>,
      content: (
        <div className="my-10 default_animate space-y-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <h1 className="text-sm font-medium">Manuscript ID:</h1>
            <p className="text-sm text-gray-400">COS-541</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Email:</h1>
            <p className="text-sm text-gray-400">abd@yahoo.com</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Address:</h1>
            <p className="text-sm text-gray-400">
              Lane 42, Near ABC Chowk, Hill Garden
            </p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Area:</h1>
            <p className="text-sm text-gray-400">Near Downtown Hall</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">City:</h1>
            <p className="text-sm text-gray-400">Leicester City</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">State:</h1>
            <p className="text-sm text-gray-400">London</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Pincode:</h1>
            <p className="text-sm text-gray-400">415605</p>
          </div>
        </div>
      ),
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div>
      <Banner />
      <Container>
        <div className="flex flex-col lg:flex-row gap-2 mt-5">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#19467E",
                },
              }}
            >
              <Steps current={current} items={items} />
              <Divider />
              <div>{steps[current].content}</div>
              <div className="flex justify-end gap-2">
                {current > 0 && (
                  <button
                    className="bg-gray-400 p-2 px-8 text-white font-semibold text-sm transition-all duration-500 hover:scale-105 ease-out"
                    onClick={() => prev()}
                  >
                    Previous
                  </button>
                )}
                {current < steps.length - 1 && (
                  <button
                    className="bg-[#F29E23] p-2 px-8 text-white font-semibold text-sm transition-all duration-500 hover:scale-105 ease-out"
                    onClick={() => next()}
                  >
                    Next
                  </button>
                )}
                {current === steps.length - 1 && (
                  <button
                    className="bg-[#F29E23] p-2 px-8 text-white font-semibold text-sm transition-all duration-500 hover:scale-105 ease-out"
                    onClick={() => message.success("Processing complete!")}
                  >
                    Done
                  </button>
                )}
              </div>
            </ConfigProvider>
          </div>
          <SideSection />
        </div>
      </Container>
    </div>
  );
};

export default index;
