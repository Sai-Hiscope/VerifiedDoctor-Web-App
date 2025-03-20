import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./doctorRegisterPage.css";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";

const DoctorRegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = "http://localhost:8080/api/auth/register";

const handleRegister = async (e) => {
  e.preventDefault();
  
  const requestData = {
    fullName: formData.username,
    email: formData.email,
    password: formData.password
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData)
    });

    if (response.ok) {
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page
    } else {
      const errorMessage = await response.text();
      alert(`Registration failed: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during registration.");
  }
};


  return (
    <div className="login-container">
      <main className="main-content">
        <div className="content-wrapper">
          <div className="form-column">
            <form className="login-form" onSubmit={handleRegister}>
              <label className="input-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label className="input-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label className="input-label">Create Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-button">Register</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorRegisterPage;
