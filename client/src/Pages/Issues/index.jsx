import React from "react";
import Container from "../../Layout/Container";
import SideSection from "../../Layout/SideSection";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { FaCalendar, FaDownload, FaUserPen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const index = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-2 mt-5">
        <div className="w-full lg:w-2/3 lg:pr-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Current Issue
            </h1>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-xl text-[#19467E]" />
              <h1 className="text-xl lg:text-2xl text-[#19467E]">
                January 2025
              </h1>
            </div>
          </div>
          {/* <Divider /> */}
          <div>
            {[1, 2, 3, 4, 5].map((el, i) => {
              return (
                <div className="my-10" key={i}>
                  <div className="space-y-5">
                    <div className="flex flex-col lg:flex-row gap-2">
                      {/* First Section */}
                      <div className="w-full lg:w-[80%] lg:mr-4">
                        {/* Head */}
                        <Link to="">
                          <p className="text-base text-justify text-[#19467E] hover:underline font-medium">
                            The effect of localised vibration on hamstring and
                            quadriceps muscle in young adults to overcome
                            tightness.
                          </p>
                        </Link>
                        {/* Authors */}
                        <div className="mt-3">
                          <div className="flex items-center gap-1">
                            <FaUserPen
                              className="text-gray-700 text-xs"
                              size={14}
                            />
                            <p className="text-gray-700 text-xs font-medium">
                              John Doe, Alex Jhonson, William Parker
                            </p>
                          </div>
                        </div>
                        {/* Viewed/Downloads */}
                        <div className="flex items-center w-full mt-5">
                          <div className="w-1/2 text-gray-600 flex items-center gap-1">
                            <FaEye />
                            <span>715</span>
                          </div>
                          <div className="w-1/2 text-gray-600 flex items-center gap-1">
                            <FaDownload />
                            <p>431</p>
                          </div>
                        </div>
                      </div>
                      {/* Second Section */}
                      <div className="flex justify-center items-center lg:border-l w-full lg:w-[20%]">
                        {/* Buttons */}
                        <div className="flex flex-col gap-2">
                          <button className="bg-[#F29E23] p-3 w-full lg:w-auto text-white font-medium text-xs transition-all duration-500 hover:scale-105 ease-out">
                            Download PDF
                          </button>
                          <button className="bg-[#19467E] p-3 w-full lg:w-auto text-white font-medium text-xs transition-all duration-500 hover:scale-105 ease-out">
                            View Abstract
                          </button>
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <SideSection />
      </div>
    </Container>
  );
};

export default index;
