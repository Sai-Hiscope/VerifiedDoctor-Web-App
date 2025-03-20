import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./src/pages/Home";
import DoctorVerification from "./src/pages/doctorVerificationpage";
import FindDoctorPage from "./src/pages/findDoctorPage";
import Login from "./src/pages/loginPage";
import IndividualRegisterPage from "./src/pages/individualRegisterPage";
import SosPage from "./src/pages/sosPage";
import DoctorRegisterPage from "./src/pages/doctorRegisterPage";
import FounderPage from "./src/pages/ourFoundersPage";
import HomeDeliveryMedicine from "./src/pages/demoPage";
import Insurance from "./src/pages/insurancePage";
import DoctorProfilePage  from "./src/pages/doctorProfilePage";
import MainInsurance from "./src/pages/mainInsurancePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/doctorVerificationpage",
    element: <DoctorVerification />,
  },
  {
    path: "/findDoctorPage",
    element: <FindDoctorPage />,
  },
  {
    path: "/loginPage",
    element: <Login />,
  },
  {
    path: "/individualRegisterPage",
    element: <IndividualRegisterPage />,
  },
  {
    path: "/sosPage",
    element: <SosPage />,
  },
  {
    path: "/doctorRegisterPage",
    element: <DoctorRegisterPage />,
  },
  {
    path: "/FounderPage",
    element: <FounderPage />,
  },  
  {
    path : "/insurancePage",
    element:<Insurance />,
  },
  {
    path: "/demoPage",
    element: <HomeDeliveryMedicine />,
  },
  {

    path: "/doctorProfilePage",
    element: <DoctorProfilePage />,
   },
    {
    path:"/mainInsurancePage",
    element:<MainInsurance/>,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
