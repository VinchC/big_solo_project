import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./CounterComponent.tsx";
import "../../Scss.jsx";
import Navbar from "../Navbar/NavbarComponent.tsx";

ReactDOM.createRoot(document.getElementById("counter")!).render(
  <React.StrictMode>
    <Navbar />
    <Counter />
  </React.StrictMode>
);
