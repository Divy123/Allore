import React from "react";
import { Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import "./App.css";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard/UserDashboard";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/dashboard">
            <UserDashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
