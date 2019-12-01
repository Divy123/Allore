import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

import "./Sidenav.css";
import ProfilePicSvg from "../../assets/img/misc/profile_pic_svg.svg";

class Sidenav extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <div className="hamburger-icon">
            <div></div>
          </div>
        </a>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background whitesmoke-bg"></div>
              <a href="#user">
                <img className="circle" src={ProfilePicSvg} />
              </a>
              <a href="#name">
                <span className="black-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="black-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <Link to="/dashboard" className="sidenav-close">
              <i className="material-icons">person</i>Dashboard
            </Link>
            <Link to="/edit-profile" className="sidenav-close">
              <i className="material-icons">create</i>Edit Profile
            </Link>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">search</i>Search
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">people</i>Batch 2k16
            </a>
          </li>

          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">More</a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">power_settings_new</i>Logout
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Sidenav;
