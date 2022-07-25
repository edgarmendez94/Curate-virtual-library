import React from "react";
// import { useQuery } from "@apollo/client";
// import Signup from "../../pages/Sign-up";
import { Link } from "react-router-dom";

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
            <Link to={"/HowItWorks"}>How It Works</Link>
          </li>
          <li>
            <Link to={"/VoteHere"}>Vote Here</Link>
          </li>
          <li>
            <Link to={"/YourSubmission"}>Your Submission</Link>
          </li>
          <li>
            <Link to={"/VirtualLibrary"}>Virtual Library</Link>
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
            // onClick="document.getElementById('modalSignUp').style.display='block'"
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
