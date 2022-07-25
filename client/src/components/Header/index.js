import React from "react";
// import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (<>

    <header id="header">
      <h1>curate</h1>
      <h2>A Digital Virtual Museum</h2>

     <Link to={"/login"}> <button id="signInBtn" type="button" className="btn btn-primary" > Sign In </button> </Link> 
    <Link to={"/sign-up"}> <button id="signUpBtn" type="button" className="btn btn-primary">Sign Up</button> </Link> 
    </header>

    </>
  );
};

export default Header;
