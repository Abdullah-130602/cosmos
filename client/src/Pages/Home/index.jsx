import React from "react";
import Banner from "./Banner";

const index = () => {
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
    </div>
  );
};

export default index;
