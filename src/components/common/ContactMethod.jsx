import React from "react";

const ContactMethod = ({ icon, title, value }) => {
  return (
    <div
      className="bg-primary p-3 d-flex gap-4"
      style={{ borderRadius: "24px" }}
    >
      <img src={icon} />
      <div className="text-white d-flex flex-column justify-content-center">
        <small>{title}</small>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default ContactMethod;
