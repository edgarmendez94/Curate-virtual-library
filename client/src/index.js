import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header id="header">
      <h1>curate</h1>
      <h2>A Digital Virtual Museum</h2>
      <button id="signInBtn" type="button" class="btn btn-primary">
        Sign In
      </button>
      <button id="signUpBtn" type="button" class="btn btn-primary">
        Sign Up
      </button>
    </header>
    <nav>
      <ul>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Vote Here</a></li>
        <li><a href="#">Your Submission</a></li>
        <li><a href="#">Virtual Library</a></li>
      </ul>
    </nav>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
