import React, { useState } from "react";
import "./findDoctorPage.css";

import DoctorVerification from "./doctorVerificationpage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import Fotter from "../components/footer";

import indianStates from "../data/indianStates";
import doctorSelect from "../data/doctorSelect";

const FindDoctorPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [print, setPrint] = useState("Select State and Doctor to find doctors");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrint(`welcome ${selectedState} ${selectDoctor}`);
  };

  return (
    <>
      <div className="search-section">
        <form onSubmit={handleSubmit}>
          <div className="location-wrapper">
            <div className="location-input" role="search">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e5038e13b1be9080f0941a0b9f99ba3369e0afe7df7be02f721dfe4a71bc1d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
                className="location-icon"
                alt="Location icon"
              />
              <label htmlFor="location-search" className="visually-hidden">
                Search by location
              </label>
              <select
                id="location-search"
                className="location-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="" className="findDoctor-location-option">
                  Select State
                </option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="search-wrapper">
            <div className="search-input" role="search">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d907adf33f7d0fd47c62d89ac30bcc3a092e2eae4eedc005df53ec6c6d882fa0?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
                className="search-icon"
                alt="Search icon"
              />
              <label htmlFor="doctor-search" className="visually-hidden">
                Search for doctors, clinics, hospitals, or specializations
              </label>
              <select
                id="doctor-search"
                className="doctor-select"
                value={selectDoctor}
                onChange={(e) => setSelectDoctor(e.target.value)}
              >
                <option value="" className="findDoctor-search-option">
                  Select Doctor
                </option>
                {doctorSelect.map((doctor) => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="findDoctor-submit">
            Submit
          </button>
        </form>
        {print && <h1 className="findDoctor-print">{print}</h1>}
      </div>

    </>
  );
};

export default FindDoctorPage;
