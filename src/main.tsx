import React from "react";
import ReactDOM from "react-dom/client";
import NetflixApp from "./NetflixApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NetflixApp />
  </React.StrictMode>
);
