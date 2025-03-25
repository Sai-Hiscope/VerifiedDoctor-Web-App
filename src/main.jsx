import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import MainHeader from "./components/header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainHeader/>
    </BrowserRouter>
  </StrictMode>
);
