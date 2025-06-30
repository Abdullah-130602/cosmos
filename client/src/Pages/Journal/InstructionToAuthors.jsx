import { Divider } from "antd";
import React from "react";

const InstructionToAuthors = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="space-y-5">
        {/* intro */}
        <div className="max-w-5xl mx-auto text-sm text-justify ">
          <p className="indent-4">
            <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
            welcomes original, unpublished research contributions in the fields
            of <b>Commerce and Management</b>. Authors are requested to
            carefully read and follow the guidelines below to ensure a smooth
            submission and review process.
          </p>
        </div>
        {/* Scope of submission: */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            1. Scope of submission:
          </li>
          <p className="text-sm my-2 font-medium">
            We accept the following types of manuscripts:
          </p>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2">
            <li className="list-disc">
              Research Papers (Empirical or Theoretical)
            </li>
            <li className="list-disc">Review Articles</li>
            <li className="list-disc">Case Studies</li>
            <li className="list-disc">Conceptual Papers</li>
            <li className="list-disc">Industry-Based Insights</li>
          </ul>
        </div>
        <div>
          <p className="indent-4 text-sm">
            All submissions must be relevant to areas within Commerce and
            Management, such as Marketing, Finance, HRM, Entrepreneurship,
            Business Analytics, Corporate Governance, International Business,
            and related domains.
          </p>
        </div>
        {/* General Guidelines */}
        <div>
          <li className="font-semibold text-lg list-none">
            2. General Guidelines
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 my-2">
            <li className="list-disc">
              Manuscripts must be <b>original</b> and{" "}
              <b>not under consideration</b> elsewhere.
            </li>
            <li className="list-disc">
              Articles should be written in <b>clear, concise English.</b>
            </li>
            <li className="list-disc">
              Word limit: <b>3,000 to 6,000 words</b> (excluding references).
            </li>
            <li className="list-disc">
              Submit manuscripts in <b>Microsoft Word (.doc/.docx)</b> format
              only.
            </li>
            <li className="list-disc">
              A similarity index below <b>10%</b> is recommended to meet
              academic integrity standards.
            </li>
          </ul>
        </div>
        {/* Manuscript Structure */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            3. Manuscript Structure:
          </li>
          <p className="text-sm my-2 font-medium">
            A typical manuscript should include:
          </p>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2">
            <li className="list-disc">
              Title (concise and reflective of the study)
            </li>
            <li className="list-disc">
              Abstract (150–250 words) with 4–6 keywords
            </li>
            <li className="list-disc">
              Introduction (including background and objectives)
            </li>
            <li className="list-disc">Review of Literature</li>
            <li className="list-disc">Research Methodology</li>
            <li className="list-disc">Data Analysis and Findings</li>
            <li className="list-disc">Conclusion and Implications</li>
            <li className="list-disc">References (APA 7th Edition format)</li>
          </ul>
        </div>
        {/* Formatting Guidelines */}
        <div>
          <li className="font-semibold text-lg list-none">
            4. Formatting Guidelines
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 my-2">
            <li className="list-disc">
              Font: Times New Roman, Size 12, Line Spacing: 1.5
            </li>
            <li className="list-disc">Margins: 1 inch on all sides</li>
            <li className="list-disc">
              All tables, figures, and charts must be numbered and properly
              titled.
            </li>
            <li className="list-disc">
              References and in-text citations must follow APA 7th Edition
              guidelines.
            </li>
          </ul>
        </div>
        {/* Submission Process */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            5. Submission Process:
          </li>
          <li className="list-disc text-sm my-2 font-medium">
            All manuscripts should be submitted either via email
            articles@aiscpublication.com or article submission tab provided on
            the home page of the website.
          </li>
          <li className="list-disc text-sm my-2 font-medium">
            In the submission email, include:
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2">
            <li className="list-decimal">
              A cover letter with author(s) details (name, affiliation, contact)
            </li>
            <li className="list-decimal">A declaration of originality</li>
            <li className="list-decimal">The manuscript file</li>
          </ul>
        </div>
        {/* Review Process */}
        <div>
          <li className="font-semibold text-lg list-none">6. Review Process</li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 my-2">
            <li className="list-disc">
              All submissions undergo a double-blind peer-review process.
            </li>
            <li className="list-disc">
              Authors will be notified of the initial review decision within 4–6
              weeks.
            </li>
            <li className="list-disc">
              Accepted papers may be subject to minor revisions before
              publication.
            </li>
          </ul>
        </div>
        {/* Ethical Considerations */}
        <div>
          <li className="font-semibold text-lg list-none">
            7. Ethical Considerations
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 my-2">
            <li className="list-disc">
              Plagiarism in any form is strictly prohibited.
            </li>
            <li className="list-disc">
              Authors must properly acknowledge all sources and contributions.
            </li>
            <li className="list-disc">
              Any potential conflict of interest should be disclosed.
            </li>
          </ul>
        </div>
        {/* Publication Charges */}
        <div>
          <li className="font-semibold text-lg list-none">
            8. Publication Charges
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 my-2">
            <li className="list-disc">
              There are no{" "}
              <span className="font-medium">
                publication fee for the articles however author need to pay
                processing charges
              </span>{" "}
              for publishing in{" "}
              <span className="text-[#F29E23] font-semibold">COSMOS</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructionToAuthors;
