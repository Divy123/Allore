import React, { Component } from "react";
import Emoji from "react-emoji-render";

import Sidenav from "./Sidenav";
import ProfilePicSvg from "../../assets/img/misc/profile_pic_svg.svg";
import "./AlumnusProfile.css";

class AlumnusProfile extends Component {
  render() {
    return (
      <>
        <Sidenav />
        <div className="container">
          <div className="row">
            <div className="col l6 m6 s12 valign-wrapper right">
              <img src={ProfilePicSvg} className="alumnus-profile-pic" />
            </div>
            <div className="col l6 m6 s12">
              <h2 className="center-align">
                <Emoji text="Hi 👋" />
                <br />
                I'm Rishabh
              </h2>
              <div className="alumnus-social-icons center">
                <i class="fa-2x fas fa-envelope center"></i>
                <i class="fa-2x fab fa-linkedin center linkedin"></i>
                <i class="fa-2x fab fa-github center github"></i>
                <i class="fa-2x fab fa-twitter center twitter"></i>
              </div>
            </div>
          </div>
          <div>
            <p className="flow-text left-align">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              aliquam non magna ullamcorper blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              aliquam non magna ullamcorper blandit.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AlumnusProfile;
