import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation

import "./headerFooter.css";
import Login from "./loginPage";
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";

const LoginButtonClick = () => {
  window.location.href = "./loginPage";
};

const MainHeader = () => {
  return (
    <>
      <div className="login-container">
        <section className="header-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3816a04fcc74163bada0a2cbd8666252a1c3d39e2c479cd0c439e054a756e8a9?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            alt="logo"
            className="background-image-header"
          />
          <nav className="nav-container">
            <Link to="/">
              <img
                src={VDrLogo}
                alt="VDrapp Footer Logo"
                className="header-logo"
              />
            </Link>
            <div className="nav-menu">
              <div className="nav-links">
                <Link to="/findDoctorPage" className="nav-link">Find a Doctor</Link>
                <Link to="/doctorVerificationpage" className="nav-link">Verify a Doctor</Link>
                <Link to="/sosPage" className="nav-link sos-link">SOS</Link>
                <Link to="/doctorProfilePage" className="nav-link">Home Delivery Medicines</Link>
                <Link to="/insurancePage" className="nav-link">Micro Insurance</Link>
                <Link to="/demoPage" className="nav-link">Regular Insurance</Link>
                <Link to="/founderPage" className="nav-link">Founder Page</Link>
              </div>
            </div>
            <button className="login-button-header" onClick={LoginButtonClick}>Login/Signup</button>
          </nav>
        </section>
      </div>
    </>
  );
};

export default MainHeader;