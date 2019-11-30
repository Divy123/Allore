import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/Home";
import Login from "./components/Login/index";
import { Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import "./App.css";
import UserDashboard from "./components/UserDashboard/UserDashboard";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/dashboard">
            <UserDashboard />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
