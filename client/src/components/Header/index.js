import React from "react";
// import { useQuery } from "@apollo/client";

const Header = () => {
  return (
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
  );
};

export default Header;
