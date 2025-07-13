import React from "react";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import MdPadding from "../components/common/MdPadding";

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navigation />
      <div className="relative">{children}</div>
      <MdPadding />
      <Footer />
    </div>
  );
};

export default DefaultLayout;