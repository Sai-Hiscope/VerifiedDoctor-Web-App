import React from "react";
import './ourFoundersPage.jsx.css';
import MainHeader from "./header";

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";


// Image imports

import Anji from "./assets/Images/foundersImg/anji.jpg";
import Alekhya from "./assets/Images/foundersImg/alekhya.jpg";
import Bhadru from "./assets/Images/foundersImg/bhadru.jpg";
import Durga from "./assets/Images/foundersImg/Durga.jpg";
import Kiran from "./assets/Images/foundersImg/kiran.jpg";
import Mohan from "./assets/Images/foundersImg/mohan.jpg";
import Pavan from "./assets/Images/foundersImg/Pavan P.jpg";
import Praveen from "./assets/Images/foundersImg/Praveen.jpg";
import Sai from "./assets/Images/foundersImg/sai.jpg";
import Sandeep from "./assets/Images/foundersImg/sandeep.jpg";
import SaiSakth from "./assets/Images/foundersImg/SaiSakth.jpg";
import Shiva from "./assets/Images/foundersImg/Shiva.jpg";
import Vyshanavi from "./assets/Images/foundersImg/Vaishanavi.jpg";
// Add more imports as needed

const FounderPage = () => {
    return (
        <>
        <MainHeader />
        <>
        <div className="founderPage-main">
            <div class="founderpage-founder">
            <div class="founderpage-founder-div-img">
             <img class="founderpage-founder-img" src={Sai} alt="Sai Madiraju   "/>
             </div>
                <h2 className="founderpage-founder-h2"> Sai Madiraju <br />Founder & CEO</h2>
                <ul className="founderpage-founder-ul">
                    <li>
                          Founder Of : Hiscope Cyberlinks<br />
                         EVAAP (Employment Verification and Academic Proofing)<br/>
                         VDr(Verified Doctor)<br />
                    </li>
                </ul>
            </div>
           
            <h2 className="founderpage-developer-h2"> DEVELOPER'S </h2>
      <div className="founderpage-developers">
        
                <ul className="founderpage-developers-ul">
                <ul className="founderpage-developers-ul-ul">
                 <li><img src={Anji} alt="Anjaneyulu kadari" />
                <h3>Anjaneyulu kadari</h3>
                 Software Developer, <br /> Digital Marketing
                    </li>
                    <li>
                <img src= {Alekhya}alt="Alekhya Padala" />
                <h3>Alekhya Padala</h3>
                 Java Developer
                </li>
            <li>
            <img src= {Bhadru}alt="Bhadru Lotavath" />
            <h3>Bhadru Lotavath</h3>
            Java Developer
            </li>
            <li>
            <img src= {Durga}alt="Durga Prasad" />
            <h3>Durga Prasad</h3>
            Finance Department
            </li>
        </ul>
        <ul className="founderpage-developers-ul-ul">
            <li><img src= {Kiran}alt="KiranVenkat Bishetti" />
            <h3>KiranVenkat Bishetti</h3>
            Software Developer
            </li>
            <li>
            <img src= {Mohan}alt="Mohan Bishetti" />
            <h3>Mohan Bishetti</h3>
            Data Analyst, <br /> Designer
            </li>
            <li>
            <img src= {Praveen}alt="Praveen Puvvala" />
            <h3>Praveen Puvvala</h3>
            Java Developer
            </li>
            <li>
            <img src= {Shiva}alt="Shiva Banoth" />
            <h3>Shiva Banoth</h3>
            Full Stack Developer
            </li>
        </ul>
        <ul className="founderpage-developers-ul-ul">
            <li><img src= {Sandeep}alt="Sandeep M" />
            <h3>Sandeep Kumar M</h3>
            Full Stack Developer
            </li>
            <li>
            <img src= {SaiSakth}alt="Sai Saketh" />
            <h3>Sai Saketh</h3>
            Data Engineer
            </li>
            <li>
            <img src= {Vyshanavi}alt="Vaishnavi G" />
            <h3>Vaishnavi G</h3>
            Full Stack Developer
            </li>
            <li>
            <img src= {Pavan}alt="Pavan P" />
            <h3>Pavan P</h3>
                 Team Lead
            </li>
        </ul>
       </ul>
       
      </div> 
       </div>
     

  </>

  
          {/* Footer PART */}

          <footer className="founderPage-footer">
            <img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="founderPage-background-image-footer"/>

  <div className="founderPage-footer-div1">
  <img
          src={VDrLogo}
          alt="VDrapp Footer Logo"
          className="founderPage-footer-logo"
        />
 </div>
 <div className="founderPage-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
  </>
        
    );
}

export default FounderPage;
