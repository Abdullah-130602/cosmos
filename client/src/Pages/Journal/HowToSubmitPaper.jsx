import { Divider } from "antd";
import React from "react";

const HowToSubmitPaper = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="space-y-5">
        {/* intro */}
        <div className="max-w-5xl mx-auto text-sm text-justify ">
          <p className="indent-4">
            We welcome original research papers, review articles, case studies,
            and conceptual papers in the fields of Commerce and Management. To
            ensure a smooth and efficient submission process, please follow the
            steps below:
          </p>
        </div>
        {/* Step 1: Prepare Your Manuscript */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Step 1: Prepare Your Manuscript
          </li>
          <p className="text-sm my-2 font-medium">
            Before submission, ensure that:
          </p>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2">
            <li className="list-disc">
              Your paper follows the Instructions to Authors (formatting, word
              count, referencing, etc.).
            </li>
            <li className="list-disc">
              The manuscript is original, plagiarism-free, and not under review
              elsewhere.
            </li>
            <li className="list-disc">
              All tables, figures, and references are properly formatted (APA
              7th edition).
            </li>
            <li className="list-disc">
              A cover letter and declaration of originality are prepared.
            </li>
          </ul>
        </div>
        {/* Step 2 : Send Your Submission via Email */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Step 2 : Send Your Submission via Email
          </li>
          <p className="text-sm my-2 font-medium">
            Submit your manuscript by email to: articles@aiscpublication.com
          </p>
          <p className="text-sm my-2 font-medium">Include the following:</p>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2">
            <li className="list-disc">
              Manuscript file in .doc or .docx format
            </li>
            <li className="list-disc">Cover letter with:</li>
            <ul className="list-decimal ml-5 lg:ml-8 my-2 space-y-2">
              <li className="font-medium text-black">Title of the paper</li>
              <li className="font-medium text-black">
                Author(s)’ full name(s)
              </li>
              <li className="font-medium text-black">
                Designation and institutional affiliation
              </li>
              <li className="font-medium text-black">
                Email address and mobile number
              </li>
            </ul>
            <li className="list-disc">
              Declaration of originality (a short signed statement confirming
              that the paper is original and not submitted elsewhere)
            </li>
          </ul>
        </div>
        {/* Step 3: Acknowledgement and Review */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Step 3: Acknowledgement and Review
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              You will receive an acknowledgement email within 3–5 working days.
            </li>
            <li className="list-disc">
              Your paper will undergo a double-blind peer review process.
            </li>
            <li className="list-disc">
              Review decisions will be communicated within 4–6 weeks from the
              date of submission.
            </li>
          </ul>
        </div>
        {/* Step 4: Revisions and Final Submission */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Step 4: Revisions and Final Submission
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              If revisions are required, submit the revised manuscript by the
              specified deadline.
            </li>
            <li className="list-disc">
              Final acceptance will be communicated along with publication
              details.
            </li>
          </ul>
        </div>
        {/* Step 5: Publication */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Step 5: Publication
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              Accepted papers will be published in the upcoming issue of{" "}
              <span className="text-[#F29E23] font-semibold">COSMOS </span>
              and made available online and/or in print, as per the journal’s
              publication model.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToSubmitPaper;
