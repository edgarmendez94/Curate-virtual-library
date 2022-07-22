import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
<<<<<<< HEAD

=======
export default App;
>>>>>>> 3cb58e3a2418b621aafb580fbcdcf3fee575c9ab
