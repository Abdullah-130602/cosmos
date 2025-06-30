import { Divider } from "antd";
import React from "react";
import { FaMailBulk } from "react-icons/fa";

const AcademicAndInstitutionalSubscription = ({ head }) => {
  const tableData = [
    {
      type: "Colleges / Universities",
      india: "₹2000",
      International: "$60 USD",
    },
    {
      type: "Libraries / Research Institutes",
      india: "₹2500",
      International: "$75 USD",
    },
    {
      type: "Individual Academics",
      india: "₹1500",
      International: "$50 USD",
    },
  ];

  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="space-y-5">
        {/* Intro */}
        <div className="max-w-5xl mx-auto text-sm text-justify bg-white space-y-3">
          <p className="indent-4 font-medium">
            While <span className="text-[#F29E23] font-semibold">COSMOS: </span>
            Bi-Annual Refereed Journal is available online free of charge under
            an open-access model, we also offer print subscriptions for academic
            institutions, libraries, and research centers.
          </p>
        </div>
        {/* Print Subscription Plans (Annual) */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Print Subscription Plans (Annual)
          </li>
          {/* Table */}
          <div class="relative overflow-x-auto my-3">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Subscriber Type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    India
                  </th>
                  <th scope="col" class="px-6 py-3">
                    International
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map?.((el, i) => {
                  return (
                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                      key={i}
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {el.type}
                      </th>
                      <td class="px-6 py-4">{el.india}</td>
                      <td class="px-6 py-4">{el.International}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* How to Subscribe */}
        <div className="max-w-5xl mx-auto text-sm text-justify bg-white space-y-3">
          <p className="">
            To subscribe to the print edition of{" "}
            <span className="text-[#F29E23] font-semibold">COSMOS</span>{" "}
            Journal, please send an email to:
          </p>
          <div className="flex gap-2 items-center">
            <FaMailBulk />
            <span className="font-semibold text-sm">
              managingeditor@aiscpublication.com
            </span>
          </div>
          <div className="">
            <li className="text-sm list-none">
              Include the following details:
            </li>
            <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
              <li className="list-disc">Institution/Library/Individual Name</li>
              <li className="list-disc">Postal Address with PIN/ZIP Code</li>
              <li className="list-disc">Contact Person and Mobile Number</li>
              <li className="list-disc">Email Address</li>
              <li className="list-disc">
                Preferred Mode of Payment (Bank Transfer / UPI / Cheque)
              </li>
            </ul>
            <li className="list-none mt-2">
              We will send you a confirmation along with an invoice and bank
              details for payment.
            </li>
          </div>
        </div>
        {/* Benefits of Subscription */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Benefits of Subscription
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              Complimentary acknowledgment on our website
            </li>
            <li className="list-disc">
              Priority updates about calls for papers and special issues
            </li>
            <li className="list-disc">
              Discounts on academic events hosted by COSMOS Journal or its
              editorial partners
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicAndInstitutionalSubscription;
