import React from "react";
import SideSection from "../../Layout/SideSection";
import Container from "../../Layout/Container";
import Banner from "../Home/Banner";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const index = () => {
  const props = {
    name: "file",
    multiple: false,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
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
                  />
                </div>
                {/* authors_name */}
                <div className="space-y-2">
                  <label htmlFor="authors_name" className="text-sm font-medium">
                    Author(s) Name<span className="text-red-500">*</span> :
                  </label>
                  <input
                    type="text"
                    name="authors_name"
                    id="authors_name"
                    placeholder="author's name..."
                    className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
                  />
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
                      Alternate Email<span className="text-red-500">*</span> :
                    </label>
                    <input
                      type="email"
                      name="alternate_email"
                      id="alternate_email"
                      placeholder="abc@xyz.com"
                      className="text-sm p-2.5 font-medium bg-slate-50 text-gray-800 outline-none border w-full"
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
                  />
                </div>
                <button className="bg-[#F29E23] p-2 w-full text-white font-semibold text-lg transition-all duration-500 hover:scale-105 ease-out">
                  Submit Article
                </button>
              </div>
            </form>
          </div>
          <SideSection />
        </div>
      </Container>
    </>
  );
};

export default index;
