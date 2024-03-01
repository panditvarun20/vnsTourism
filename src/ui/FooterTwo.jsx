import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const FooterTwo = () => {
  return (
    <div class="col-lg-4 col-md-12 pt-5 mb-5">
      <div class="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 class="text-light mb-0">Get In Touch</h3>
      </div>
      <div class="d-flex mb-2">
        <i class="bi bi-geo-alt text-primary me-2"></i>
        <p class="mb-0">123 Varanasi, Uttar Pradesh, India</p>
      </div>
      <div class="d-flex mb-2">
        <i class="bi bi-envelope-open text-primary me-2"></i>
        <p class="mb-0">varanasi1456@gmail.com</p>
      </div>
      <div class="d-flex mb-2">
        <i class="bi bi-telephone text-primary me-2"></i>
        <p class="mb-0">+91 9935846751</p>
        <br />
      </div>
      <div class="d-flex py-4">
        <a class="btn btn-primary btn-square me-2" href="#">
          <FaSquareXTwitter />
        </a>
        <a class="btn btn-primary btn-square me-2" href="#">
        <FaFacebook />
        </a>
        <a class="btn btn-primary btn-square me-2" href="#">
          <FaLinkedinIn />
        </a>
        <a class="btn btn-primary btn-square" href="#">
        <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default FooterTwo;
