import { Divider } from "antd";
import React from "react";

const EditorialBoard = ({ head }) => {
  const tableData = [
    {
      name: "Prof. Dr. M.G. Mulla",
      position: "Dean Faculty of Commerce and Management",
      affiliation: "Abeda Inamdar Senior College, Pune",
    },
    {
      name: "Dr. M. D. Lawrence,",
      position: "Vice-Chancellor",
      affiliation: "Dr. P. A. Inamdar University, Pune",
    },
    {
      name: "Dr. Chandrashekar M. Mathapati",
      position: "Assistant Professor",
      affiliation: "Akkamahadevi Women’s University, Vijayapur, Karnataka",
    },
    {
      name: "Dr. Ajit More",
      position: "Professor &amp; In charge Director,",
      affiliation: "Bharati Vidyapeeth Deemed University, Pune",
    },
    {
      name: "Prof. Dr. Ashfaq Khan",
      position: "Principal, Rizvi Education Society's",
      affiliation: "Rizvi College of Arts, Science & Commerce, Mumbai",
    },
    {
      name: "Dr. Sarita Usgaonkar",
      position: "Associate Professor, Vice-Principal",
      affiliation: "Govt. College of Arts, Commerce & Science, Goa",
    },
    {
      name: "Dr. Dilip Chavan",
      position: "Associate Professor",
      affiliation:
        "SBES College of Arts and Commerce, Chhatrapati Sambhajinagar",
    },
    {
      name: "Dr. Md. Shabbir Alam",
      position: "Dept. of Economics &amp; Finance",
      affiliation:
        "College of Business Administration, University of Behrain, Behrain",
    },
    {
      name: "Dr. Naushad Alam",
      position: "Associate Professor, Dept. of Finance & Economics,",
      affiliation:
        "College of Commerce & Business Administration, Dhofar University, Oman",
    },
    {
      name: "Dr.Arvind Dhond",
      position: "Associate Professor, Dept. of Commerce",
      affiliation: "St.Xavier’s College, (Autonomous), Mumbai",
    },
    {
      name: "Dr. Anil Adsule",
      position: "Principal",
      affiliation: "St. Vincent College, Pune",
    },
    {
      name: "Dr. Farzana Shaikh",
      position: "Head, Dept. of Business Practices",
      affiliation: "Abeda Inamdar Senior College, Pune",
    },
    {
      name: "Ms. Anisa Khan",
      position: "Assistant Professor",
      affiliation: "Abeda Inamdar Senior College, Pune",
    },
    {
      name: "Mr. Nayem Sayed",
      position: "Assistant Professor",
      affiliation: "Abeda Inamdar Senior College, Pune",
    },
  ];

  return (
    <div className="default_animate">
      <h1 className="text-3xl font-semibold">{head}</h1>
      <Divider />
      <div className="max-w-5xl mx-auto bg-white">
        {/* Table */}
        <div class="relative overflow-x-auto my-3">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Position
                </th>
                <th scope="col" class="px-6 py-3">
                  Affiliation
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
                      {el.name}
                    </th>
                    <td class="px-6 py-4">{el.position}</td>
                    <td class="px-6 py-4">{el.affiliation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditorialBoard;
