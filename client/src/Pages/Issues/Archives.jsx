import React, { useEffect, useState } from "react";
import Container from "../../Layout/Container";
import SideSection from "../../Layout/SideSection";
import { Collapse, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const Archives = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getVolumes = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`${import.meta.env.VITE_BASE_URL}api/volumes`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const transformed = result.data.map((vol, index) => ({
          key: index + 1,
          label: (
            <p className="text-sm text-blue-700">
              {`Volume ${vol.volume_number}, ${vol.year}, Total `}
              <span className="font-medium">{`${vol.article_count} Articls`}</span>
            </p>
          ),
          children: (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(vol.details).map(([month, info], idx) => (
                <div
                  key={idx}
                  className="p-4 rounded shadow bg-white border hover:shadow-md"
                >
                  <p className="text-sm text-gray-600">
                    Month #{info.month_number}
                  </p>
                  <h4 className="text-lg font-semibold text-[#19467E]">
                    {info.month_name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Articles: {info.article_count}
                  </p>
                  <button
                    className="mt-2 text-sm text-[#F29E23] hover:underline"
                    onClick={() =>
                      navigate(
                        `/articles/${info.month_number}/${vol.year}?month=${info.month_name}`
                      )
                    }
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ),
        }));

        setData(transformed);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getVolumes();
  }, []);

  // const items = [
  //   {
  //     key: "1",
  //     label: "This is panel header 1",
  //     children: "text",
  //   },
  //   {
  //     key: "2",
  //     label: "This is panel header 2",
  //     children: "text",
  //   },
  //   {
  //     key: "3",
  //     label: "This is panel header 3",
  //     children: "text",
  //   },
  // ];

  return (
    <Container>
      <div>
        <div className="flex flex-col lg:flex-row gap-2 mt-5">
          <div className="w-full lg:w-2/3 lg:pr-4">
            {/* Head */}
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#F29E23]">
              Archives
            </h1>
            {/* Divider */}
            <Divider />
            {/* Main */}
            <Collapse items={data} bordered={false} />
          </div>
          <SideSection buttonColor={"#19467E"} />
        </div>
      </div>
    </Container>
  );
};

export default Archives;
