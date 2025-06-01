import React from "react";
import Container from "../../Layout/Container";
import { TbPhoneCall } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";

const index = () => {
  return (
    <div className="default_animate">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.508302030563!2d73.8764073!3d18.5059184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040a0e98563%3A0x9dd3ef6ef8904dbd!2sAzam%20Campus!5e0!3m2!1sen!2sin!4v1748793063891!5m2!1sen!2sin"
        width={"100%"}
        height={250}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Container>
        <section className="py-2 ">
          <div className="mx-auto max-w-7xl px-0 sm:px-0 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white p-5 lg:p-4 border">
                <h2 className="text-[#19467E] font-manrope text-4xl font-semibold leading-10 mb-11">
                  Send Us A Message
                </h2>
                <input
                  type="text"
                  className="w-full h-10 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
                  placeholder="Phone"
                />
                <div className="mb-5">
                  <h4 className="text-gray-500 text-sm font-normal leading-7 mb-4">
                    Preferred method of communication
                  </h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex items-center cursor-pointer text-gray-500 text-sm font-normal leading-6"
                      >
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex items-center cursor-pointer text-gray-500 text-sm font-normal leading-6"
                      >
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                        Phone
                      </label>
                    </div>
                  </div>
                </div>
                <textarea
                  type="text"
                  className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-sm shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none p-2 rounded-2xl mb-5"
                  placeholder="Message"
                  rows={3}
                />
                <button className="w-full h-10 text-white text-sm font-semibold leading-6 rounded-full transition-all duration-700 bg-[#F29E23] shadow-sm">
                  Send
                </button>
              </div>
              <div className="space-y-5 lg:space-y-8">
                <div className="bg-[#205ba4] p-5 lg:p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-md h-10 w-10 flex justify-center items-center">
                      <TbPhoneCall size={20} className="text-gray-800" />
                    </div>
                    <h1 className="text-white capitalize text-xl font-medium">
                      Call us directly at :
                    </h1>
                  </div>
                  <h1 className="text-white text-3xl lg:text-4xl font-semibold mt-5">
                    +91 123-456-789
                  </h1>
                  <div className="mt-12">
                    <button className="bg-[#81aadc] p-2 w-full text-white font-semibold text-lg transition-all duration-500 hover:scale-105 ease-out">
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="bg-gray-200 p-5 lg:p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-md h-10 w-10 flex justify-center items-center">
                      <IoMailUnreadOutline size={20} className="text-gray-800" />
                    </div>
                    <h1 className="text-black capitalize text-xl font-medium">
                      chat with our team :
                    </h1>
                  </div>
                  <h1 className="text-black text-3xl lg:text-4xl font-semibold mt-5">
                    mail@cosmos.com
                  </h1>
                  <div className="mt-12">
                    <button className="bg-gray-400 p-2 w-full text-white font-semibold text-lg transition-all duration-500 hover:scale-105 ease-out">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default index;
