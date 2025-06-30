import { Divider } from "antd";
import React from "react";

const LicensingUsage = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="space-y-5">
        {/* Copyright and Licensing */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Copyright and Licensing
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              All articles published in{" "}
              <span className="text-[#F29E23] font-semibold">COSMOS</span>:
              Bi-Annual Refereed Journal are published under the Creative
              Commons Attribution-NonCommercial 4.0 International License (CC
              BY-NC 4.0), unless otherwise stated.
            </li>
            <li className="list-disc">
              Under this license, authors retain the copyright of their work and
              grant the journal the right of first publication.
            </li>
            <li className="list-disc">
              The license permits anyone to read, download, copy, distribute,
              print, or reuse the content for non-commercial purposes, provided
              the original author(s) and source are properly cited.
            </li>
          </ul>
        </div>
        {/* Author Rights */}
        <div className="">
          <li className="font-semibold text-lg list-none">Author Rights</li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              Authors retain full copyright of their work.
            </li>
            <li className="list-disc">
              Authors are free to deposit their published articles in
              institutional repositories, personal websites, or other databases,
              provided that appropriate credit is given to{" "}
              <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
              Journal as the original place of publication.
            </li>
          </ul>
        </div>
        {/* Permissions and Restrictions */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Permissions and Restrictions
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              Commercial use of any article or part of it is not permitted
              without prior written permission from the editorial office.
            </li>
            <li className="list-disc">
              Users are not allowed to alter or transform the work in any way
              that misrepresents the original content.
            </li>
            <li className="list-disc">
              Authors and readers must not engage in plagiarism, unauthorized
              data manipulation, or breach of ethical standards in usage.
            </li>
          </ul>
        </div>
        {/* Archiving and Accessibility */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Archiving and Accessibility
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              All articles published in{" "}
              <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
              Journal are permanently archived and freely accessible on the
              journal&#39;s official website.
            </li>
            <li className="list-disc">
              The journal is committed to ensuring long-term digital
              preservation through its partnership with digital repositories.
            </li>
          </ul>
        </div>
        {/* Third-Party Content */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Third-Party Content
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              Any third-party material included in an article (e.g., images,
              figures, or tables) must be accompanied by appropriate
              permissions, and credit must be given to the original source.
            </li>
          </ul>
        </div>
        {/* Disclaimer */}
        <div className="">
          <li className="font-semibold text-lg list-none">Disclaimer</li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              The views and opinions expressed in the published articles are
              those of the authors and do not necessarily reflect the views of
              the editorial board or the publisher.
            </li>
            <li className="list-disc">
              Under this license, authors retain the copyright of their work and
              grant the journal the right of first publication.
            </li>
            <li className="list-disc">
              <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
              Journal assumes no responsibility or liability for any errors or
              consequences arising from the use of information contained in the
              journal.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LicensingUsage;
