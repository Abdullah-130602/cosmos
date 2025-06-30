import { Divider } from "antd";
import React from "react";

const CostAndDiscount = ({ head }) => {
  const tableData = [
    {
      cat: "Research Scholars (Full-Time Ph.D. Students)",
      disc: "20% discount",
    },
    {
      cat: "Authors from Rural or Non-Metro Colleges in India",
      disc: "25% discount",
    },
    {
      cat: "Authors Submitting More Than One Paper in a Single Issue",
      disc: "20% discount (per additional paper)",
    },
    {
      cat: "Institutional Collaborations",
      disc: "Negotiable – Up to 50% waiver",
    },
    {
      cat: "Editorial Board Members",
      disc: "50% discount",
    },
    {
      cat: "Invited Submissions",
      disc: "Full waiver (100%)",
    },
  ];

  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="space-y-5">
        {/* Publication fees */}
        <div className="space-y-3">
          <li className="font-semibold text-lg list-none">Publication Fee:</li>
          <p className="text-sm">
            <span className="text-[#F29E23] font-semibold">COSMOS </span>:
            Bi-Annual refereed Journal is committed to supporting the open
            dissemination of academic knowledge. In alignment with this mission,
            no publication fees are charged at any stage of the submission,
            review, or publication process.
          </p>
          <p className="text-sm">
            We believe in encouraging quality research without financial
            barriers. All accepted papers are published free of cost and are
            made freely available to readers under our open-access policy.
          </p>
        </div>
        {/* Article Processing Charges (APC): */}
        <div className="space-y-3">
          <li className="font-semibold text-lg list-none">
            Article Processing Charges (APC):
          </li>
          <p className="text-sm">
            We believe in encouraging quality research without financial
            barriers. All accepted papers are published free of cost and are
            made freely available to readers under our open-access policy.
          </p>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              <span className="text-black font-semibold">Indian Authors:</span>{" "}
              ₹ 1500 per article
            </li>
            <li className="list-disc">
              <span className="text-black font-semibold">
                International Authors:
              </span>{" "}
              $40 USD per article
            </li>
          </ul>
          <p className="text-sm font-medium">
            Note: There are no submission charges. APC is only applicable after
            the manuscript is accepted for publication.
          </p>
        </div>
        {/* What the APC Covers: */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            What the APC Covers:
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">Peer-review management</li>
            <li className="list-disc">Editing and formatting</li>
            <li className="list-disc">DOI assignment</li>
            <li className="list-disc">
              Online hosting and open-access archiving
            </li>
            <li className="list-disc">Indexing and visibility services</li>
          </ul>
        </div>
        {/* Discounts and Waivers */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Discounts and Waivers
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              COSMOS Journal is committed to promoting academic research,
              especially from emerging scholars and institutions with limited
              funding. Therefore, we offer the following discounts:
            </li>
          </ul>
        </div>
        {/* Discount Categories: */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Discounts and Waivers
          </li>
          {/* Table */}
          <div class="relative overflow-x-auto my-3">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Discount Offered
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
                        {el.cat}
                      </th>
                      <td class="px-6 py-4">{el.disc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* Waiver Request Process: */}
        <div className="">
          <li className="font-semibold text-lg list-none">
            Waiver Request Process:
          </li>
          <ul className="list-disc mr-3 lg:ml-5 text-sm text-gray-600 space-y-2 mt-2">
            <li className="list-disc">
              Authors seeking a waiver or discount must email the editorial
              office at{" "}
              <span className="font-semibold text-black">
                [editor@cosmosjournal.in]
              </span>{" "}
              with a short justification at the time of submission. Waiver
              decisions will be communicated along with the acceptance
              notification.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostAndDiscount;
