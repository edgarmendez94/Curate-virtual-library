import React from "react";
// import { useQuery } from "@apollo/client";
import Signup from "../../pages/Sign-up";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <header id="header">
      <div>
        <h1>curate</h1>
        <h3>A Digital Virtual Museum</h3>
      </div>

      <nav id="nav-bar">
        <ul id="navTabs">
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Vote Here</a>
          </li>
          <li>
            <a href="#">Your Submission</a>
          </li>
          <li>
            <a href="#">Virtual Library</a>
          </li>
        </ul>
        <Link to={"/login"}>
          {" "}
          <button id="signInBtn" type="button" className="btn btn-primary">
            {" "}
            Sign In{" "}
          </button>{" "}
        </Link>
        <Link to={"/sign-up"}>
          {" "}
          <button
            id="signUpBtn"
            type="button"
            onclick="document.getElementById('modalSignUp').style.display='block'"
            className="btn btn-primary"
          >
            Sign Up
          </button>{" "}
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
