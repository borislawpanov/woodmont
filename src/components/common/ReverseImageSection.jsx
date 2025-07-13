import React from "react";

const ReverseHomeImageSection = ({ illustration, title, description }) => {
  return (
    <div className="d-flex align-items-center flex-column flex-lg-row gap-5">
      <div style={{ flex: "1" }}>
        <h2>{title}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div style={{ flex: "1" }}>
        <img className="w-100" src={illustration} alt="" />
      </div>
    </div>
  );
};

export default ReverseHomeImageSection;
