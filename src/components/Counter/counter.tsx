import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./CounterComponent.tsx";
import "../../Scss.jsx";
import Navbar from "../Navbar/NavbarComponent.tsx";
import Converter from "../Converter/ConverterComponent.tsx";

ReactDOM.createRoot(document.getElementById("counter")!).render(
  <React.StrictMode>
    <Navbar />
    <Counter />
    <Converter />
  </React.StrictMode>
);
