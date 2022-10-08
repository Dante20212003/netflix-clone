import React from "react";
import ReactDOM from "react-dom/client";
import NetflixApp from "./NetflixApp";
import { Provider } from "react-redux";
import "./styles.css";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <NetflixApp />
    </Provider>
  </React.StrictMode>
);
