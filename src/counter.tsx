import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counterapp.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("counter")!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
