import React from "react";
import ReactDOM from "react-dom/client";
import "../../Scss.jsx";
import CreateHero from "./HeroComponent.tsx";

ReactDOM.createRoot(document.getElementById("hero")!).render(
  <React.StrictMode>
    <CreateHero />
  </React.StrictMode>
);
