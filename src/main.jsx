import React from "react";
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// import MainHeader from "./components/header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App/>
  </StrictMode>
);
serviceWorkerRegistration.register();
