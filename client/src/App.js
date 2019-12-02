import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/Home";
import Login from "./components/Login/index";
import { Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import UserDashboard from "./components/UserDashboard/UserDashboard";
import Register from "./components/Register";
import RegisterNext from "./components/Register/RegisterNext";
import AlumnusProfile from "./components/UserDashboard/AlumnusProfile";
import Batch from "./components/Batch";
import Search from "./components/UserDashboard/Search";
import AuthContextProvider from "./contexts/authContext";

class App extends React.Component {
  render() {
    return (
      <AuthContextProvider>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/profile/:enrollNo" component={AlumnusProfile} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register/next" component={RegisterNext} />
          <Route path="/register" component={Register} />
          <Route path="/batch/:year" component={Batch} />
          <Route path="/" component={Home} />
        </Switch>
      </AuthContextProvider>
    );
  }
}

export default App;
