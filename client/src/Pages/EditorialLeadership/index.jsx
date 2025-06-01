import React from "react";
import Banner from "../Home/Banner";
import Container from "../../Layout/Container";
import { ConfigProvider, Divider, Menu } from "antd";
import { useEffect, useState } from "react";
import PageToShow from "./PageToShow";
import { FaUser } from "react-icons/fa";

const index = () => {
  const items = [
    {
      key: "1",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Executive Editors
        </p>
      ),
      icon: <FaUser size={15} />,
    },
    {
      key: "2",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Editorial Secretory
        </p>
      ),
      icon: <FaUser size={15} />,
    },
    {
      key: "3",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Advisory Board Members
        </p>
      ),
      icon: <FaUser size={15} />,
    },
    {
      key: "4",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Assistent Reviewers
        </p>
      ),
      icon: <FaUser size={15} />,
    },
  ];

  const item_mb = [
    {
      key: "1",
      label: (
        <h1 className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaUser size={12} />
          Executive Editors
        </h1>
      ),
    },
    {
      key: "2",
      label: (
        <p className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaUser size={12} />
          Editorial Secretory
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaUser size={12} />
          Advisory Board Members
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <p className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaUser size={12} />
          Assistent Reviewers
        </p>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState("1");

  let pageToShow = "";

  const onClick = (e) => {
    setCurrentPage(e.key);
  };

  switch (currentPage) {
    case "1":
      pageToShow = <PageToShow head="Executive Editors" />;
      break;
    case "2":
      pageToShow = <PageToShow head="Editorial Secratory" />;
      break;
    case "3":
      pageToShow = <PageToShow head="Advisory Board Members" />;
      break;
    case "4":
      pageToShow = <PageToShow head="Assistent Reviewers" />;
      break;
    default:
      break;
  }

  return (
    <div>
      <Banner />
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-5 ">
          <div className="w-full block md:hidden sticky top- z-[999]">
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    horizontalItemHoverColor: "#19467E",
                    itemSelectedColor: "#fff",
                    subMenuItemSelectedColor: "#19467E",
                    horizontalItemSelectedColor: "#19467E",
                    darkItemSelectedBg: "#19467E",
                    itemHoverColor: "#19467E",
                    itemMarginInline: 10,
                    itemActiveBg: "#19467E",
                    itemSelectedBg: "#19467E",
                  },
                },
              }}
            >
              <Menu
                style={{
                  width: "100%",
                }}
                onClick={onClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["1"]}
                mode="horizontal"
                items={item_mb}
              />
            </ConfigProvider>
          </div>
          <div className="w-[40%] hidden md:block sticky top-36 z-[99999]">
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    horizontalItemHoverColor: "#19467E",
                    itemSelectedColor: "#fff",
                    subMenuItemSelectedColor: "#19467E",
                    horizontalItemSelectedColor: "#19467E",
                    darkItemSelectedBg: "#19467E",
                    itemHoverColor: "#19467E",
                    itemMarginInline: 10,
                    itemActiveBg: "#19467E",
                    itemSelectedBg: "#19467E",
                    itemBorderRadius: 0,
                    itemHeight: 50,
                  },
                },
              }}
            >
              <Menu
                style={{
                  width: "100%",
                }}
                onClick={onClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />
            </ConfigProvider>
          </div>
          <div className="w-full px-2 lg:px-5">
            <div>{pageToShow}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
