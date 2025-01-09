import React, { useState, useEffect } from "react";
import "./Home.css"

import MAinHeader from "./header";

import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import HomeDeliveryMedicine from "./demoPage";

// image imports

import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";
import GooglePlayLogo from "./assets/icons/apps/googleplay.png";
import AppStoreLogo from "./assets/icons/apps/applestore.png";

import CardiologistImg from "./assets/Images/commonImg/Cardiologist.png";
import GynaecologistImg from "./assets/Images/homeImg/gynaecologist.png";
import DentistImg from "./assets/Images/homeImg/Dentist.png";
import GastroenterologistImg from "./assets/Images/homeImg/Gastrologist.png";
import OrthopedistImg from "./assets/Images/homeImg/Orthopedist.png";
import DiagnosticsImg from "./assets/Images/homeImg/Diagnostics.png";
import DermatologistImg from "./assets/Images/homeImg/Dermatologist.png";
import GeneralPhysicianImg from "./assets/Images/homeImg/general physicians.png";
import NeurologistImg from "./assets/Images/homeImg/Neurologist.png";
import PhysiotherapistImg from "./assets/Images/homeImg/physiotherapist.png";
import PediatricianImg from "./assets/Images/homeImg/Pediatrician.png";
import PulmonologistImg from "./assets/Images/homeImg/pulmonologist.png";



