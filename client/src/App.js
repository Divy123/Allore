import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/index";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
