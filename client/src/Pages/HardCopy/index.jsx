import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import Container from "../../Layout/Container";
import { LoadingOutlined } from "@ant-design/icons";
import { ConfigProvider, Steps, theme, Divider, Spin } from "antd";
import { MdOutlineLibraryBooks } from "react-icons/md";
import SideSection from "../../Layout/SideSection";
import { useAuth } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { userToken } = useAuth();

  // Email Validator
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  // Utils
  const [Load, setLoad] = useState("");
  const [InputError, setInputError] = useState("");

  const [Manuscript, setManuscript] = useState("");
  const [Email, setEmail] = useState(userToken?.user?.email);
  const [Address, setAddress] = useState("");
  const [Area, setArea] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");

  const handleSubmit = () => {
    setLoad(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `"Bearer ${userToken.token}`);

    const raw = JSON.stringify({
      manuscript_no: Manuscript,
      email: Email,
      address: Address,
      area: Area,
      city: City,
      state: State,
      pincode: Pincode,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${import.meta.env.VITE_BASE_URL}api/hard-copy-request`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          Swal.fire({
            title: "Done!",
            text: "Your request for hardcopy has been sent!",
            icon: "success",
          });
          setAddress("");
          setManuscript("");
          setEmail("");
          setArea("");
          setState("");
          setCity("");
          setPincode("");
          setLoad(false);
          setCurrent(0);
        } else {
          setLoad(false);
          Swal.fire({
            title: "Failed!",
            text: "Something went wrong!",
            icon: "error",
          });
        }
      })
      .catch((error) => console.error(error));
  };

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
              value={Manuscript}
              onChange={(e) => setManuscript(e.target.value)}
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
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {InputError && (
            <p className="text-xs text-red-500 font-semibold m-2 default_animate">
              {InputError}
            </p>
          )}
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
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Area */}
            <div>
              <label htmlFor="area" className="text-sm font-medium">
                Area :
              </label>
              <input
                type="text"
                name="area"
                id="area"
                placeholder="Enter area..."
                className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                value={Area}
                onChange={(e) => setArea(e.target.value)}
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
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* State */}
            <div>
              <label htmlFor="state" className="text-sm font-medium">
                State :
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter state..."
                className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                value={State}
                onChange={(e) => setState(e.target.value)}
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
                value={Pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>
          {InputError && (
            <p className="text-xs text-red-500 font-semibold m-2 default_animate">
              {InputError}
            </p>
          )}
        </div>
      ),
    },
    {
      title: <p className="font-medium text-sm mt-1">Confirm Details</p>,
      content: (
        <div className="my-10 default_animate space-y-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <h1 className="text-sm font-medium">Manuscript ID:</h1>
            <p className="text-sm text-gray-400">{Manuscript}</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Email:</h1>
            <p className="text-sm text-gray-400">{Email}</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Address:</h1>
            <p className="text-sm text-gray-400">{Address}</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Area:</h1>
            <p className="text-sm text-gray-400">{Area ? Area : "N/A"}</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">City:</h1>
            <p className="text-sm text-gray-400">{City}</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">State:</h1>
            <p className="text-sm text-gray-400">{State ? State : "N/A"}</p>
          </div>
          <div>
            <h1 className="text-sm font-medium">Pincode:</h1>
            <p className="text-sm text-gray-400">{Pincode}</p>
          </div>
        </div>
      ),
    },
  ];

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
                    onClick={() => {
                      if (current === 0 && Manuscript === "") {
                        setInputError("Manuscript No. is required");
                      } else if (current === 0 && Email === "") {
                        setInputError("Email is required");
                      } else if (current === 0 && !validateEmail(Email)) {
                        setInputError("Invalid email address");
                      } else if (current === 1 && Address === "") {
                        setInputError("Enter your address");
                      } else if (current === 1 && City === "") {
                        setInputError("Enter your city");
                      } else if (current === 1 && Pincode === "") {
                        setInputError("Enter your pincode");
                      } else {
                        setInputError("");
                        next();
                      }
                    }}
                  >
                    Next
                  </button>
                )}
                {current === steps.length - 1 && (
                  <button
                    className="bg-[#F29E23] p-2 px-8 text-white font-semibold text-sm transition-all duration-500 hover:scale-105 ease-out"
                    onClick={handleSubmit}
                  >
                    {Load ? (
                      <Spin
                        indicator={<LoadingOutlined spin />}
                        className="text-white"
                      />
                    ) : (
                      "Done"
                    )}
                  </button>
                )}
              </div>
            </ConfigProvider>
          </div>
          <SideSection buttonColor={"#19467E"} />
        </div>
      </Container>
    </div>
  );
};

export default index;
