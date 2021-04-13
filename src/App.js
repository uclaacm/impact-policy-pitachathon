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
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/profiles">
            <Profiles />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/comingsoon">
            <ComingSoon />
          </Route>
          <Route exact path="/"> {/*needs to be exact or it becomes default */}
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
