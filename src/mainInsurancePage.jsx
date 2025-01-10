import React from "react";
import MainHeader from "./header";
import "./mainInsurancePage.css";

import Img2 from "./assets/Images/insurancePage/img2.jpg"

const MainInsurance = ()=>{
    return(
        <>
   <MainHeader/>
      <div className="mainInsurance-container">
        <nav className="mainInsurance-nav">
            <div className="mainInsurance-nav-div1">
                <h4>VDr <br />Insurance</h4>
                <p>with you always</p>
            </div>
          <div  className="mainInsurance-nav-div2">
            <ul>
                <li><a href="">Personal</a></li>
                <li><a href="">Business</a></li>
                <li><a href="">Renewal</a></li>
                <li><a href="">claim</a></li>
                <li><a href="">Support</a></li>
            </ul>
            </div>  
            <div  className="mainInsurance-nav-div3">My policy</div>
        </nav>
        <div className="mainInsurance-div">
        <div className="mainInsurance-div-imgdiv">
            <img src={Img2} alt="" />
        </div>
        <div className="mainInsurance-div-uldiv">
            <ul className="mainInsurance-div-uldiv-ul">
                <li><p>For details , Contact your nearest VDr Insurance Branch Office </p></li>
                <li>
                    <ul className="mainInsurance-div-uldiv-ul-ul">
                       <li> <p><b>Follow Us:</b></p></li>
                        <li><a href="">insta</a></li>
                        <li><a href="">facebook</a></li>
                        <li>
                            <a href="">google</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Email : Info@hiscope.com</h4>
                </li>
                <li>
                    <p> <b>Visit Us : </b> Prashanthi Hills Meerpet, Hyderabad, India</p>
                </li>
                <li>
                    <p> <b>Call Us : 123456789</b> <br />
                    Our team is available Monday to Friday,From 9 AM to 5 PM</p>
                </li>
                <li>
                    <button className="mainInsurance-div-uldiv-ul-btn">CLICK HERE <br />TO APPLY</button>
                </li>
            </ul>
        </div>
        </div>
        <div className="mainInsurance-div1">
            <p>
                <b>"Start Your Journey to Protection Today!"</b> 
                <br /> "It’s easy, quick, and tailored for you—start your protection journey now."
                </p>
                <p className="mainInsurance-div1-p">select your insurance</p>
        </div>
      </div>
      </>
    )
}

export default MainInsurance;