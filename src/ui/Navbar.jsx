import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3 py-lg-0">
        <NavLink to="index.html" className="navbar-brand p-0">
          <h1 className="m-0">
            <img src="india/Logos.png" className="w-75" alt="" srcset="" />
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink to="index.html" className="nav-item nav-link active">
              Home
            </NavLink>
            <NavLink to="about_us.html" className="nav-item nav-link">
              About Us
            </NavLink>
            <NavLink to="tourist-places.html" className="nav-item nav-link">
              Tourist Places
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="index.html"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                History
              </NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to="history.html" className="dropdown-item">
                  History
                </NavLink>
                <NavLink to="excursions.html" className="dropdown-item">
                  Excursions
                </NavLink>
              </div>
            </div>
            <div className="nav-item dropdown">
              <NavLink
                to="photo_gallery.html"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Gallery
              </NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to="ganga_aarti.html" className="dropdown-item">
                  Ganga Aasrti
                </NavLink>
                <NavLink to="aasi_ghat.html" className="dropdown-item">
                  Assi Ghat
                </NavLink>
                <NavLink to="sarnath.html" className="dropdown-item">
                  Sarnata Tempal
                </NavLink>
                <NavLink to="kashi_vishwanath.html" className="dropdown-item">
                  Kashi Vishwanath Tempal
                </NavLink>
                <NavLink to="bhu.html" className="dropdown-item">
                  Banaras Hindu University
                </NavLink>
              </div>
            </div>
            <NavLink to="contact.html" className="nav-item nav-link">
              Contact Us
            </NavLink>
          </div>
          <div className="text-center">
            <butaton
              type="button"
              className="btn text-primary ms-3 text-center"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search d-flex"></i>
            </butaton>
            <NavLink
              to="index.html"
              className="btn btn-primary py-2 px-4 ms-3 rounded-3 text-center"
            >
              Go To Visit
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
