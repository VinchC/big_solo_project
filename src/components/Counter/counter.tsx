import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./CounterComponent.tsx";
import "../../Scss.jsx";
import StyledTitle from "../StyledElements/StyledTitle.tsx";

ReactDOM.createRoot(document.getElementById("counter")!).render(
  <React.StrictMode>
    <Counter />
    <StyledTitle />
  </React.StrictMode>
);
