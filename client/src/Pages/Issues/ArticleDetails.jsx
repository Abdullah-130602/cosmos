import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../Layout/Container";
import { Divider, Spin } from "antd";
import { HiMiniUserCircle } from "react-icons/hi2";
import { LoadingOutlined } from "@ant-design/icons";

const ArticleDetails = () => {
  let { id } = useParams();
  id = atob(id);

  const [Load, setLoad] = useState(true);
  const [sectToShow, setSectToShow] = useState("abstract");
  const [data, setData] = useState("");

  const getArticle = async () => {
    setLoad(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `${import.meta.env.VITE_BASE_URL}api/articles/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.data) {
          setData(result.data);
          setLoad(false);
        } else {
          setLoad(false);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <Container>
      {Load ? (
        <div className="h-[47vh] flex justify-center items-center">
          <Spin
            indicator={<LoadingOutlined spin />}
            className="text-[#19467E]"
            size="large"
          />
        </div>
      ) : (
        <div>
          {/* Head */}
          <div className="flex gap-4 items-start">
            <div className="bg-[#F29E23] w-[10%] h-16 flex justify-center items-center">
              <span className="text-white p-2"> 26 Jan</span>
            </div>
            <h1 className="text-2xl font-medium">{data?.title}</h1>
          </div>
          {/* Views/Downloads & Authors */}
          <div className="my-5 flex flex-col lg:flex-row justify-start lg:justify-between gap-4 lg:gap-0">
            <div>
              <p className="text-sm text-gray-500">
                Views: <span className="font-semibold text-black">456</span>{" "}
              </p>
              <p className="text-sm text-gray-500">
                Downloads: <span className="font-semibold text-black">123</span>{" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniUserCircle className="text-[#19467E]" size={25} />
              <span className="italic">{data?.authors}</span>
            </div>
          </div>
          {/* Divider */}
          <Divider />
          {/* buttons */}
          <div className="space-x-5">
            <button
              className={`${
                sectToShow === "abstract" ? "bg-[#19467E]" : "bg-gray-500"
              } text-white font-medium px-4 py-2 relative`}
              onClick={() => setSectToShow("abstract")}
            >
              Abstract
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#F29E23]"></span>
            </button>
            <button
              className={`${
                sectToShow === "author" ? "bg-[#19467E]" : "bg-gray-500"
              } text-white font-medium px-4 py-2 relative`}
              onClick={() => setSectToShow("author")}
            >
              Corresponding Author
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#F29E23]"></span>
            </button>
          </div>
          {/* Content */}
          <div className="my-5">
            {sectToShow === "abstract" ? (
              <p>{data?.abstract}</p>
            ) : (
              <p>{data?.corresponding_author}</p>
            )}
          </div>
          {/* Divider */}
          <Divider />
          {/* Download */}
          <div className="flex justify-end">
            <Link
              to={data?.download_url}
              className="bg-[#F29E23] p-2 px-10 font-semibold text-white"
            >
              Download this article
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ArticleDetails;
