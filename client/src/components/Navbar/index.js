import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-outer">
          <a href="#" className="allore-logo">
            Allore
          </a>
          <div id="" className="nav-right">
            <a className="waves-effect btn-flat nav-item">
              Home
            </a>
            <a className="waves-effect btn-flat nav-item">
              Sign in
            </a>
            <a className="waves-effect btn-flat nav-item">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
