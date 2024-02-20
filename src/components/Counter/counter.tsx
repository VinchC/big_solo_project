import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./CounterComponent.tsx";
import "../../Scss.jsx";

ReactDOM.createRoot(document.getElementById("counter")!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
