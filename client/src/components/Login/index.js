import React, { Component } from "react";
import LoginImage from "../../assets/img/misc/mobile.svg";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Navbar";
class Login extends Component {
  render() {
    return (
      <div className="main-layout-wrapper">
        <Nav />
        <div className="main-layout-wrapper-2">
          <img src={LoginImage} alt="login mobile" height="300px" />
          <div class="row" style={{ width: "30vw" }}>
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input id="last_name" type="text" class="validate" />
                  <label for="last_name">Email</label>
                </div>
                <div class="input-field col s12">
                  <input id="last_name" type="text" class="validate" />
                  <label for="last_name">Password</label>
                </div>
                <div class="input-field col s12">
                  <Link
                    to="/dashboard"
                    className="btn waves-effect waves-light grey darken-1"
                    style={{ color: "white", float: "right" }}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
