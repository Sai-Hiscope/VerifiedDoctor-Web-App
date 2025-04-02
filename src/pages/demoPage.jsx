import React from "react";
import "./demoPage.css";
import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import Fotter from "../components/footer";

// import MainHeader from "./header";
const HomeDeliveryMedicine = () => {
  return (
    <>
      <MainHeader />

      <div
        className="home-delivery-medicine-container"
        style={{ color: "black" }}
      >
        <h1 className="bounce">COMING SOON....</h1>
      </div>
      <div className="home-delivery-medicine-logo">
        <img src={VDrLogo} alt="VDr-logo" />
      </div>

      <Fotter value="700px" />
    </>
  );
};

export default HomeDeliveryMedicine;
