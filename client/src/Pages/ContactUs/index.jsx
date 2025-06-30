import React, { useState } from "react";
import Container from "../../Layout/Container";
import { TbPhoneCall } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import successLottie from "../../assets/Lottie/success.json";
import Lottie from "react-lottie";

const index = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [query, setQuery] = useState("");

  // utils
  const [InputError, setInputError] = useState("");
  const [Load, setLoad] = useState(false);
  const [showLottie, setshowLottie] = useState(false);

  // Email Validator
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Contact Validator
  const validatePhone = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const success = () => {
    setshowLottie(true);
  };
  const failed = () => {};

  const handleSubmit = () => {
    setInputError(false);
    if (name === "") {
      setInputError("name is required");
    } else if (email === "") {
      setInputError("email is required");
    } else if (!validateEmail(email)) {
      setInputError("Invalid email address");
    } else if (contact === "") {
      setInputError("contact number is required");
    } else if (!validatePhone(contact)) {
      setInputError("Contact number must be exactly 10 digits");
    } else if (query === "") {
      setInputError("Write your message...");
    } else {
      setLoad(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: name,
        email: email,
        mobile_no: contact,
        message: query,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `${import.meta.env.VITE_BASE_URL}api/contact-enquiry`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === "success") {
            setLoad(false);
            success();
            setName("");
            setEmail("");
            setContact("");
            setQuery("");
          } else {
            setLoad(false);
            failed();
          }
        })
        .catch((error) => console.error(error));
    }
  };

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
            {showLottie === false ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 default_animate">
                <div className="bg-white p-5 lg:p-4 border">
                  <h2 className="text-[#19467E] font-manrope text-4xl font-semibold leading-10 mb-11">
                    Send Us A Message
                  </h2>
                  <input
                    type="text"
                    className="w-full h-10 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-sm font-normal leading-7  border border-gray-200 focus:outline-none pl-4 mb-5"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm font-normal leading-7  border border-gray-200 focus:outline-none pl-4 mb-5"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm font-normal leading-7  border border-gray-200 focus:outline-none pl-4 mb-5"
                    placeholder="Phone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <textarea
                    type="text"
                    className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-sm shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none p-2 mb-5"
                    placeholder="Message"
                    rows={3}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {InputError && (
                    <p className="text-xs text-red-500 font-semibold mx-2 mb-2 default_animate">
                      {InputError}
                    </p>
                  )}
                  <button
                    className="w-full h-10 text-white text-sm font-semibold leading-6  transition-all duration-700 bg-[#F29E23] shadow-sm"
                    onClick={handleSubmit}
                  >
                    {Load ? (
                      <Spin
                        indicator={<LoadingOutlined spin />}
                        className="text-white"
                      />
                    ) : (
                      "Send"
                    )}
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
                        <IoMailUnreadOutline
                          size={20}
                          className="text-gray-800"
                        />
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
            ) : (
              <div className="space-y-5">
                <Lottie options={defaultOptions} height={400} width={400} />
                <div className="flex justify-center">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500">
                      We've sent your message to our team, we'll back to you
                      shortly.
                    </p>
                    <div className="flex justify-center">
                      <button
                        className="w-full h-10 text-white text-sm font-semibold leading-6  transition-all duration-700 bg-[#F29E23] shadow-sm"
                        onClick={() => setshowLottie(false)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default index;
