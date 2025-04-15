import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{useEffect,useState} from "react";

import "./App.css";
import Homepage from "./pages/Home";
import DoctorVerification from "./pages/doctorVerificationpage";
import FindDoctorPage from "./pages/findDoctorPage";
import Login from "./pages/loginPage";
import IndividualRegisterPage from "./pages/individualRegisterPage";
import SosPage from "./pages/sosPage";
import DoctorRegisterPage from "./pages/doctorRegisterPage";
import FounderPage from "./pages/ourFoundersPage";
import HomeDeliveryMedicine from "./pages/demoPage";
import Insurance from "./pages/insurancePage";
import DoctorProfilePage from "./pages/doctorProfilePage";
import MainInsurance from "./pages/mainInsurancePage";
import MainHeader from "./components/header";
import Footer from "./components/footer";
import VerifyDoc from "./pages/verifyDoc";
import DoctorID from "./pages/doctorID";
import QRCodeGenerator from "./pages/QRCodeGenerator";

const App = () => {




  const [location, setLocation] = useState();
  const currentUrl = window.location.href;
  console.log(`url:${currentUrl}`);


  useEffect(() => {
    setLocation(currentUrl);
  }, [currentUrl]);
  return (
    <>
    
      <Router>
        <MainHeader />
        <div className="content-wrapper ">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/verifyDoc" element={<VerifyDoc />} />
            <Route
              path="/doctorVerificationpage"
              element={<DoctorVerification />}
            />
            <Route path="/findDoctorPage" element={<FindDoctorPage />} />
            <Route path="/loginPage" element={<Login />} />
            <Route
              path="/individualRegisterPage"
              element={<IndividualRegisterPage />}
            />
            <Route path="/sosPage" element={<SosPage />} />
            <Route
              path="/doctorRegisterPage"
              element={<DoctorRegisterPage />}
            />
            <Route path="/FounderPage" element={<FounderPage />} />
            <Route path="/insurancePage" element={<Insurance />} />
            <Route path="/demoPage" element={<HomeDeliveryMedicine />} />
            <Route path="/doctorProfilePage" element={<DoctorProfilePage />} />
            <Route path="/mainInsurancePage" element={<MainInsurance />} />
            <Route path="/doctorID" element={<DoctorID />} />
            <Route path="/QRCodeGenerator" element={<QRCodeGenerator />} />
            {/* <Route path="/doctorID" element={<DoctorID />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
      
      
    </>
  );

 };
export default App;
