import React from "react";
import cur_issue from "../assets/cur_issue.png";
import pre_issue from "../assets/pre_issue.png";
import { Link } from "react-router-dom";
import { useLayout } from "../Context/LayoutContext";

const SideSection = () => {
  const { currentUrl } = useLayout();

  return (
    <div className="w-full lg:w-[33%] lg:border-l lg:p-4">
      <div className="flex flex-col gap-5">
        {/* Submit Article */}
        {currentUrl === "/submit-article" ? (
          false
        ) : (
          <button className="bg-[#F29E23] p-2 w-full text-white font-semibold text-lg transition-all duration-500 hover:scale-105 ease-out">
            Submit Article
          </button>
        )}
        {/* Hardcopy */}
        <button className="bg-[#F29E23] p-2 w-full text-white font-semibold text-lg transition-all duration-500 hover:scale-105 ease-out">
          Apply For Hardcopy
        </button>
        {/* Email For Info */}
        <div>
          <h1 className="font-semibold">
            For all communication regarding how to:
          </h1>
          <ul className="ml-10">
            <li className="list-disc mt-2 text-sm text-gray-500">
              Publish a paper.
            </li>
            <li className="list-disc mt-2 text-sm text-gray-500">
              Check the status of paper.
            </li>
            <li className="list-disc mt-2 text-sm text-gray-500">
              any other general information.
            </li>
          </ul>
          <h1 className="font-semibold mt-3">Mail us at:</h1>
          <div className="mt-2 bg-slate-100 p-3">
            <Link to="mailto:cosmos@gmail.com">
              <p className="text-xl text-[#19467E] font-semibold underline text-center tracking-wide">
                cosmos@gmail.com
              </p>
            </Link>
          </div>
        </div>
        {/* Current and Previous Issue Image Link */}
        <div className="space-y-5">
          <img src={cur_issue} alt="" className="w-full" />
          <img src={pre_issue} alt="" className="w-full" />
        </div>
        {/* Stats */}
        <div className="bg-[#19467E]">
          <h1 className="text-white p-2 text-lg font-semibold">
            Statistics of COSMOS
          </h1>
          <div className="bg-slate-100 p-2 space-y-3">
            <h1 className="text-sm">
              Articles Viewed : <span className="font-semibold">4317</span>
            </h1>
            <h1 className="text-sm">
              Articles Downloaded : <span className="font-semibold">4317</span>
            </h1>
          </div>
        </div>
        {/* Cosmos Downloads */}
        <div className="bg-[#19467E]">
          <h1 className="text-white p-2 text-lg font-semibold">
            COSMOS Downloads
          </h1>
          <div className="bg-slate-100 p-2 space-y-3 flex flex-col">
            <Link to="" className="text-sm underline text-blue-500">
              January 2025
            </Link>
            <Link to="" className="text-sm underline text-blue-500">
              Previous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
