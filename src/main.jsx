import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
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
import DoctorProfilePage  from "./pages/doctorProfilePage";
import MainInsurance from "./pages/mainInsurancePage";


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
