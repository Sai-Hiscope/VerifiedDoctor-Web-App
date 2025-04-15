import React, { useState, useEffect } from "react";
import "./findDoctorPage.css";

import Header from "../components/header";
import DoctorVerification from "./doctorVerificationpage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import Fotter from "../components/footer";
import DoctorId from "./doctorID";
import { useNavigate } from "react-router-dom";

const GET_DOCTOR_API_URL = "http://localhost:2003/api/doctors/getdoctors";


const FindDoctorPage = () => {
  const defaultDoctor = {
    id: 1,
    fullName: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: "10 years",
    location: "New York",
    rating: 9.5,
    doctorPhoto: null, 
  }
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState(null);


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(GET_DOCTOR_API_URL);
        const data = await response.json();
        setDoctors(data);
        console.log("Fetched doctors:", data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedState === "" || doctor.location.includes(selectedState))
  );

  const doctorProfile = (doctor) => {
    alert("Doctor Profile Clicked!");
    navigate(`/doctorID/${doctor.id}`, { state: { doctor } });
  }
  return (
    <>
      <div className="header-placeholder"></div>
      <div className="main-container">
        <div className="search-bar-container1">
          <input
            type="text"
            placeholder="Search by specialization"
            className="specialization-search1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="state-dropdown"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">Delhi</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
        </div>

        <div className="doctor-list">
          {loading ? (
            <p>Loading doctors...</p>
          ) : filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card" onClick={() => doctorProfile(doctor)}>
               <img
                  src={`data:image/jpeg;base64,${doctor.doctorPhoto}`}
                    alt={`Dr. ${doctor.fullName}`}
                   className="doctor-image"
               />

                <div className="doctor-info">
                  <p>Dr. {doctor.fullName}</p>
                  <p>{doctor.specialization}</p>
                  <p>{doctor.experience}</p>
                  <p>{doctor.location}</p>
                  <p>⭐ {doctor.rating} / 10</p>
                </div>
                <button className="book-btn">Book Appointment</button>
              </div>
            ))
          ) : (
            <p className="no-results">
              No doctors found. Please refine your search.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FindDoctorPage;
