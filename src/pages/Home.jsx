


///Tailwind css used in this region



import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// image imports
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import GooglePlayLogo from "../assets/icons/apps/googleplay.png";
import AppStoreLogo from "../assets/icons/apps/applestore.png";
import CardsSlider from "../components/cardsSlider";
import indiaUsaStates from "../data/indiaUsaStates";
import doctorCategories from "../data/doctorCategories";
function Homepage() {
  const [isHomePageRendered, setIsHomePageRendered] = useState(false);

  useEffect(() => {
    console.log("Home Page Rendered");
    setIsHomePageRendered(true);
  }, []);

  // Function to handle button click
  const handleButtonClick = (store) => {
    alert(`Redirecting to ${store}`);
    // Add your redirection logic here
  };

  // Define state for country, state, and search input
  const [country, setCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // States for India and USA

  // List of doctor types

  // Update state dropdown based on selected country
  const updateStates = (e) => {
    setCountry(e.target.value);
    setSelectedState("");
  };

  // Filter doctor types based on search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter doctor types based on query
    if (query) {
      const filtered = doctorCategories.filter((doctor) =>
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
      <div className="homepage-container flex flex-col justify-center items-center">
        <Link to="/findDoctorPage">
          <div className="searchbar-container">
            <input
              type="text"
              placeholder="Search for Doctors near by you"
              className="searchbar-input"
            />
            <button className="searchbar-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="searchbar-icon"
              >
                <path d="M10 2a8 8 0 105.29 14.29l4.31 4.31a1 1 0 001.41-1.41l-4.31-4.31A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </button>
          </div>
        </Link>

        {/* Cards Slider Section */}
        <div className="slideSec">
          <CardsSlider />
        </div>

        {/* Opinion Section */}
        <div
          className="opinion-container bg-neutral-200 w-3/4 h-90 flex flex-col justify-around items-center p-2
         rounded-2xl "
        >
          <div className="buttonapos">
            <button
              onClick={() => showSlides("doctor")}
              className="cursor-pointer p-2 rounded-sm ease-in-out hover:bg-gray-900  hover:text-amber-50 "
            >
              Doctor's Opinion
            </button>
            <button
              onClick={() => showSlides("patient")}
              className="cursor-pointer p-2 rounded-sm ease-in-out hover:bg-gray-900  hover:text-amber-50 "
            >
              Patient's Opinion
            </button>
          </div>
        

          <div className="opinion-header text-2xl">
            {activeSlides === "doctor"
              ? "Opinions from Our Doctors"
              : "Opinions from Our Patients"}
          </div>

          <div className="opinion-slides text-3xl">
            <div className="opinion-slide">{slides[currentSlideIndex]}</div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="download-container m-8 w-3/4 flex justify-evenly  items-center p-2 rounded-2xl">
          <div className="app-preview">
            <img src={VDrLogo} height="400px" width="900px" alt="App Preview" />
          </div>
          <div className="app-info">
            <h2 className="app-title">Download VDr App</h2>
            <p className="app-description">
              Consult with India's top doctors via video on VDr app. Get 24/7
              access to healthcare.
            </p>
            <div className="store-buttons">
              <div className="store-button">
                <Link>
                  <img src={GooglePlayLogo} alt="Google Play Store" />
                </Link>
              </div>
              <div className="store-button">
                <Link>
                  <img src={AppStoreLogo} alt="Apple App Store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
