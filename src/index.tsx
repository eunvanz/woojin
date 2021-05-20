import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import smoothscroll from "smoothscroll-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/styles/base.scss";

smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
