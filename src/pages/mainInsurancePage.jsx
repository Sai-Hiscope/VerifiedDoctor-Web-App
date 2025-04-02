import React from "react";
import "./mainInsurancePage.css";
import { useNavigate } from "react-router-dom";

import Insurance from "./insurancePage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import Demo from "./demoPage";
import Fotter from "../components/footer";

import Img2 from "../assets/Images/insurancePage/img2.jpg";
import RegularInsuranceImg from "../assets/Images/insurancePage/img3.webp";
import MicroInsuranceImg from "../assets/Images/insurancePage/microInsuranceImg.png";
// import VDrLogo from "../assets/Images/commonImg/VDrLogo.png";

const MainInsurance = () => {
  const navigate = useNavigate();

  const handleInsurnaceType = () => {
    navigate("/insurancePage");
  };

  return (
    <>
      <MainHeader />
      <div className="mainInsurance-container">
        <nav className="mainInsurance-nav">
          <div className="mainInsurance-nav-div1">
            <h4>
              VDr <br />
              Insurance
            </h4>
            <p>with you always</p>
          </div>
          <div className="mainInsurance-nav-div2">
            <ul>
              <li>
                <a href="">Personal</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">Renewal</a>
              </li>
              <li>
                <a href="">claim</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </div>
          <div className="mainInsurance-nav-div3">My policy</div>
        </nav>
        <div className="mainInsurance-div">
          <div className="mainInsurance-div-imgdiv">
            <img src={Img2} alt="" />
          </div>
          <div className="mainInsurance-div-uldiv">
            <ul className="mainInsurance-div-uldiv-ul">
              <li>
                <p>
                  For details , Contact your nearest VDr Insurance Branch Office{" "}
                </p>
              </li>
              <li>
                <ul className="mainInsurance-div-uldiv-ul-ul">
                  <li>
                    {" "}
                    <p>
                      <b>Follow Us:</b>
                    </p>
                  </li>
                  <li>
                    <a href="">insta</a>
                  </li>
                  <li>
                    <a href="">facebook</a>
                  </li>
                  <li>
                    <a href="">google</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Email : Info@hiscope.com</h4>
              </li>
              <li>
                <p>
                  {" "}
                  <b>Visit Us : </b> Prashanthi Hills Meerpet, Hyderabad, India
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <b>Call Us : 123456789</b> <br />
                  Our team is available Monday to Friday,From 9 AM to 5 PM
                </p>
              </li>
              <li>
                <button className="mainInsurance-div-uldiv-ul-btn">
                  CLICK HERE <br />
                  TO APPLY
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainInsurance-div1">
          <p>
            <b>"Start Your Journey to Protection Today!"</b>
            <br /> "It’s easy, quick, and tailored for you—start your protection
            journey now."
          </p>
          <p className="mainInsurance-div1-p">select your insurance</p>
        </div>
        <div className="mainInsurance-div2">
          <ul>
            <li>
              {" "}
              <h5>Regular Insurance</h5>
              <div className="mainInsurance-div2-div-img">
                {" "}
                <img src={RegularInsuranceImg} alt="RegularInsuranceImg" />
              </div>
              <h4>"Secure your future today, for peace of mind tomorrow."</h4>
              <div className="mainInsurance-div2-div-p">
                <p>
                  Regular insurance ensures you’re covered against unexpected
                  events, giving you financial security for whatever comes your
                  way <a href="">Read More...</a>
                </p>
                <button
                  className="mainInsurance-div2-div2-btn"
                  onClick={handleInsurnaceType}
                >
                  CLICK HERE <br />
                  TO APPLY
                </button>
              </div>
            </li>
            <li>
              <h5>Micro Insurance</h5>
              <div className="mainInsurance-div2-div-img">
                {" "}
                <img src={MicroInsuranceImg} alt="MicroInsuranceImg" />{" "}
              </div>
              <h4>
                "A little insurance goes a long way—start small, feel secure."
              </h4>
              <div className="mainInsurance-div2-div-p">
                <p>
                  Micro insurance offers small, affordable plans that provide
                  important protection without breaking the bank.{" "}
                  <a href="">Read More...</a>
                </p>
                <button
                  className="mainInsurance-div2-div2-btn"
                  onClick={handleInsurnaceType}
                >
                  CLICK HERE <br />
                  TO APPLY
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div>
          {/* footer */}
          <Fotter value="1100px" />
        </div>
      </div>
    </>
  );
};

export default MainInsurance;
