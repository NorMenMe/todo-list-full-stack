import React from "react";
import "../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Register from "./Register";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import GlobalState from "./GlobalState";
import Header from "./Header";

const App = () => {
  return (
    <div className="vh-100 bg-dark text-light ">
      <GlobalState>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/dashboard/:id">
              <Dashboard />
            </Route>
            <Route path="/signout">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </GlobalState>
    </div>
  );
};

export default App;
