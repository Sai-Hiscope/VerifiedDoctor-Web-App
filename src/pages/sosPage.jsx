import React, { useState, useRef } from "react";
import "./sosPage.css";
import Header from "../components/header";

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import Fotter from "../components/footer";

const SosPage = () => {
  const [count, setCount] = useState("Double click");
  const [sosActive, setSosActive] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const[infoMessege,setInfoMessege]=useState("");
  const audioRef = useRef(null);
  const countdownRef = useRef(null); // Ref to keep track of countdown interval

  const handleDoubleClick = () => {
    let i = 5;
    setCountdownStarted(true);
    countdownRef.current = setInterval(() => {
      if (i >= 0) {
        setCount(i);
        i--;
      } else {
        clearInterval(countdownRef.current);
        setCount("SOS Activated");
        setInfoMessege("Your SOS has been activated. Contacting emergency services... and your family members");
        setSosActive(true);
        playMusic();
        setCountdownStarted(false); // Ensure countdown state is reset
      }
    }, 1000); // Decrease count every 1 second
  };

  const playMusic = () => {
    audioRef.current = new Audio("./emergency-alarm-69780.mp3"); // Ensure the path to your music file is correct
    audioRef.current.loop = true; // Loop the audio
    audioRef.current.play();
  };

  const stopSos = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to the beginning
    }
    clearInterval(countdownRef.current); // Clear countdown interval
    setSosActive(false);
    setCountdownStarted(false);
    setCount("Double click");
    setInfoMessege("")
  };

  return (
    <>
      {/* <Header /> */}

      {/* SOS part */}
      <div className="sos-container">
        <div className="div1">
          <button className="div1_btn" onDoubleClick={handleDoubleClick}>
            {count}
          </button>
        </div>
        <h2 className="div1-h2">SOS EMERGENCY</h2>
        <div className="infoMessege">{infoMessege}</div>
        {(sosActive || countdownStarted) && (
          <>
            <button className="stop_btn " onClick={stopSos}>
              ❌
            </button>
          </>
        )}
      </div>

      {/* Footer */}
    </>
  );
};

export default SosPage;
