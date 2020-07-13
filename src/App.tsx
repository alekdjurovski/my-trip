import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <div className="container">
        <h1>Helloooo</h1>
          <Switch>
            <Route
            exact path='/' component={ LandingPage }></Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
