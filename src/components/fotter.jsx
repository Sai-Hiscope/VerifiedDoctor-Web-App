import React from 'react';
import './fotter.css';
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";

const Fotter = (props) =>{
   

    const value= props.value;
    const number = value;

    return(
         <footer className="footer" style={{top:number}}>
              
                <div className="footer-div1">
                  <img src={VDrLogo} alt="VDrapp Footer Logo" className="footer-logo" />
                </div>
                <div className="footer-copyright"><h6> @Hiscope 2024 </h6></div>
              </footer>
    )

}

export default Fotter;

