import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import "../index.css";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import headerImages from "../data/headerImages";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";


const MainHeader = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [position, setPosition] = useState(0);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerHeight);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % headerImages.length);
      setPosition((prev) => (prev + 20) % 100); // Scrolls in steps
    }, 5000); // Change image every 5 seconds

    const updateWidth = () => setWindowWidth(window.innerWidth);
    {
      /* remove this when pushing to production */
    }
    window.addEventListener("resize", updateWidth);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/loginPage");
  };
  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="header-section">
      <button className="toggle-button" onClick={toggleSlide}>
      {isOpen?<IoReorderThreeOutline /> : <ImCross className="secicon" />}
      </button>
      <div
        className="header-background"
        style={{
          backgroundImage: `url(${headerImages[currentImage].img})`,
          backgroundPosition: `right ${position}% top 0%`, // Scrolls horizontally
        }}
      ></div>
      <nav className="nav-container">
        <Link to="/">
          <img src={VDrLogo} alt="VDrapp Footer Logo" className="header-logo" />
        </Link>
        <div className="nav-menu">
          <div className={isOpen? "nav-links-open" : "nav-links"}>
            <Link to="/findDoctorPage" className="nav-link">
              Find a Doctor
            </Link>
            <Link to="/verifyDoc" className="nav-link">
              Verify Doc
            </Link>
            <Link to="/sosPage" className="nav-link sos-link">
              SOS
            </Link>
            <Link to="https://vdr-door-delivery-medicines.netlify.app/" className="nav-link">
              Doorstep Meds
            </Link>
            <Link to="https://vdr-insurance.netlify.app/" className="nav-link">
              Insurance
            </Link>
            <Link to="/founderPage" className="nav-link">
              Founder Page
            </Link>
            <Link to="/QRCodeGenerator" className="nav-link">
              QRCode Generator
            </Link>
            {/* <div className="nav-link">width :{windowWidth}px</div>remove this when pushing to production */}
            <button className="login-button-header" onClick={handleLoginClick}>
              Login/Signup
            </button>
          </div>
        </div>
      </nav>
      
        
    </section>
    
  );
};

export default MainHeader;
