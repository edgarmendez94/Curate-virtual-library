import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
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
