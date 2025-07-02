import React, { useEffect, useState } from "react";
import Container from "../../Layout/Container";
import SideSection from "../../Layout/SideSection";
import { Divider, Empty, Spin } from "antd";
import {
  createSearchParams,
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { FaCalendar, FaDownload, FaUserPen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";

const RequestedIssues = () => {
  const navigate = useNavigate();
  const { month } = useParams();
  const { year } = useParams();

  const [searchParams] = useSearchParams();
  const month_name = searchParams.get("month");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [Load, setLoad] = useState(true);
  const [timePeriod, setTimePeriod] = useState("");

  const getCurrentIssue = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `${import.meta.env.VITE_BASE_URL}api/volumes/${year}/month/${month}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result?.data) {
          setData(result.data);
          setTimePeriod(result.issue_period);
          setLoad(false);
        } else {
          setLoad(false);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCurrentIssue();
  }, []);

  return (
    <Container>
      {console.log(month_name)}
      {Load ? (
        <div className="h-[47vh] flex justify-center items-center">
          <Spin
            indicator={<LoadingOutlined spin />}
            className="text-[#19467E]"
            size="large"
          />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-2 mt-5">
          <div className="w-full lg:w-2/3 lg:pr-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl lg:text-4xl font-semibold">
                {month_name} {year}
              </h1>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-xl text-[#19467E]" />
                <h1 className="text-xl lg:text-2xl text-[#19467E]">
                  {timePeriod}
                </h1>
              </div>
            </div>
            {/* <Divider /> */}
            <div>
              {data?.length > 0 ? (
                data.map((el, i) => {
                  return (
                    <div className="my-10" key={i}>
                      <div className="space-y-5">
                        <div className="flex flex-col lg:flex-row gap-2">
                          {/* First Section */}
                          <div className="w-full lg:w-[80%] lg:mr-4">
                            {/* Head */}
                            <Link to={`/article-details/${btoa(el.id)}`}>
                              <p className="text-base text-[#19467E] hover:underline font-medium">
                                {el.title}
                              </p>
                            </Link>
                            {/* Authors */}
                            <div className="mt-3">
                              <div className="flex items-center gap-1">
                                <FaUserPen
                                  className="text-gray-700 text-xs"
                                  size={14}
                                />
                                <p className="text-gray-700 text-xs font-medium">
                                  {el.authors}
                                </p>
                              </div>
                            </div>
                            {/* Viewed/Downloads */}
                            <div className="flex items-center w-full mt-5">
                              <div className="w-1/2 text-gray-600 flex items-center gap-1 text-xs lg:text-sm">
                                <FaEye />
                                <span>715</span>
                              </div>
                              <div className="w-1/2 text-gray-600 flex items-center gap-1 text-xs lg:text-sm">
                                <FaDownload />
                                <p>431</p>
                              </div>
                            </div>
                          </div>
                          {/* Second Section */}
                          <div className="flex justify-start lg:justify-center items-center lg:border-l w-full lg:w-[20%]">
                            {/* Buttons */}
                            <div className="flex flex-row lg:flex-col gap-2 w-full">
                              <Link
                                to={`${
                                  import.meta.env.VITE_BASE_URL
                                }api/articles/download/${el.id}`}
                                className="bg-[#F29E23] p-3 w-full lg:w-auto text-white font-medium text-xs transition-all duration-500 hover:scale-105 ease-out text-center"
                              >
                                Download PDF
                              </Link>
                              <button
                                className="bg-[#19467E] p-3 w-full lg:w-auto text-white font-medium text-xs transition-all duration-500 hover:scale-105 ease-out"
                                onClick={() =>
                                  navigate(`/article-details/${btoa(el.id)}`)
                                }
                              >
                                View Abstract
                              </button>
                            </div>
                          </div>
                        </div>
                        <Divider />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-center items-center">
                  <Empty />
                </div>
              )}
            </div>
          </div>
          <SideSection />
        </div>
      )}
    </Container>
  );
};

export default RequestedIssues;
