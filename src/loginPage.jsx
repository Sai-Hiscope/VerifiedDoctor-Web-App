import { useState } from 'react'

import "./loginPage.css"; // Import the CSS file


import DoctorVerification from "./doctorVerificationpage";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
// import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import FounderPage from "./ourFoundersPage";
import MainHeader from './header';
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";
import Googlelogo from "./assets/icons/google.png";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState('');
 

  const showLogin = () => {
    setActiveTab("login");
    setRole("");
  };

  const showRegister = () => {
    setActiveTab("register");
    setRole("");
  };

  const showDoctorForm = () => {
    setRole("doctor");
  };

  const showUserForm = () => {
    setRole("user");
  };

  const goBack = () => {
    setRole(""); // Reset role to go back to role selection
  };

  const handleInputChange = (e) => { 
    setUsername(e.target.value);
   };
  const registerDoctor = (e) => {
     e.preventDefault(); // Show the username in a window alert 
     window.alert(`WELCOME ${username} FINISH THE VERIFICATION FORM`);
     navigate("/doctorVerificationpage");
    };
  return (
    
    <>
    <>
    <MainHeader  />
    <div className='login-change'>
    <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07d1dfbb02eae67caa3e2cfdf5c9867238ca7e72eb515ca4ba7a5fa71896a65?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
              alt="Healthcare illustration"
              className="hero-image"
            />
            </div>
    <div className="container">
      {/* Tabs for Login and Register */}
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

      {/* Login Form */}
      {activeTab === "login" && (
        <div className="form-container">
          <h2>Login</h2>
          <form action="#">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <div className='forget'>
              Forget password ?
            </div>
            <div className='login-h1'>----continue with----</div>
            <img
              src={Googlelogo}
              alt="google"
              className="small-image"
            />
             
          </form>
        </div>
      )}

      {/* Register Form */}
      {activeTab === "register" && !role && (
        <div className="form-container">
          <h2>Register</h2>
          <button className="role-btn" onClick={showDoctorForm}>
            
            Are you a Doctor?
          </button>
          <button className="role-btn" onClick={showUserForm}>
            User
          </button>
         
          <div className='title1'><li>If you are a doctor click on the "Are you a Doctor" button</li></div>
          <div className='title2'><li>If you are a user click on the "user" button</li></div>
          <div className='title3'><li>Register in our VDR app and get ultra benfits and discounts. </li></div>


        </div>
      )}

      {/* Doctor Registration Form */}
      {role === "doctor" && (
        <div className="form-container">
          <h2>Doctor Registration</h2>
          <form onSubmit={registerDoctor} >
            <input type="text" placeholder="Doctor's Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button >Register</button>
          </form>
          <button className="role-btn" onClick={goBack}>Back</button>
        </div>
      )}

      {/* User Registration Form */}
      {role === "user" && (
        <div className="form-container">
          <h2>User Registration</h2>
          <form action="#" onSubmit={registerDoctor}>
            <input type="text" placeholder="Username" required  id="username" name="username" value={username} onChange={handleInputChange}/>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <button className="role-btn" onClick={goBack}>Back</button>
        </div>
      )}
      </div>

    </>

    
      <footer className="login-footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt="bg"
  className="sos-background-image-footer"/>

  <div className="sos-footer-div1">
  <img
          src={VDrLogo}
          alt="VDrapp Footer Logo"
          className="sos-footer-logo"
        />
 </div>
 <div className="sos-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
    </>
  );
}

export default Login;