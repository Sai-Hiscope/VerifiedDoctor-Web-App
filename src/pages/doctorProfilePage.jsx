import React, { useState } from "react";
import "./doctorProfilePage.css";

//images import
import Appointments from "../assets/Images/doctorprofilepage/appoitment1.png";
import patientrecord from "../assets/Images/doctorprofilepage/patientrecord.png";
import doctor from "../assets/Images/doctorprofilepage/doctor.png";

const DoctorProfilePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAppointmentsModalOpen, setAppointmentsModalOpen] = useState(false);
  const [isPatientRecordModalOpen, setPatientRecordModalOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };
  const closeNav = () => {
    setSidebarOpen(false);
  };
  const openAppointments = () => {
    setAppointmentsModalOpen(true);
  };
  const closeAppointments = () => {
    setAppointmentsModalOpen(false);
  };
  const openPatientRecord = () => {
    setPatientRecordModalOpen(true);
  };
  const closePatientRecord = () => {
    setPatientRecordModalOpen(false);
  };
  const navigateToAnotherPage = () => {
    window.location.href = "practice.html";
  };

  return (
    <div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} id="mySidebar">
        <a href="javascript:void(0)" onClick={closeNav}>
          × Close
        </a>
        <a href="#" onClick={openAppointments}>
          Appointments
        </a>
        <a href="#" onClick={openPatientRecord}>
          Patient record{" "}
        </a>
        <a href="#">Earnings</a>
        <a href="#">Calender</a>
        <a href="#">Reports</a>
        <a href="#">Setting</a>
      </div>

      {/* Main Content */}
      <div className="appoitment-container1">
        <p className="text">
          Welcome Doctor saikrishna <span style={{ color: "red" }}></span>
        </p>
        <p className="text1">
          Whatever you do, do with determination. You have one life to live, do
          your work with passion and give your best.
        </p>
        <img className="image-container1" src={doctor} alt="doctor" />
      </div>

      <div className="appoitment-container2">
        <p className="text3">Total appointments </p>
        <p className="text4">15,456</p>
      </div>

      {/* Modals */}
      {isAppointmentsModalOpen && (
        <div id="AppointmentsModal" className="modal">
          <div className="modal-header">Appointments</div>
          <div className="modal-content">
            <li>
              <p className="bold">Name</p>
              <p className="bold">Date</p>
              <p className="bold">Time</p>
              <p className="bold">Status</p>
            </li>
            <li className="color-change">
              <p>Kiran</p>
              <p>01/06/2025</p>
              <p>12:30PM</p>
              <input type="checkbox" />
            </li>
            <li className="color-change">
              <p>Ram</p>
              <p>02/06/2025</p>
              <p>1:30PM</p>
              <input type="checkbox" />
            </li>
            <li className="color-change">
              <p>Rakesh</p>
              <p>12/08/2025</p>
              <p>3:30PM</p>
              <input type="checkbox" />
            </li>
            <li className="color-change">
              <p>Charan</p>
              <p>08/07/2025</p>
              <p>5:30PM</p>
              <input type="checkbox" />
            </li>
            <li className="color-change">
              <p>Varma</p>
              <p>22/06/2025</p>
              <p>1:30PM</p>
              <input type="checkbox" />
            </li>
          </div>
          <button className="modal-close" onClick={closeAppointments}>
            Close
          </button>
        </div>
      )}

      {isPatientRecordModalOpen && (
        <div id="patientRecordModal" className="modal">
          <div className="modal-header">Patient record</div>
          <div className="modal-content">
            <li>
              <p>Name</p>
              <p>Date</p>
              <p>Appointment Type</p>
              <p>Document</p>
            </li>
            <li>
              <p>Kiran</p>
              <p>01/06/2025</p>
              <p>Online</p>
              <button onClick={navigateToAnotherPage}>Reports</button>
            </li>
            <li>
              <p>Sai</p>
              <p>07/08/2025</p>
              <p>Online</p>
              <button onClick={navigateToAnotherPage}>Reports</button>
            </li>
          </div>
          <button className="modal-close" onClick={closePatientRecord}>
            Close
          </button>
        </div>
      )}

      {/* Button to open sidebar */}
      <button className="open-btn" onClick={openNav}>
        ☰
      </button>
    </div>
  );
};

export default DoctorProfilePage;
