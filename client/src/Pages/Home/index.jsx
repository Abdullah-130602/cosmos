import React, { useEffect } from "react";
import Banner from "./Banner";
import Container from "../../Layout/Container";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { FaRegClock, FaInfo } from "react-icons/fa";
import {
  MdOutlineLibraryBooks,
  MdOutlineDescription,
  MdOutlineTextsms,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import cover_page from "../../assets/COSMOS_COVER.png";
import SideSection from "../../Layout/SideSection";
import { useAuth } from "../../Context/AuthContext";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyChoose = [
    {
      icon: <MdOutlineLibraryBooks size={20} color="#fff" />,
      label: "Publication within a short period after acceptance.",
    },
    {
      icon: <FaRegClock size={20} color="#fff" />,
      label: "5 Year impact Factor : 7.337",
    },
    {
      icon: <FaInfo size={20} color="#fff" />,
      label: "Every article provided with DOI (Digital Object Identifier).",
    },
    {
      icon: <CgArrowsExpandUpRight size={20} color="#fff" />,
      label: "Online tracking of article accessible.",
    },
    {
      icon: <MdOutlineDescription size={20} color="#fff" />,
      label: "Online manuscript submission.",
    },
    {
      icon: <MdOutlineTextsms size={20} color="#fff" />,
      label: "Update about your article via SMS or Email.",
    },
    {
      icon: <MdOutlineSupportAgent size={20} color="#fff" />,
      label: "24*7 helpline for rapid support, Whatsapp at +91 09876 54321",
    },
  ];

  return (
    <div>
      <Banner />
      <div className="bg-[#F29E23] pt-1 text-white">
        <marquee behavior="" direction="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quibusdam itaque eos aperiam magnam nostrum voluptatibus, consequatur
          aut molestias nemo?
        </marquee>
      </div>
      <Container>
        {/* Intro */}
        <div>
          <h1 className="text-2xl lg:text-5xl font-semibold">
            Welcome to <span className="text-[#F29E23]">COSMOS</span>
          </h1>
          <div className="flex flex-col gap-3 mt-5 text-xs xl:text-sm">
            <p className="text-justify">
              COSMOS is the official peer-reviewed academic journal of M.C.E
              Society's Abeda Inamdar Senior College of Arts, Science and
              Commerce (Autonomous), Pune, dedicated to promoting high-quality
              research and scholarly exchange across diverse disciplines in
              commerce and management. Our journal provides a vibrant platform
              for academicians, researchers, and students to publish original,
              thought-provoking, and impactful work.
            </p>
            <p className="text-justify">
              At COSMOS, we believe in fostering a culture of inquiry,
              innovation, and intellectual collaboration. Each submission
              undergoes a rigorous peer-review process to ensure academic
              integrity and relevance. We publish research articles, review
              papers, case studies, and theoretical explorations that contribute
              to knowledge advancement and address contemporary academic and
              societal issues.
            </p>
            <p className="text-justify">
              Since its inception, Cosmos has played a significant role in the
              dissemination of knowledge grounded in scholarly research, as well
              as in shaping the content and boundaries of the discipline.
            </p>
            <p className="text-justify">
              Whether you are a contributor, reviewer, or reader, we invite you
              to explore our latest issues, discover emerging ideas, and engage
              with a community committed to academic excellence.
            </p>
          </div>
        </div>
        <Divider />
        {/* Sections */}
        <div className="flex flex-col lg:flex-row gap-2 mt-5">
          {/* First Section */}
          <div className="w-full lg:w-2/3 lg:pr-4">
            {/* Most Viewed / Downloaded Articles */}
            <div>
              <h1 className="text-xl font-semibold text-[#19467E] uppercase tracking-wider">
                Most Viewed / Downloaded Articles
              </h1>
              <div className="bg-slate-100 w-auto mt-5 p-3 flex flex-col gap-5">
                <h1 className="uppercase text-lg font-semibold text-[#F29E23] italic">
                  Application for Islamic value in military : A litrature review
                </h1>
                <hr />
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  cum fugiat, quia praesentium incidunt adipisci quisquam sit
                  sint ab quos?F Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsa, veniam.
                </p>
                <div className="flex justify-around">
                  <p className="text-sm">
                    No. of Downloads :{" "}
                    <span className="font-semibold">812</span>
                  </p>
                  <p className="text-sm">
                    No. of Views : <span className="font-semibold">1128</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  <button className="bg-[#F29E23] p-3 px-5 text-sm text-white font-semibold">
                    Download PDF
                  </button>
                  <button className="bg-[#F29E23] p-3 px-5 text-sm text-white font-semibold">
                    View Abstract
                  </button>
                </div>
              </div>
            </div>
            {/* The Journal Invites */}
            <div className="text-xs xl:text-sm mt-5 flex flex-col gap-3 text-justify indent-2">
              <p>
                The journal welcomes the submission of original research
                articles that demonstrate a meaningful contribution to the
                scientific and academic communities. Each manuscript submitted
                is promptly assigned a unique manuscript identification number
                within 24 hours of receipt, ensuring efficient tracking and
                communication.
              </p>
              <p>
                COSMOS follows a rigorous double-blind peer review process,
                where both the authors and reviewers remain anonymous to each
                other throughout the evaluation, maintaining the objectivity and
                fairness of the review. The review process is designed to be
                swift, typically completed within seven days of submission,
                ensuring timely feedback to authors.
              </p>
              <p>
                Once a manuscript is accepted, it is published online without
                delay, allowing for rapid dissemination of the research. A proof
                of the article will be emailed to the corresponding author for
                final verification before publication.
              </p>
            </div>
            {/* Why Choose COSMOS */}
            <div className="bg-[#19467E] p-4 my-5">
              <h1 className="text-white text-lg xl:text-2xl font-semibold text-center tracking-wider">
                WHY PUBLISH WITH <span className="text-[#F29E23]">COSMOS</span>
              </h1>
              <div className="border-t border-white my-2" />
              {whyChoose?.map((el, i) => {
                return (
                  <div className="flex items-center gap-2 my-5" key={i}>
                    <div className="bg-[#F29E23] w-8 h-8 flex justify-center items-center">
                      {el.icon}
                    </div>
                    <div>
                      <p className="text-white">{el.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Cover Pic */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="space-y-2">
                <img src={cover_page} alt="" />
                <p className="font-semibold text-center text-sm">
                  Cover Letter
                </p>
              </div>
              <div className="space-y-2">
                <img src={cover_page} alt="" />
                <p className="font-semibold text-center text-sm">
                  Cover Letter
                </p>
              </div>
              <div className="space-y-2">
                <img src={cover_page} alt="" />
                <p className="font-semibold text-center text-sm">
                  Cover Letter
                </p>
              </div>
            </div>
          </div>
          {/* Second Section */}
          <SideSection />
        </div>
      </Container>
    </div>
  );
};

export default index;
