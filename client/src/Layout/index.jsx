import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const index = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 z-[99999]">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default index;
