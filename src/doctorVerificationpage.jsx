import React, { useState } from "react";
import "./doctorVerificationpage.css";
import FindDoctorPage from "./findDoctorPage";
import Home from "./Home";
import Login from "./loginPage";
import IndividualRegisterPage from "./individualRegisterPage";
import SosPage from "./sosPage";
import DoctorRegisterPage from "./doctorRegisterPage";
import Demo from "./demoPage"
import { useNavigate } from 'react-router-dom';
import MainHeader from "./header";
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";


const DoctorVerification = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    medicalLicenseNumber: '',
    medicalLicense: null,
    medicalSpecialty: '',
    boardCertificate: null,
    educationBackground: '',
    educationCertificates: null,
    hospitalWorking: '',
    experience: '',
    hospitalClinic: '',
    complaints: '',
    description: '',
  });

  // Handle change for text and select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Only take the first file (if multiple)
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log(formData);
    alert("VERIFICATION SUBMITTED");
    navigate("/demoPage");
  };
     

  return (

    <>
    <MainHeader />

    <div className='login-change'>
    <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07d1dfbb02eae67caa3e2cfdf5c9867238ca7e72eb515ca4ba7a5fa71896a65?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
              alt="Healthcare illustration"
              className="hero-image1"
            />
            </div>
    
   <div  className="doctorverification-container">
    <div className="doctorverification-container1">
      <h2 className="doctorVerification-h2">Doctor Verification Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full-name">Full Name <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medical-license-number">Medical License Number <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="medical-license-number"
            name="medicalLicenseNumber"
            value={formData.medicalLicenseNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medical-license">Upload Medical License <span className='from-group-span'>*</span></label>
          <input
            type="file"
            id="medical-license"
            name="medicalLicense"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medical-speciality">Medical Specialty <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="medical-speciality"
            name="medicalSpecialty"
            value={formData.medicalSpecialty}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="board-certificate">Upload Board Certificate <span className='from-group-span'>*</span></label>
          <input
            type="file"
            id="board-certificate"
            name="boardCertificate"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="education-background">Educational Background <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="education-background"
            name="educationBackground"
            value={formData.educationBackground}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="education-certificates">Upload Educational Certificates <span className='from-group-span'>*</span></label>
          <input
            type="file"
            id="education-certificates"
            name="educationCertificates"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hospital-working">Hospital Currently Working <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="hospital-working"
            name="hospitalWorking"
            value={formData.hospitalWorking}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hospital-clinic">Hospital (or) Clinic <span className='from-group-span'>*</span></label>
          <input
            type="text"
            id="hospital-clinic"
            name="hospitalClinic"
            value={formData.hospitalClinic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="complaints">Any Complaints or Disciplinary Actions Filed?</label>
          <select
            id="complaints"
            name="complaints"
            value={formData.complaints}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description (If any?)</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide any details..."
            className="doctorVerification-textarea"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
    

       {/* Footer */}
       <footer className="doctorVerify-footer">
<img
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7c2f1f7f0ad4e4188183ac4b58840bac63df589165099f22e5a8c9c8da274d?placeholderIfAbsent=true&apiKey=9ccc22c2724c427c8498a732bb366bf4"
  alt=""
  className="doctorVerify-background-image-footer"/>

  <div className="doctorVerify-footer-div1">
  <img
          src={VDrLogo}
          alt="VDrapp Footer Logo"
          className="doctorVerify-footer-logo"
        />
 </div>
 <div className="doctorVerify-footer-copyright"><h6> @Hiscope 2024 </h6></div>
</footer>
    </>
  );
};

export default DoctorVerification;
