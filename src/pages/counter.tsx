import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "../components/Counter/CounterComponent.tsx";
// import "./index.css";
import "../Scss.jsx";

ReactDOM.createRoot(document.getElementById("counter")!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
