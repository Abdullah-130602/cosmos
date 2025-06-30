import React, { useEffect, useState } from "react";
import SideSection from "../../Layout/SideSection";
import Container from "../../Layout/Container";
import Banner from "../Home/Banner";
import { InboxOutlined } from "@ant-design/icons";
import { message, Spin, Upload } from "antd";
const { Dragger } = Upload;
import { useAuth } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { userToken } = useAuth();

  // Utils
  const [InputError, setInputError] = useState("");
  const [Load, setLoad] = useState("");

  const [file, setFile] = useState(null);

  const props = {
    name: "file",
    multiple: false,
    beforeUpload(file) {
      setFile(file); // Save to state
      return false; // Prevent automatic upload
    },
    onChange(info) {
      console.log("Selected file:", info.file);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [authors, setAuthors] = useState("");
  const [name, setName] = useState(userToken?.user?.name);
  const [affiliation, setAffiliation] = useState("");
  const [email, setEmail] = useState(userToken?.user?.email);
  const [altEmail, setAltEmail] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      Swal.fire({ text: "Manuscript title is required", icon: "error" });
    } else if (authors === "") {
      Swal.fire({ text: "Atleast one author name is required", icon: "error" });
    } else if (abstract === "" || abstract.length < 30) {
      Swal.fire({
        text: "Abstract should be at least 30 charachters long",
        icon: "error",
      });
    } else if (!file) {
      Swal.fire({ text: "Upload research paper document", icon: "error" });
      setLoad(false);
      return;
    } else if (name === "") {
      Swal.fire({ text: "Name is required", icon: "error" });
    } else if (affiliation === "") {
      Swal.fire({ text: "Enter your affiliation", icon: "error" });
    } else if (email === "") {
      Swal.fire({ text: "Enter your email", icon: "error" });
    } else if (!validateEmail(email)) {
      Swal.fire({ text: "Invalid email", icon: "error" });
    } else if (altEmail !== "" && !validateEmail(altEmail)) {
      Swal.fire({ text: "Invalid alternate email", icon: "error" });
    } else if (contact === "") {
      Swal.fire({ text: "Enter your contact number", icon: "error" });
    } else if (!validatePhone(contact)) {
      Swal.fire({
        text: "Contact number should be 10 digits only",
        icon: "error",
      });
    } else {
      setLoad(true);
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userToken.token}`);

      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("authors", authors);
      formdata.append("abstract", abstract);
      formdata.append("upload_file", file);
      formdata.append("corresponding_author", name);
      formdata.append("corresponding_author_affiliation", affiliation);
      formdata.append("corresponding_author_email", email);
      formdata.append("corresponding_author_alternate_email", altEmail);
      formdata.append("corresponding_author_mobile_no", contact);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `${import.meta.env.VITE_BASE_URL}api/articles/submit`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.message === "Article submitted successfully") {
            Swal.fire({
              title: "Done!",
              text: "Research paper submitted successfully!",
              icon: "success",
            });
            setLoad(false);
            setTitle("");
            setAffiliation("");
            setEmail("");
            setAltEmail("");
            setContact("");
            setAuthors("");
            setAbstract("");
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
    }
  };

  return (
    <>
      {/* {console.log(authors)} */}
      <Banner />
      <Container>
        <div className="flex flex-col lg:flex-row gap-2 mt-5">
          <div className="w-full lg:w-2/3 lg:pr-4">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#F29E23]">
              Submit Article
            </h1>
            <form action="">
              {/* Article Details */}
              <div className="bg-[#19467E] p-3 mt-5">
                <h1 className="text-white text-xl font-semibold tracking-wider">
                  Article Details :
                </h1>
              </div>
              <div className="space-y-3 my-5">
                {/* manuscript */}
                <div className="space-y-2">
                  <label htmlFor="manuscript" className="text-sm font-medium">
                    Manuscript Title<span className="text-red-500">*</span> :
                  </label>
                  <input
                    type="text"
                    name="manuscript"
                    id="manuscript"
                    placeholder="manuscript title..."
                    className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {/* authors_name */}
                <div className="space-y-2">
                  <label htmlFor="authors_name" className="text-sm font-medium">
                    Author(s) Names<span className="text-red-500">*</span> :
                  </label>
                  <input
                    type="text"
                    name="authors_name"
                    id="authors_name"
                    placeholder="author's name..."
                    className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}
                  />
                  <span className="text-xs text-gray-400 m-1">
                    Authors name should be comma (,) separated
                  </span>
                </div>
                {/* Abstract */}
                <div className="space-y-2">
                  <label htmlFor="abstract" className="text-sm font-medium">
                    Abstract<span className="text-red-500">*</span> :
                  </label>
                  <textarea
                    name="abstract"
                    id="abstract"
                    rows={3}
                    placeholder="abstract details..."
                    className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                  />
                </div>
                {/* Upload */}
                <div className="space-y-2">
                  <label htmlFor="abstract" className="text-sm font-medium">
                    Upload File<span className="text-red-500">*</span> :
                  </label>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      upload files on word file. (docs*)
                    </p>
                  </Dragger>
                </div>
              </div>
              {/* Corresponding Authors Detail: */}
              <div className="bg-[#19467E] p-3 mt-5">
                <h1 className="text-white text-xl font-semibold tracking-wider">
                  Corresponding Authors Detail :
                </h1>
              </div>
              <div className="space-y-3 my-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {/* name */}
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name<span className="text-red-500">*</span> :
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="enter your name..."
                      className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {/* affiliation */}
                  <div>
                    <label
                      htmlFor="affiliation"
                      className="text-sm font-medium"
                    >
                      Affiliation<span className="text-red-500">*</span> :
                    </label>
                    <input
                      type="text"
                      name="affiliation"
                      id="affiliation"
                      placeholder="enter affiliation..."
                      className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                      value={affiliation}
                      onChange={(e) => setAffiliation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-xs text-green-600">
                      We will inform you on above email address, when your
                      article is approved.
                    </span>
                  </div>
                  {/* Alternate Email */}
                  <div>
                    <label
                      htmlFor="alternate_email"
                      className="text-sm font-medium"
                    >
                      Alternate Email :
                    </label>
                    <input
                      type="email"
                      name="alternate_email"
                      id="alternate_email"
                      placeholder="abc@xyz.com"
                      className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                      value={altEmail}
                      onChange={(e) => setAltEmail(e.target.value)}
                    />
                  </div>
                </div>
                {/* Contact */}
                <div>
                  <label htmlFor="contact_no" className="text-sm font-medium">
                    Contact Number<span className="text-red-500">*</span> :
                  </label>
                  <input
                    type="number"
                    name="contact_no"
                    id="contact_no"
                    placeholder="12345-67890"
                    className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <button
                  className="bg-[#F29E23] p-2 w-full text-white font-semibold text-lg transition-all duration-500"
                  onClick={handleSubmit}
                >
                  {Load ? (
                    <Spin
                      indicator={<LoadingOutlined spin />}
                      className="text-white"
                    />
                  ) : (
                    "Submit Article"
                  )}
                </button>
              </div>
            </form>
          </div>
          <SideSection buttonColor={"#19467E"} />
        </div>
      </Container>
    </>
  );
};

export default index;
