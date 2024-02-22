import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../../Scss.jsx";
import Navbar from "../Navbar/NavbarComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
