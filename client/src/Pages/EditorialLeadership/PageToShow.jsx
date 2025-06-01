import { Divider } from "antd";
import React from "react";

const PageToShow = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="max-w-5xl mx-auto bg-white">
        {/* Dr. Freddy */}
        <div className="mb-10 bg-slate-100 p-2 lg:p-5">
          <h3 className="text-2xl font-semibold text-[#F29E23]">Dr. Freddy</h3>
          <p className="mt-2">
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Specialization:</span>{" "}
            <em className="text-gray-700 text-sm">Strategic Management & Marketing</em>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Affiliation:</span>{" "}
            <em className="text-gray-700 text-sm">
              Department of Business, Kwik Kian Gie School of Business,
              Indonesia
            </em>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Email:</span>{" "}
            <a
              href="mailto:reddy.rangkuti@kwikkiangie.ac.id"
              className="text-blue-600 hover:underline"
            >
              reddy.rangkuti@kwikkiangie.ac.id
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Reviewer ID:</span>{" "}
            JPR-025
          </p>
        </div>

        {/* Dr. Suman Kalyan Nath */}
        <div className="bg-slate-100 p-2 lg:p-5">
          <h3 className="text-2xl font-semibold text-[#F29E23]">
            Dr. Suman Kalyan Nath
          </h3>
          <p className="mt-2">
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Specialization:</span>{" "}
            <em className="text-gray-700 text-sm">
              Medical Sciences & Clinical Pathology
            </em>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Affiliation:</span>{" "}
            <em className="text-gray-700 text-sm">
              Department of Medical Sciences, Department of Medical Laboratory
              Technology, Tripura Institute of Paramedical Sciences India
            </em>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Email:</span>{" "}
            <a
              href="mailto:sumankalyannath@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sumankalyannath@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-900 text-sm tracking-wider">Reviewer ID:</span>{" "}
            JPR-008
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageToShow;
