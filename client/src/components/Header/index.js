import React from "react";
// import { useQuery } from "@apollo/client";
// import Signup from "../../pages/Sign-up";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import "../../App.css";

const Nav = () => {
  return (
    <header id="header">
      <div className="title">
        <h1>
          <span>Curate</span>
        </h1>
        <h3 className="textglow">A Digital Virtual Museum</h3>
      </div>

      <nav id="nav-bar">
        <ul id="navTabs">
          <li>
            <Link to={"/HowItWorks"}>How It Works</Link>
          </li>
          <li>
            <Link to={"/VoteHere"}>Virtual Library</Link>
          </li>
          <li>
            <Link to={"/YourSubmission"}>Submit Here</Link>
          </li>
          {/* <li>
            <Link to={"/VirtualLibrary"}>Virtual Library</Link>
          </li> */}
        </ul>

        <div className="signInUp">
          {Auth.loggedIn() ? (
            <>
              <Link to={"/profile"}>
                {" "}
                <button id="myPageBtn" type="button" className="btn btn-primary">
                  {" "}
                  My Page{" "}
                </button>{" "}
              </Link>
              <Link to={"/"} onClick={Auth.logout}>
                {" "}
                <button id="signOutBtn" type="button" className="btn btn-primary">
                  Sign Out
                </button>{" "}
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                {" "}
                <button id="signInBtn" type="button" className="btn btn-primary">
                  {" "}
                  Sign In{" "}
                </button>{" "}
              </Link>
              <Link to={"/sign-up"}>
                {" "}
                <button id="signUpBtn" type="button" className="btn btn-primary">
                  Sign Up
                </button>{" "}
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
