import React from 'react';
import "./individualRegisterPage.css"; // Import the CSS file

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
// import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";


const IndividualRegisterPage = () => {
  return (
  
    <div className="login-container">
      <section className="header-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3816a04fcc74163bada0a2cbd8666252a1c3d39e2c479cd0c439e054a756e8a9?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
          alt=""
          className="background-image"
        />
        <nav className="nav-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5579435fcea5352f7b3da9021f52f1cd4a3e8059c744d02a45317074cdbc09b3?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
            alt="VDrapp Logo"
            className="logo"
          />
          <div className="nav-menu">
            <div className="nav-links">
              <a href="#" className="nav-link">
                Find a Doctor
              </a>
              <a href="#" className="nav-link">
                Verify a Doctor
              </a>
              <a href="#" className="nav-link sos-link">
                SOS
              </a>
              <a href="#" className="nav-link">
                Home Delivery Medicines
              </a>
              <a href="#" className="nav-link">
                Micro Insurance
              </a>
              <a href="#" className="nav-link">
                Regular Insurance
              </a>
            </div>
          </div>
          <button className="login-button">Login/Signup</button>
        </nav>
        <div className="separator"></div>
        <div className="auth-tabs">
          <a href="http://localhost:5174/loginPage">
            <div className="change">Login</div>
          </a>
         <a href="http://localhost:5175/"> <div className="change">Register</div></a>
        </div>
      </section>

      <main className="main-content">
        <div className="content-wrapper">
          <div className="image-column">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07d1dfbb02eae67caa3e2cfdf5c9867238ca7e72eb515ca4ba7a5fa71896a65?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
              alt="Healthcare illustration"
              className="hero-image"
            />
          </div>
          <div className="form-column">
            <form className="login-form">
              <label htmlFor="userInput" className="input-label">
                Full Name
              </label>
              <input
                type="text"
                id="userInput"
                className="form-input"
                placeholder="Full Name"
              />

              <label htmlFor="userInput" className="input-label">
                Mobile Number/ Email ID
              </label>
              <input
                type="text"
                id="userInput"
                className="form-input"
                placeholder="Mobile Number / Email ID"
              />

              <label htmlFor="passwordInput" className="input-label">
                {" "}
                Create Password
              </label>
              <input
                type="password"
                id="passwordInput"
                className="form-input"
                placeholder="Password"
              />
              <div className="h1">Are you are a Doctor?</div>
              <a href="#" className="forgot-password">
                Click here
              </a>

              <button type="submit" className="submit-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="footer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
          alt=""
          className="background-image2"
        />
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-logo-column">
              <div className="footer-logo-wrapper">
                <img
                  src={VDrLogo}
                  alt="VDrapp Footer Logo"
                  className="footer-logo"
                />
                <div>
                  <div className="footer-brand">VDrapp</div>
                  <nav className="footer-links">
                    <a href="#" style={{ textDecoration: "none" }}>
                      About Us
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Blog
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Careers
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Press
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Contact Us
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="footer-nav-column">
              <div className="footer-nav-grid">
                <section className="footer-section">
                  <h2 className="footer-heading">For Patient</h2>
                  <nav className="footer-nav-links">
                    <a href="#" style={{ textDecoration: "none" }}>
                      Search for Doctors
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Search for Clinics
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Search for Hospitals
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr plus
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Read health articles
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Read about medicines
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Drive
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Health app
                    </a>
                  </nav>
                </section>
                <section className="footer-section">
                  <h2 className="footer-heading">For Doctors</h2>
                  <nav className="footer-nav-links">
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Profile
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      For Clinics
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Ray by VDr
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Pro
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Ray Tab
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Reach
                    </a>
                  </nav>
                </section>
                <section className="footer-section">
                  <h2 className="footer-heading">For Hospitals</h2>
                  <nav className="footer-nav-links">
                    <a href="#" style={{ textDecoration: "none" }}>
                      Insta by VDr
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Qikwell by VDr
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Profile
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Reach
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Drive
                    </a>
                  </nav>
                </section>
                <section className="footer-section">
                  <h2 className="footer-heading">More</h2>
                  <nav className="footer-nav-links">
                    <a href="#" style={{ textDecoration: "none" }}>
                      Help
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Developers
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Privacy Policy
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Terms & Conditions
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      PCS T&C
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Healthcare Directory
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      VDr Health Wiki
                    </a>
                  </nav>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndividualRegisterPage;
