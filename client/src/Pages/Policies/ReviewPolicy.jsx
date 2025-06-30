import { Divider } from "antd";
import React from "react";

const ReviewPolicy = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl">{head}</h1>
      <Divider />
      <div className="space-y-4">
        {/* Intro */}
        <div className="text-sm text-justify bg-white space-y-3">
          <h1 className="text-base font-semibold text-[#19467E]">
            Peer Review Policy
          </h1>
          <p className="indent-4">
            Reviewers play a vital role in maintaining the academic quality and
            integrity of{" "}
            <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
            Journal. The journal follows a double-blind peer review process,
            meaning that the identities of both the authors and reviewers remain
            concealed throughout the review cycle. This ensures an objective and
            unbiased evaluation of each manuscript.
          </p>
          <p>
            Peer review serves as a cornerstone of scholarly publishing by
            validating research, enhancing its credibility, and fostering
            academic collaboration. While the system has its limitations, it
            remains the most widely accepted method for ensuring the reliability
            and rigor of academic work.
          </p>
        </div>
        {/* Key Features of Our Review Process */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            Key Features of Our Review Process
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-5 font-medium text-gray-500">
            <li className="list-disc">
              <span className="text-black font-semibold">
                Double-Blind Review:
              </span>{" "}
              Both the authors and reviewers remain anonymous to each other.
            </li>
            <li className="list-disc">
              <span className="text-black font-semibold">Timeframe:</span> The
              review process typically takes between 2 to 5 weeks from the date
              of submission.
            </li>
            <li className="list-disc">
              <span className="text-black font-semibold">
                Originality Requirement:
              </span>{" "}
              Authors are strongly advised not to submit the same manuscript to
              multiple journals simultaneously. Please await the outcome of our
              review process before considering alternate submissions.
            </li>
          </ul>
        </div>
        {/* Review Process Guidelines */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            Review Process Guidelines
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-5 font-medium text-gray-500">
            <li className="list-disc">
              Only manuscripts that fall within the journal's aims and scope
              will be considered for review.
            </li>
            <li className="list-disc">
              Each paper is reviewed by three to four subject experts.
            </li>
            <li className="list-disc">
              Editors may invite additional reviewers if deemed necessary.
            </li>
            <li className="list-disc">Manuscripts are assessed based on:</li>
            <ul className="ml-5 lg:ml-8 space-y-2">
              <li className="list-decimal">Originality</li>
              <li className="list-decimal">Methodological rigor</li>
              <li className="list-decimal">
                Theoretical and practical contributions
              </li>
              <li className="list-decimal">Relevance and clarity</li>
            </ul>
            <li className="list-disc">
              Final publication decisions rest with the Editor-in-Chief, based
              on the recommendations of the reviewers.
            </li>
            <li className="list-disc">
              Authors will be promptly notified in case of rejection or if
              additional revisions are needed.
            </li>
            <li className="list-disc">
              All submissions are treated as strictly confidential throughout
              the review process.
            </li>
          </ul>
        </div>
        {/* Plagiarism and Ethical Conduct */}
        <div>
          <h1 className="text-base font-semibold text-[#19467E]">
            Plagiarism and Ethical Conduct
          </h1>
          <ul className="text-sm space-y-2 mt-2 ml-3 lg:ml-5 font-medium text-gray-500">
            <li className="list-disc">
              All manuscripts undergo a plagiarism check using reliable
              plagiarism detection software at the initial screening stage.
            </li>
            <li className="list-disc">
              Manuscripts found to contain plagiarism beyond acceptable limits
              will be immediately rejected without further review.
            </li>
            <li className="list-disc">
              In cases where plagiarism is detected after publication, the
              Editor-in-Chief will conduct an investigation—potentially
              involving a special review committee. If misconduct is confirmed:
            </li>
            <ul className="ml-5 lg:ml-8 space-y-2">
              <li className="list-decimal">The article may be retracted.</li>
              <li className="list-decimal">
                The author’s affiliated institution and any funding agencies
                will be notified.
              </li>
            </ul>
          </ul>
        </div>
        {/* End */}
        <p className="text-sm">
          <span className="text-[#F29E23] font-semibold">COSMOS</span> Journal
          is committed to upholding the highest standards of ethical publication
          and scholarly excellence. We thank our reviewers for their dedication
          and our authors for their trust.
        </p>
      </div>
    </div>
  );
};

export default ReviewPolicy;
