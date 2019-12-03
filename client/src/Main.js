import React, { useEffect, useContext } from "react";
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
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";
import { AuthContext } from "./contexts/authContext";

const Main = props => {
  const { state, dispatch } = useContext(AuthContext);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch({ type: "LOGOUT" });
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate > new Date()) {
        dispatch({
          type: "LOGIN",
          payload: {
            token: localStorage.getItem("token"),
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            year: localStorage.getItem("year"),
            profile_pic: localStorage.getItem("profile_pic")
          }
        });
      } else {
        dispatch({
          type: "LOGOUT"
        });
      }
    }
  };

  useEffect(() => {
    checkAuthStatus(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {state.isAuthenticated ? (
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile/:enrollNo" component={AlumnusProfile} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/batch/:year" component={Batch} />
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register/next" component={RegisterNext} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      )}
    </>
  );
};

export default Main;
