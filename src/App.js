import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ReactRouterGlobalHistory } from "react-router-global-history";
import Landing from "./pages/Landing";
import Schedule from "./pages/Schedule";
import Resources from "./pages/Resources";
import Profiles from "./pages/Profiles";
import FAQ from "./pages/FAQ";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/profiles">
            <Profiles />
          </Route>
          <Route exact path="/FAQ">
            <FAQ />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
