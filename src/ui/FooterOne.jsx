import React from "react";

const FooterOne = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 text-white"></h1>
        </a>
        <p className="mt-3 mb-4">
          Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet
          eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat
          lorem stet eos. Diam amet et kasd eos duo.
        </p>
        <form action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-white p-3"
              placeholder="Your Email"
            />
            <button className="btn btn-dark">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterOne;
