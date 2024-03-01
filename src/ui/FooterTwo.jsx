import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const FooterTwo = () => {
  return (
    <div className="col-lg-4 col-md-12 pt-5 mb-5">
      <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="text-light mb-0">Get In Touch</h3>
      </div>
      <div className="d-flex mb-2">
        <i className="bi bi-geo-alt text-primary me-2"></i>
        <p className="mb-0">123 Varanasi, Uttar Pradesh, India</p>
      </div>
      <div className="d-flex mb-2">
        <i className="bi bi-envelope-open text-primary me-2"></i>
        <p className="mb-0">varanasi1456@gmail.com</p>
      </div>
      <div className="d-flex mb-2">
        <i className="bi bi-telephone text-primary me-2"></i>
        <p className="mb-0">+91 9935846751</p>
        <br />
      </div>
      <div className="d-flex py-4">
        <a className="btn btn-primary btn-square me-2" href="#">
          <FaSquareXTwitter />
        </a>
        <a className="btn btn-primary btn-square me-2" href="#">
        <FaFacebook />
        </a>
        <a className="btn btn-primary btn-square me-2" href="#">
          <FaLinkedinIn />
        </a>
        <a className="btn btn-primary btn-square" href="#">
        <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default FooterTwo;
