import React from "react";
import "./App.css";

import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Router path="/checkout">
            <h1>Checkout</h1>
          </Router>
          <Router path="/login">
            <h1>Login</h1>
          </Router>
          <Router path="/">
            <Header />
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
