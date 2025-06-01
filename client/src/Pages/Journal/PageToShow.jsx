import { Divider } from "antd";
import React from "react";

const PageToShow = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="max-w-5xl mx-auto text-sm text-justify bg-white space-y-3">
        <p className="">
          <span className="text-[#F29E23] font-semibold">COSMOS</span> is a
          peer-reviewed, multidisciplinary, open-access journal committed to
          publishing cutting-edge research that drives innovation, fosters
          intellectual growth, and advances knowledge across diverse academic
          and professional domains. Since its inception in 2013, IJAR has served
          as a premier platform for scholars, researchers, and practitioners to
          share original research findings, critical analyses, and
          groundbreaking methodologies with a global audience.
        </p>
        <h1 className="font-semibold">Scope of the Journal</h1>
        <p>
          <span className="text-[#F29E23] font-semibold">COSMOS</span> invites
          high-quality submissions from a broad spectrum of disciplines,
          reflecting its commitment to interdisciplinary research. Key areas
          include but are not limited to:
        </p>
        <p>
          <span className="font-semibold">Engineering & Technology:</span> Civil
          Engineering, Mechanical Engineering, Electrical Engineering, Computer
          Science, Artificial Intelligence, Robotics, and related fields.
        </p>
        <p>
          <span className="font-semibold">
            Medical & Pharmaceutical Sciences:
          </span>{" "}
          Clinical research, healthcare innovations, drug discovery, and
          pharmaceutical advancements.
        </p>
        <p>
          <span className="font-semibold">Business & Economics:</span> Finance,
          Marketing, Management, Entrepreneurship, International Trade, and
          Business Analytics.
        </p>
        <p>
          <span className="font-semibold">
            Physical & Mathematical Sciences:
          </span>{" "}
          Physics, Chemistry, Mathematics, Environmental Science, and
          interdisciplinary applications.
        </p>
        <p>
          <span className="font-semibold">Computer Applications & IT:</span>{" "}
          Data Science, Cybersecurity, Blockchain Technology, Software
          Engineering, and emerging IT trends.
        </p>
      </div>
    </div>
  );
};

export default PageToShow;
