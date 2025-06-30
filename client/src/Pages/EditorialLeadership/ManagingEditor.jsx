import { Divider } from "antd";
import React from "react";

const ManagingEditor = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="max-w-5xl mx-auto bg-white">
        {/* Dr. Freddy */}
        <div className="mb-10 bg-slate-100 p-2 lg:p-5">
          <h3 className="text-2xl font-semibold text-[#F29E23]">
            Ms. Naziya Maldar
          </h3>
          <p className="mt-2">
            <span className="font-semibold text-gray-900 text-sm tracking-wider">
              Position:
            </span>{" "}
            <em className="text-gray-700 text-sm">Assistant Professor Department of Commerce</em>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">
              Affiliation:
            </span>{" "}
            <em className="text-gray-700 text-sm">
              Abeda Inamdar Senior College (Autonomous), Pune
            </em>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">
              Email:
            </span>{" "}
            <a
              href="mailto:reddy.rangkuti@kwikkiangie.ac.id"
              className="text-blue-600 hover:underline"
            >
              reddy.rangkuti@kwikkiangie.ac.id
            </a>
          </p>
          {/* <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">
              Reviewer ID:
            </span>{" "}
            JPR-025
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ManagingEditor;
