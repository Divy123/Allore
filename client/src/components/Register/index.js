import React, { Component } from "react";
import LoginImage from "../../assets/img/misc/mobile.svg";
import "../Login/Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Navbar";

class Register extends Component {
  render() {
    return (
      <div className="main-layout-wrapper">
        <Nav />
        <div className="main-layout-wrapper-2">
          <img src={LoginImage} alt="login mobile" height="300px" />
          <div class="row" style={{ marginTop: "50px" }}>
            <Link
              to="/dashboard"
              className="btn waves-effect waves-light grey darken-1"
              style={{ color: "white", float: "right" }}
            >
              <i
                class="fab fa-google"
                style={{ marginRight: "5px", position: "relative", top: 1 }}
              />
              Sign in with Google
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
