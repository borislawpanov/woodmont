import React from "react";
import SmPadding from "./SmPadding";

const WhiteSection = ({ children }) => {
  return (
    <div className="white-section ">
      <div className="container">
        <SmPadding />
        {children}
        <SmPadding />
      </div>
    </div>
  );
};

export default WhiteSection;
