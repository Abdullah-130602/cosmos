import { Divider } from "antd";
import React from "react";

const PublicationPolicy = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl">{head}</h1>
      <Divider />
      <div className="space-y-4">
        {/* Intro */}
        <div className="text-sm text-justify bg-white space-y-3">
          <p className="indent-4">
            <span className="text-[#F29E23] font-semibold">COSMOS: </span>
            Bi-Annual refereed Journal is committed to maintaining the highest
            standards of academic integrity, peer review, and editorial
            transparency. The following policy governs the publication process:
          </p>
        </div>
        {/* 1. Scope of Publication */}
        <div className="text-sm text-justify bg-white space-y-3">
          <h1 className="text-base font-semibold text-[#19467E]">
            1. Scope of Publication
          </h1>
          <p className="indent-4">
            <span className="text-[#F29E23] font-semibold">COSMOS</span>
            Journal publishes original and scholarly research articles,
            conceptual papers, case studies, and review papers in the fields of:
          </p>
          <ul className="ml-3 lg:ml-10 text-sm space-y-2">
            <li className="list-decimal">Commerce</li>
            <li className="list-decimal">Management</li>
            <li className="list-decimal">Business Studies</li>
            <li className="list-decimal">Economics</li>
            <li className="list-decimal">
              Allied disciplines relevant to business and management
            </li>
          </ul>
        </div>
        {/* 2. Peer Review Process */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            2. Peer Review Process
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              All submissions undergo a{" "}
              <span className="font-semibold text-black">
                double-blind peer
              </span>{" "}
              review process to ensure objectivity and academic rigor.
            </li>
            <li className="list-disc">
              Each manuscript is reviewed by at least two subject experts.
            </li>
            <li className="list-disc">
              The editorial team may recommend revisions based on reviewer
              feedback before final acceptance.
            </li>
          </ul>
        </div>
        {/* 3. Originality and Plagiarism Policy */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            3. Originality and Plagiarism Policy
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              Submissions must be{" "}
              <span className="font-semibold text-black">
                original and unpublished
              </span>
              .
            </li>
            <li className="list-disc">
              Articles should not be under consideration by any other journal.
            </li>
            <li className="list-disc">
              The journal uses plagiarism detection tools. Manuscripts with more
              than{" "}
              <span className="font-semibold text-black">10% similarity</span>{" "}
              (excluding references and quotes) will be rejected outright.
            </li>
          </ul>
        </div>
        {/* 4. Ethical Standards */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            4. Ethical Standards
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              Authors must follow{" "}
              <span className="font-semibold text-black">
                ethical research practices
              </span>
              , including proper citation, data integrity, and acknowledgment of
              funding sources and contributors.
            </li>
            <li className="list-disc">
              Any form of{" "}
              <span className="font-semibold text-black">
                plagiarism, data fabrication, or duplicate submission
              </span>
              is strictly prohibited.
            </li>
            <li className="list-disc">
              The journal adheres to COPE (Committee on Publication Ethics)
              guidelines.
            </li>
          </ul>
        </div>
        {/* 5. Frequency of Publication */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            5. Frequency of Publication
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              The journal is published{" "}
              <span className="font-semibold text-black">biannually</span> (June
              and January).
            </li>
            <li className="list-disc">
              Special issues may be released occasionally with thematic
              relevance.
            </li>
          </ul>
        </div>
        {/* 6. Open Access Policy */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            6. Open Access Policy
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
              Journal follows an{" "}
              <span className="font-semibold text-black">
                open-access model
              </span>
              , allowing free online access to all articles.
            </li>
            <li className="list-disc">
              Authors retain copyright and grant the journal the right of first
              publication.
            </li>
          </ul>
        </div>
        {/* 7. Withdrawal and Retraction */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            6. Withdrawal and Retraction
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              Authors may request withdrawal{" "}
              <span className="font-semibold text-black">
                before the review process
              </span>{" "}
              is complete.
            </li>
            <li className="list-disc">
              If post-publication ethical violations are found, the article may
              be <span className="font-semibold text-black">retracted</span>,
              with an official retraction notice published.
            </li>
          </ul>
        </div>
        {/* 8. Archiving and Indexing */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            8. Archiving and Indexing
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-10 font-medium text-gray-500">
            <li className="list-disc">
              All published articles are permanently archived and indexed in
              national and international academic databases (details available
              on our website).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicationPolicy;
