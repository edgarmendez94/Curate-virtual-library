import React from "react";
// import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <header id="header">
      <nav>
        <h1>curate</h1>
        <h2>A Digital Virtual Museum</h2>

        <Link to={"/login"}> <button id="signInBtn" type="button" className="btn btn-primary" > Sign In </button> </Link> 
        <Link to={"/sign-up"}> <button id="signUpBtn" type="button" className="btn btn-primary">Sign Up</button> </Link> 
        
        <ul>
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
      </nav>
    </header>
  );
};

export default Nav;
