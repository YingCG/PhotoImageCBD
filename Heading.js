import React from "react";

const Heading = () => {
  return (
    <div className="header">
      <a className="logo" href="/">
        <img src="/service_icon/PhotoImageLogo.svg" alt="Company Logo" />
      </a>
      <div className="topnav">
        <a href="/ourService">Our Service</a>
        <a href="/contact">Contact</a>
        <a href="/PhotoAssistance">Photo Assistance</a>
      </div>
      <a className="onlinelogo" href="/orderOnline">
        <img src="/service_icon/OrderOnline.svg" alt="Order Online!" />
      </a>
    </div>
  );
};
export default Heading;
