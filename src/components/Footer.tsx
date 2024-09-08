import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto px-[1.25rem] py-[2rem] text-center md:flex md:max-w-[1440px] md:justify-between">
      <h5>&copy; {new Date().getFullYear()}. All Rights Reserved.</h5>
      <h5>Designed & Developed by Andrew.</h5>
    </div>
  );
};

export default Footer;
