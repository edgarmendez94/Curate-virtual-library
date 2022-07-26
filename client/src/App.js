import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Sign-up";
import HIW from "./pages/HIW";
import VoteHere from "./pages/VoteHere";
import YourSubmission from "./pages/YourSubmission";
import VirtualLibrary from "./pages/VirtualLibrary";
import Profile from "./pages/Profile";
import Upload from "./components/Upload";

const httpLink = createHttpLink({ uri: "/graphql" })
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers, authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HowItWorks" element={<HIW />} />
            <Route path="/login" element={<Login />} />
            <Route path="/VoteHere" element={<VoteHere />} />
            <Route path="/YourSubmission" element={<YourSubmission />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/VirtualLibrary" element={<VirtualLibrary />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
