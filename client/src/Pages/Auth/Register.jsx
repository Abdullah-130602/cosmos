import { Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAuth } from "../../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [otpVerification, setOtpVerification] = useState(false);

  const [InputError, setInputError] = useState(false);
  const [Load, setLoad] = useState(false);

  // Register API
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

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

  const handleRegister = () => {
    setInputError("");
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
    } else {
      setLoad(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: name,
        email: email,
        mobile_no: contact,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${import.meta.env.VITE_BASE_URL}api/register`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === "success") {
            setLoad(false);
            setOtpVerification(true);
          } else if (result.status === 404) {
            setLoad(false);
            setInputError(result?.messages?.error);
          } else if (result.status === 400) {
            setInputError(result?.messages?.email);
            setLoad(false);
          } else {
            setLoad(false);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  // Verify OTP
  const [otp, setOtp] = useState("");
  const handleVerify = () => {
    if (otp === "") {
      setInputError("otp is required");
    } else {
      setLoad(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
        otp: otp,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${import.meta.env.VITE_BASE_URL}api/verify-otp`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === "success") {
            login(result.data, navigate);
            setLoad(false);
          } else if (result.status === 400) {
            setLoad(false);
            setInputError(result?.messages?.error);
          } else {
            setLoad(false);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="h-[calc(100vh-10vh)] flex justify-center items-center relative">
      {otpVerification === false ? (
        <div className="mt-12 flex flex-col items-center default_animate">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button className="w-full max-w-xs font-bold shadow-sm  py-3 bg-[#F29E23]/20 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4">Sign Up with Google</span>
              </button>
            </div>
            <div className="my-6 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div>
            <div className="mx-auto max-w-xs">
              <input
                className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full px-8 py-4  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="number"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              {InputError && (
                <p className="text-xs text-red-500 font-semibold m-2 default_animate">
                  {InputError}
                </p>
              )}
              <button
                className="mt-5 tracking-wide font-semibold bg-[#F29E23] text-gray-100 w-full py-4  transition-all duration-300 hover:scale-105 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
                onClick={handleRegister}
                disabled={Load}
              >
                {Load ? (
                  <Spin
                    indicator={<LoadingOutlined spin />}
                    className="text-white"
                  />
                ) : (
                  <>
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </>
                )}
              </button>
              <Link
                to="/login"
                className="text-blue-500 underline text-xs w-full"
              >
                <p className="text-center mt-3">
                  Already have an account? login
                </p>
              </Link>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>
                and its
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center default_animate">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Verify OTP</h1>
          <div className="w-full flex-1 mt-8">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="number"
              placeholder="enter otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <span className="text-gray-400 m-2 text-xs font-semibold">
              To continue, enter the verification code sent to: {email}
            </span>
            {InputError && (
              <p className="text-xs text-red-500 font-semibold m-2 default_animate">
                {InputError}
              </p>
            )}
            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-[#F29E23] text-gray-100 w-full py-4 rounded-lg transition-all duration-300 hover:scale-105 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
              onClick={handleVerify}
              disabled={Load}
            >
              {Load ? (
                <Spin
                  indicator={<LoadingOutlined spin />}
                  className="text-white"
                />
              ) : (
                <>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Verify OTP</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
      <div className="absolute top-10 left-10">
        <button
          onClick={() => navigate(-1)}
          className="font-semibold flex gap-2 items-center"
        >
          <IoMdArrowRoundBack size={20} />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Register;
