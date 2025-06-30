import { Divider } from "antd";
import React from "react";

const AimsAndScope = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="max-w-5xl mx-auto text-sm text-justify bg-white space-y-3">
        <p className="indent-4 font-medium">
          <span className="text-[#F29E23] font-semibold">COSMOS</span> is a
          peer-reviewed academic journal published by M.C.E Society's Abeda
          Inamdar Senior College of Arts, Science and Commerce (Autonomous),
          Pune, devoted to advancing knowledge and scholarship in the fields of
          Commerce and Management. The journal serves as a platform for
          researchers, academicians, industry professionals, and students to
          present original, high-quality research that contributes to the
          evolving landscape of business and management studies.
        </p>
      </div>
      {/* Aims */}
      <div className="my-4">
        <h1 className="text-base font-semibold text-[#19467E]">Aims :</h1>
        <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-5 font-medium text-gray-500">
          <li className="list-disc">
            To promote and disseminate innovative research in commerce,
            business, and management.
          </li>
          <li className="list-disc">
            To bridge the gap between theory and practice by encouraging applied
            research relevant to current industry challenges.
          </li>
          <li className="list-disc">
            To support scholarly dialogue on emerging trends, policy
            implications, and strategic innovations in the commerce and
            management domains.
          </li>
          <li className="list-disc">
            To uphold academic rigor, ethical research standards, and the
            development of a robust research culture.
          </li>
        </ul>
      </div>
      {/* Scope */}
      <div className="my-4">
        <h1 className="text-base font-semibold text-[#19467E]">Scope :</h1>
        <div>
          <h1 className="mt-2 font-medium text-sm">
            <span className="text-[#F29E23] font-semibold">COSMOS</span> invites research contributions in the form of:
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-5 font-medium text-gray-500">
            <li className="list-disc">Empirical Research Papers</li>
            <li className="list-disc">Theoretical and Conceptual Papers</li>
            <li className="list-disc">Case Studies</li>
            <li className="list-disc">Review Articles</li>
            <li className="list-disc">Industry-Informed Insights</li>
          </ul>
        </div>
        <div>
          <h1 className="mt-2 font-medium text-sm">
            Areas of interest include, but are not limited to:
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-5 font-medium text-gray-500">
            <li className="list-disc">Accounting and Finance</li>
            <li className="list-disc">Marketing Management</li>
            <li className="list-disc">Human Resource Management</li>
            <li className="list-disc">Organizational Behavior</li>
            <li className="list-disc">Entrepreneurship and Startups</li>
            <li className="list-disc">
              Business Analytics and Digital Transformation
            </li>
            <li className="list-disc">
              Banking, Insurance, and Financial Services
            </li>
            <li className="list-disc">International Business</li>
            <li className="list-disc">Corporate Governance and Ethics</li>
            <li className="list-disc">Sustainable Business Practices</li>
            <li className="list-disc">Strategic and Operational Management</li>
            <li className="list-disc">E-Commerce and Digital Marketing</li>
          </ul>
        </div>
        <div className="max-w-5xl mx-auto text-sm text-justify bg-white space-y-3 my-5">
          <p className="indent-4 font-medium">
            We welcome both qualitative and quantitative studies that offer
            fresh perspectives, critical insights, and practical applications in
            the realm of commerce and management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AimsAndScope;
