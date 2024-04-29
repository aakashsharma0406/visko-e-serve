import React from "react";
import logo from "../../assets/img/Visko_logo.png";
const Navbar = () => {
  return (
    <div>
      <header
        id="header"
        class="fixed-top  d-flex align-items-cente d"
        style={{ backgroundColor: "#" }}
      >
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
            <a href="index.html">
              <img
                src={logo}
                alt=""
                class="img-fluid"
                style={{ height: "700px", width: "50px", color: "white" }}
              />
            </a>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#menu">
                  Project
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a
            href="#book-a-table"
            class="book-a-table-btn scrollto d-none d-lg-flex"
          >
            Get Start
          </a>
        </div>
      </header>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                Welcome to <span>Visko E-Serve</span>
              </h1>
              <h2>A Vision Beyond Boundaries</h2>

              <div class="btns">
                <a href="#menu" class="btn-menu animated fadeInUp scrollto">
                  Get Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
