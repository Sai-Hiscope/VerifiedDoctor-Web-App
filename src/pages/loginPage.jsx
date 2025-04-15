import { useState } from "react";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
import Googlelogo from "../assets/icons/google.png";
import docRegister from '../assets/Images/docRegister.png'
const LOGIN_API_URL = "http://localhost:8080/api/auth/login";
const REGISTER_API_URL = "http://localhost:8080/api/auth/register";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`WELCOME LOGIN SUCCESSFUL! FINISH THE VERIFICATION FORM`);
        navigate("/doctorVerificationpage");
      } else {
        const errorMessage = await response.text();
        alert(`Login failed: ${errorMessage}`);
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

    const registerData = {
      role: role,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(REGISTER_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({ username: "", email: "", password: "" });
        setRole("");

        navigate("/doctorVerificationpage");
      } else {
        const errorMessage = await response.text();
        alert(`Registration failed: ${errorMessage}`);
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
    <div className="loginContainer">
      <div className="registerI">
      <img
          src={docRegister}
          alt="Healthcare illustration"
          className="docRegisterImg"
        /></div>
      <div className="login-change">
        
      </div>
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={showLogin}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={showRegister}
          >
            Register
          </button>
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
              <div className="forget">Forget password ?</div>
              <div className="login-h1">continue with</div>
              <img src={Googlelogo} alt="google" className="small-image" />
            </form>
          </div>
        )}

        {activeTab === "register" && !role && (
          <div className="form-container">
            <h2>Register</h2>
            <button className="role-btn" onClick={showDoctorForm}>
              Are you a HealthCare Profession?
            </button>
            <button className="role-btn" onClick={showUserForm}>
              User
            </button>
            <div className="title1">
              <li>If you are a doctor, click on "Are you a Doctor" button</li>
            </div>
            <div className="title2">
              <li>If you are a user, click on the "User" button</li>
            </div>
            <div className="title3">
              <li>
                Register in our VDR app and get ultra benefits and discounts.
              </li>
            </div>
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
            <button className="role-btn" onClick={goBack}>
              Back
            </button>
          </div>
        )}
      </div>

      </div>
  );
};

export default Login;
