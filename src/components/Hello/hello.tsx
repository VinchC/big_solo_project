import React from "react";
import ReactDOM from "react-dom/client";
import SayHello from "./SayHello.tsx";
import Navbar from "../Navbar/NavbarComponent.tsx";

ReactDOM.createRoot(document.getElementById("hello")!).render(
  <React.StrictMode>
    <Navbar />
    <SayHello />
  </React.StrictMode>
);
