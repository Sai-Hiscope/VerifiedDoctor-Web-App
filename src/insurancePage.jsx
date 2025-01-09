import React from "react";
import  "./insurancePage.css";
import { useState } from 'react';


import FormPage0 from "./components/insuranceFormPage0";
import FormPage1 from "./components/insuranceFormPage1";
import FormPage2 from "./components/insuranceFormPage2";
import FormPage3 from "./components/insuranceFormPage3";
import Pagination from "./components/Pagination";
import MainHeader from "./header";
import VDrLogo from "./assets/Images/commonImg/VDrlogo.png";
import Googlelogo from "./assets/icons/google.png";



const Insurance = ()=>{
    const [page, setPage] = useState(0);

        const renderPage = () => {
          switch (page) {
            case 0:
              return <FormPage0 />;
            case 1:
              return <FormPage1 />;
            case 2:
              return <FormPage2 />;
            case 3:
              return <FormPage3 />;
            default:
              return <FormPage0 />;
          }
        };
    return(
        <>
        <MainHeader/>
        <div>
          <div className="Insurancecontainer">
            {renderPage()}
            <Pagination page={page} setPage={setPage} />
        
          </div>
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
          </div>
          <>
           {/* Footer */}
            
          </>
          </>
    )
}

export default Insurance;