import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Schedule from "./pages/Schedule";
import Resources from "./pages/Resources";
import Profiles from "./pages/Profiles";
import FAQ from "./pages/FAQ";
import ComingSoon from "./pages/ComingSoon";
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
          <Route exact path="/comingsoon">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
