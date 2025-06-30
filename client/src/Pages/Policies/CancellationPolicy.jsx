import { Divider } from "antd";
import React from "react";

const CancellationPolicy = ({ head }) => {
  return (
    <div className="default_animate">
      <h1 className="text-3xl">{head}</h1>
      <Divider />
      <div className="space-y-4">
        {/* Intro */}
        <div className="text-sm text-justify bg-white space-y-3">
          <h1 className="text-base font-semibold text-[#19467E]">
            1. Manuscript Withdrawal
          </h1>
          <ul>
            <li>
              Authors may request to withdraw their manuscript under the
              following conditions:
            </li>
            <ul className="space-y-4 ml-3 lg:ml-5 my-5">
              <li className="list-disc">
                <span className="font-semibold text-black">
                  Before Review Begins:
                </span>{" "}
                Authors may withdraw their submission by sending a formal
                request to the editorial office at
                managingeditor@aiscpublication.com.
              </li>
              <li className="list-disc">
                <span className="font-semibold text-black">During Review:</span>{" "}
                Withdrawal requests during the review process must include a
                valid reason and will be considered on a case-by-case basis.
              </li>
              <li className="list-disc">
                <span className="font-semibold text-black">
                  After Acceptance:
                </span>{" "}
                Manuscripts cannot be withdrawn once they are accepted for
                publication unless a serious ethical or legal issue is involved.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
