import React from "react";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import FooterFour from "./FooterFour";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row gx-5">
          <FooterOne />
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
          <FooterTwo />
          <FooterThree />
          <FooterFour />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
