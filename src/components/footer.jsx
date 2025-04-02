import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo-section">
        <Link to="/">
          <img src={VDrLogo} alt="VDr Logo" className="footer-logo" />
        </Link>
      </div>
      

      <div className="footer-bottom">
      <p className="footer-description">
        VDr is committed to connecting you with top healthcare professionals.
      </p>
        <p>&copy; {new Date().getFullYear()} VDr. All Rights Reserved.</p>
      </div>
      <div className="footer-social">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
