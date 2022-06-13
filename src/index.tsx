import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { State } from "./context/state";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <State>
      <App /></State>
    </BrowserRouter>
  </React.StrictMode>
);
