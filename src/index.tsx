import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/fonts.css";
import "./styles/theme.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
