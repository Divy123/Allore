import React, { Component } from "react";
import LoginImage from "../../assets/img/misc/mobile.svg";
import "../Login/Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Navbar";
import UserAvatar from "react-user-avatar";

class RegisterNext extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    facebookURI: "",
    linkedinURI: "",
    githubURI: "",
    twitterURI: "",
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="main-layout-wrapper">
        <Nav />
        <div className="main-layout-wrapper-3">
          <img src={LoginImage} alt="login mobile" height="300px" />
          <div class="row" style={{ width: "40vw" }}>
            <form class="col s12">
              <div class="row">
                <div class="col s2 offset-s4">
                  <img
                    src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"
                    alt=""
                    className="circle responsive-img"
                  />
                </div>
                <div className="input-field col s12">
                  <input
                    id="name"
                    type="text"
                    className="validate"
                    name="name"
                    onChange={this.onChange}
                  />
                  <label for="name">Name</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="text"
                    className="validate"
                    name="email"
                    onChange={this.onChange}
                  />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="password"
                    onChange={this.onChange}
                  />
                  <label for="password">Password</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="confirmPassword"
                    onChange={this.onChange}
                  />
                  <label for="password">Confirm Password</label>
                </div>

                <div className="input-field col s6">
                  <i className="fab fa-facebook-f prefix"></i>
                  <input
                    id="social"
                    type="text"
                    className="validate"
                    name="facebookURI"
                    onChange={this.onChange}
                  />
                  <label for="social">Facebook</label>
                </div>
                <div className="input-field col s6">
                  <i className="fab fa-linkedin-in prefix"></i>
                  <input
                    id="social"
                    type="text"
                    className="validate"
                    name="linkedinURI"
                    onChange={this.onChange}
                  />
                  <label for="social">Linkedin</label>
                </div>
                <div className="input-field col s6">
                  <i className="fab fa-github prefix"></i>
                  <input
                    id="social"
                    type="text"
                    className="validate"
                    name="githubURI"
                    onChange={this.onChange}
                  />
                  <label for="social">Github</label>
                </div>
                <div className="input-field col s6">
                  <i className="fab fa-twitter prefix"></i>
                  <input
                    id="social"
                    type="text"
                    className="validate"
                    name="twitterURI"
                    onChange={this.onChange}
                  />
                  <label for="social">Twitter</label>
                </div>
                <div className="input-field col s12">
                  <Link
                    to="/dashboard"
                    className="btn waves-effect waves-light grey darken-1 center"
                    style={{ color: "white" }}
                  >
                    Register Now!
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

export default RegisterNext;
