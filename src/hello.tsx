import React from "react";
import ReactDOM from "react-dom/client";
import SayHello from "./SayHello.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("hello")!).render(
  <React.StrictMode>
    <SayHello />
  </React.StrictMode>
);
