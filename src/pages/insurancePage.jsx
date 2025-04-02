import React from "react";
import "./insurancePage.css";
import { useState } from "react";

import FormPage0 from "../components/insuranceFormPage0";
import FormPage1 from "../components/insuranceFormPage1";
import FormPage2 from "../components/insuranceFormPage2";
import FormPage3 from "../components/insuranceFormPage3";
import Pagination from "../components/Pagination";
import VDrLogo from "../assets/Images/commonImg/VDrlogo.png";
import Googlelogo from "../assets/icons/google.png";
import Fotter from "../components/footer";

const Insurance = () => {
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
  return (
    <>
      <MainHeader />
      <div>
        <div className="Insurancecontainer">
          {renderPage()}
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>

      <Fotter value="1200px" />
    </>
  );
};

export default Insurance;
