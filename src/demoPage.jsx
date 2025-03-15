import React from "react";
import './demoPage.css';
import MainHeader from "./header";

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";


// import MainHeader from "./header";
const HomeDeliveryMedicine = () => {
    return(
        <>
        <MainHeader />

        <div className="home-delivery-medicine-container"  style={{color: "black"}}>
          
           <h1  className="bounce" >COMING SOON....</h1>
        </div>
        <div className="home-delivery-medicine-logo">
            <img src={VDrLogo} alt="VDr-logo" />
        </div>


        <footer className="demo-footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="demo-background-image-footer"/>

  <div className="demo-footer-div1">
  <img
         src={VDrLogo}
            alt="VDrapp Footer Logo"
          className="demo-footer-logo"
        />
 </div>
 <div className="demo-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
        </>


    )
}

export default HomeDeliveryMedicine;