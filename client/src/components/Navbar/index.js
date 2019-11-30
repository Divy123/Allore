import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-outer">
          <a href="#" className="allore-logo">
            Allore
          </a>
          <div id="" className="nav-right">
            <Link className="waves-effect btn-flat nav-item">Home</Link>
            <Link className="waves-effect btn-flat nav-item" to="/login">
              Sign in
            </Link>
            <Link className="waves-effect btn-flat nav-item">Contact Us</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
