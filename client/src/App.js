import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Sign-up";



const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
      <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
        </div>
        <div>
          <Header />
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
