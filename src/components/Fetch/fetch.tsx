import React from "react";
import ReactDOM from "react-dom/client";
import Fetch from "./FetchComponent.tsx";
import "../../Scss.jsx";
import Navbar from "../Navbar/NavbarComponent.tsx";

ReactDOM.createRoot(document.getElementById("fetch")!).render(
  <React.StrictMode>
    <Navbar />
    <Fetch />
  </React.StrictMode>
);
