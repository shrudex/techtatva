import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

// const REACT_APP_CLERK_PUBLISHABLE_KEY =
//   "pk_test_bmF0dXJhbC1yYXB0b3ItOTcuY2xlcmsuYWNjb3VudHMuZGV2JA";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
