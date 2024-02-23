import React from "react";
import ReactDOM from "react-dom/client";
import FetchAxios from "./FetchAxiosComponent.tsx";
import "../../Scss.jsx";
import Navbar from "../Navbar/NavbarComponent.tsx";

ReactDOM.createRoot(document.getElementById("axios")!).render(
  <React.StrictMode>
    <Navbar />
    <FetchAxios />
  </React.StrictMode>
);
