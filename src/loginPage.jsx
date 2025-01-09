import { useState } from 'react';
import "./loginPage.css";
import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import MainHeader from './header';
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";
import Googlelogo from "./assets/icons/google.png";
import { useNavigate } from 'react-router-dom';

const API_URL = "https://v1.nocodeapi.com/sandeephst/google_sheets/YqqUgyAwUTXXdPEp";
const tabId = "Sheet1";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = `${API_URL}/search?tabId=${tabId}&searchKey=email&searchValue=${encodeURIComponent(formData.email)}`;
      const response = await fetch(searchUrl);
      const result = await response.json();

      if (result && result.length > 0) {
        const user = result[0];
        if (user.email.trim() === formData.email && user.password.trim() === formData.password) {
          // alert("Login successful!");
          setFormData({ username: "", email: "", password: "" });
          window.alert(`WELCOME LOGIN SUCCESFULLY! FINISH THE VERIFICATION FORM`);
        navigate("/doctorVerificationpage");
        } else {
          alert("Invalid email or password.");
        }
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    try {
      const searchUrl = `${API_URL}/search?tabId=${tabId}&searchKey=email&searchValue=${encodeURIComponent(formData.email)}`;
      const searchResponse = await fetch(searchUrl);
      const searchResult = await searchResponse.json();

      if (searchResult.length > 0) {
        alert("User already exists!");
        return;
      }

      const response = await fetch(`${API_URL}?tabId=${tabId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([[role, formData.username, formData.email, formData.password]])
      });

      if (response.ok) {
        alert("registration successful");
        setFormData({ username: "", email: "", password: "" });
        setRole("");
        window.location.href = "./doctorVerificationpage"
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    }
  };

  const showLogin = () => {
    setActiveTab("login");
    setRole("");

  };

  const showRegister = () => {
    setActiveTab("register");
    setRole("");
  };

  const showDoctorForm = () => setRole("doctor");
  const showUserForm = () => setRole("user");
  const goBack = () => setRole("");




  return (
    <>
      <MainHeader />
      <div className='login-change'>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07d1dfbb02eae67caa3e2cfdf5c9867238ca7e72eb515ca4ba7a5fa71896a65?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
          alt="Healthcare illustration"
          className="hero-image"
        />
      </div>
      <div className="container">
        <div className="tabs">
          <button className={`tab-btn ${activeTab === "login" ? "active" : ""}`} onClick={showLogin}>
            Login
          </button>
          <button className={`tab-btn ${activeTab === "register" ? "active" : ""}`} onClick={showRegister}>
            Register
          </button>
   
      {/* User Registration Form */}
      </div>


        {activeTab === "login" && (
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Login</button>
              <div className='forget'>Forget password ?</div>
              <div className='login-h1'>----continue with----</div>
              <img src={Googlelogo} alt="google" className="small-image" />
            </form>
          </div>
        )}

        {activeTab === "register" && !role && (
          <div className="form-container">
            <h2>Register</h2>
            <button className="role-btn" onClick={showDoctorForm}>Are you a Doctor?</button>
            <button className="role-btn" onClick={showUserForm}>User</button>
            <div className='title1'><li>If you are a doctor click on the "Are you a Doctor" button</li></div>
            <div className='title2'><li>If you are a user click on the "user" button</li></div>
            <div className='title3'><li>Register in our VDR app and get ultra benefits and discounts.</li></div>
          </div>
        )}

        {(role === "doctor" || role === "user") && (
          <div className="form-container">
            <h2>{role === "doctor" ? "Doctor" : "User"} Registration</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Register</button>
            </form>
            <button className="role-btn" onClick={goBack}>Back</button>
          </div>
        )}
      </div>

      <footer className="login-footer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
          alt="bg"
          className="sos-background-image-footer"
        />
        <div className="sos-footer-div1">
          <img src={VDrLogo} alt="VDrapp Footer Logo" className="sos-footer-logo" />
        </div>
        <div className="sos-footer-copyright"><h6> @Hiscope 2024 </h6></div>
      </footer>
    </>
  );
};

export default Login;