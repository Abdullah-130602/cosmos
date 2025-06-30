import React from "react";
import AuthFooter from "./AuthFooter";

const AuthLayout = ({ children }) => {
  return (
    <div>
      {children}
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
