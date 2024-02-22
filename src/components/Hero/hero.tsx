import React from "react";
import ReactDOM from "react-dom/client";
import "../../Scss.jsx";
import CreateHero from "./HeroComponent.tsx";
import Navbar from "../Navbar/NavbarComponent.tsx";

ReactDOM.createRoot(document.getElementById("hero")!).render(
  <React.StrictMode>
    <Navbar />
    <CreateHero />
  </React.StrictMode>
);
