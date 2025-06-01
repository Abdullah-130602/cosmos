import React from "react";
import Banner from "../Home/Banner";
import Container from "../../Layout/Container";
import { ConfigProvider, Divider, Menu } from "antd";
import { useEffect, useState } from "react";
import PageToShow from "./PageToShow";
import { FaRegHandPointRight } from "react-icons/fa";

const index = () => {
  const items = [
    {
      key: "1",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Aims And Scope
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "2",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Instruction To Authors
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "3",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          How To Submit Paper
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "4",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Copyright Form
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "5",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Licensing And Usage Term
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "6",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Publishing Cost And Discount
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "7",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Academic And Institutional Subscription
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
  ];

  const item_mb = [
    {
      key: "1",
      label: (
        <h1 className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaRegHandPointRight size={12} />
          Aims And Scope
        </h1>
      ),
    },
    {
      key: "2",
      label: (
        <p className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaRegHandPointRight size={12} />
          Instruction To Authors
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaRegHandPointRight size={12} />
          How To Submit Paper
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <p className="flex items-center gap-1 capitalize md:uppercase font-medium">
          <FaRegHandPointRight size={12} />
          Copyright Form
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Licensing And Usage Term
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "6",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Publishing Cost And Discount
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
    {
      key: "7",
      label: (
        <p className="capitalize md:uppercase font-medium text-xs md:text-sm">
          Academic And Institutional Subscription
        </p>
      ),
      icon: <FaRegHandPointRight size={15} />,
    },
  ];

  const [currentPage, setCurrentPage] = useState("1");

  let pageToShow = "";

  const onClick = (e) => {
    setCurrentPage(e.key);
  };

  switch (currentPage) {
    case "1":
      pageToShow = <PageToShow head="Aims And Scope" />;
      break;
    case "2":
      pageToShow = <PageToShow head="Instruction To Authors" />;
      break;
    case "3":
      pageToShow = <PageToShow head="How To Submit Paper" />;
      break;
    case "4":
      pageToShow = <PageToShow head="Copyright Form" />;
      break;
    case "5":
      pageToShow = <PageToShow head="Licensing And Usage Term" />;
      break;
    case "6":
      pageToShow = <PageToShow head="Publishing Cost And Discount" />;
      break;
    case "7":
      pageToShow = (
        <PageToShow head="Academic And Institutional Subscription" />
      );
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