function Homepage() {
  console.log("Contact Page Rendered");
  // Function to handle button click
  const handleButtonClick = (store) => {
    alert(`Redirecting to ${store}`);
    // Add your redirection logic here
  };

   // Define state for country, state, and search input
   const [country, setCountry] = useState('');
   const [selectedState, setSelectedState] = useState('');
   const [searchQuery, setSearchQuery] = useState('');
   const [filteredDoctors, setFilteredDoctors] = useState([]);
 
   // States for India and USA
   const states = {
     india: [
       "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
       "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
       "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
       "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
     ],
     usa: [
       "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina",
       "Michigan", "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee",
       "Indiana", "Missouri", "Maryland", "Wisconsin"
     ]
   };
 
   // List of doctor types
   const doctorTypes = [
     "Dentist", "Cardiologist", "Dermatologist", "Pediatrician", "Orthopedic", "General Physician", 
     "ENT Specialist", "Gynecologist", "Urologist", "Neurologist", "Psychiatrist", "Oncologist", "Gastroenterologist"
   ];
 
   // Update state dropdown based on selected country
   const updateStates = (e) => {
     setCountry(e.target.value);
     setSelectedState('');
   };
 
   // Filter doctor types based on search query
   const handleSearchChange = (e) => {
     const query = e.target.value;
     setSearchQuery(query);
 
     // Filter doctor types based on query
     if (query) {
       const filtered = doctorTypes.filter(doctor =>
         doctor.toLowerCase().includes(query.toLowerCase())
       );
       setFilteredDoctors(filtered);
     } else {
       setFilteredDoctors([]);
     }
   };
 
   // Select doctor type from suggestions
   const selectDoctorType = (doctor) => {
     setSearchQuery(doctor);
     setFilteredDoctors([]); // Hide suggestions after selection
   };
  const slidesData = [
    {
      title: "Cardiologist",
      img: CardiologistImg,
      description: "Expert Care for a Healthier Heart",
    },
    {
      title: "Gynaecologist",
      img: GynaecologistImg,
      description: "Women's health, expert care",
    },
    {
      title: "Dentist",
      img: DentistImg,
      description: "Strong Teeth,Bright Smiles",
    },
    {
      title: "Gastroenterologist",
      img: GastroenterologistImg,
      description: "Digestive health, better comfort",
    },
    {
      title: "Orthopedist",
      img: OrthopedistImg,
      description: "Stronger bones, better mobility",
    },
    {
      title: "Diagnostics",
      img: DiagnosticsImg,
      description: "Precise tests, accurate results.",
    },
    {
      title: "Dermatologist",
      img: DermatologistImg,
      description: "Healthy skin, glowing confidence",
    },
    {
      title: "General Physician",
      img: GeneralPhysicianImg,
      description: "Comprehensive care, healthy living",
    },
    {
      title: "Neurologist",
      img: NeurologistImg,
      description: "Your brain, our priority",
    },
    {
      title: "Physiotherapist",
      img: PhysiotherapistImg,
      description: "Restoring movement,improving life",
    },
    {
      title: "Pediatrician",
      img: PediatricianImg,
      description: "Caring for children's wellness",
    },
    {
      title: "Pulmonologist",
      img: PulmonologistImg,
      description: "Breathing easy, health restored",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slidesData.length - slidesToShow ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slidesData.length - slidesToShow
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => setCurrentIndex(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // doctoropinio

  const [activeSlides, setActiveSlides] = useState("doctor");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const doctorSlides = [
    "Detailed medical explanation about health care.",
    "Expert advice on how to maintain a healthy lifestyle.",
    "Tips on managing chronic conditions effectively.",
  ];

  const patientSlides = [
    "Real-life experience with the treatment process.",
    "How the treatment helped improve my quality of life.",
    "Personal journey with the doctors and staff.",
  ];

  const slides = activeSlides === "doctor" ? doctorSlides : patientSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides]);

  const showSlides = (type) => {
    setActiveSlides(type);
    setCurrentSlideIndex(0); // Reset to the first slide when switching
  };

  return (
    <>
    <MAinHeader/>
      <>

              {/* Login/Signup Button (Right Side)
              <div className="auth-buttons">
                <button className="login-btn" onClick={handleButtonClick}>
                  Login/Sign Up
                </button>
              </div> */}
        
      </>

      {/* padding part */}
      <>
        <div className="moving-text-container">
          <p className="moving-text">
            With our Verified Doctor app, your health is always within reach.
          </p>
        </div>
      </>

      {/* Dropdown Part */}

      <>
                <div >
          {/* Dropdown for country and state */}
          <div className="dropdown-container">
            <div className="input-container">
              <select id="country" value={country} onChange={updateStates}>
                <option value="">Location</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <select id="state" value={selectedState} disabled={!country}>
              <option value="">Select a state</option>
              {country &&
                states[country].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>

          {/* Search input for doctor types */}
          <div className="search-container2">
            <div className="search-icon"></div>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search doctors, clinics, hospitals, etc."
              autoComplete="off"
            />
            {filteredDoctors.length > 0 && (
              <div id="dropdown" className="dropdown">
                {filteredDoctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => selectDoctorType(doctor)}
                  >
                    {doctor}
                  </div>
                ))}
              </div>
            )}
          </div>
  

          
        </div>
      </>

      {/* DropSlider */}

      <>
        <div className="experts-moving-cont">

        {/* Heading */}
          <div className="homediv-h1">
            <h1>
              Get Expert Medical Care Online or In-Clinic for Any Health Need
            </h1>
          </div>
        <div className="slider">
          <div className="slides-container">
            <div
              className="slides"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
                gridTemplateColumns: `repeat(${slidesData.length}, 1fr)`,
              }}
            >
              {slidesData.map((slide, index) => (
                <div className="slide" key={index}>
                  <div className="text-above">{slide.title}</div>
                  <img src={slide.img} alt={slide.title} />
                  <div className="text-below">{slide.description}</div>
                  <div className="buttons">
                    <button className="blue-button">Online</button>
                    <button className="pink-button">Clinic</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="nav-buttons">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === slidesData.length - slidesToShow}
            >
              &#10095;
            </button>
          </div>
        </div>
        </div>
      </>

      

      {/* doctoropinion */}
      <>
        <div className="body3">
          <div className="container3">
            {/* Option Buttons */}
            <div className="option-buttons3">
              <button onClick={() => showSlides("doctor")}>
                Doctor's Opinion
              </button>
              <button onClick={() => showSlides("patient")}>
                Patient's Opinion
              </button>
            </div>

            {/* Header Text */}
            <div className="header-text3">
              {activeSlides === "doctor"
                ? "Opinions from Our Doctors"
                : "Opinions from Our Patients"}
            </div>

            {/* Slides */}
            <div className="slides-container3">
              <div className="slide3">{slides[currentSlideIndex]}</div>
            </div>
          </div>
        </div>
        {/* lastpart */}
        <div className="body4">
          <div className="container4">
            <div className="preview">
              <img
                src={VDrLogo}
               height="400px"
                width="900px"
                alt="App Preview"
              />
            </div>
            <div className="info">
              <h2 className="title">Download VDr app</h2>
              <p className="description">
                Consult with India's top doctors via video on VDr app. Get 24/7
                access to healthcare.
              </p>
              <div className="store-buttons">
                <div className="store-button">
                  <img
                    src={GooglePlayLogo}
                     alt="Google Play Store"
                  />
                </div>
                <div className="store-button">
                  <img src={AppStoreLogo}  
                     alt="Apple app Store"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Footer */}
    <footer className="home-footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="home-background-image-footer"/>

  <div className="home-footer-div1">
  <img
          src={VDrLogo}
          alt="VDrapp Footer Logo"
          className="home-footer-logo"
        />
 </div>
 <div className="home-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
      </>
    </>
  );
}

export default Homepage;
