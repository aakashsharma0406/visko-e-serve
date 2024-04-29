import React from "react";
import logo from "../../assets/img/Visko_logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <img src={logo} alt="" style={{ height: "80px" }} />
            </div>
            <div class="footer-col">
              <h4> #Menus </h4>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#menu">Project</a>
                </li>
                <li>
                  <a href="#contact ">Contacts</a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fa fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
