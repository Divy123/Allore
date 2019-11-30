import React, { Component } from "react";
import Emoji from "react-emoji-render";

import Sidenav from "./Sidenav";
import "./UserDashboard.css";
import PersonalInfoSvg from "../../assets/img/misc/personal_info_svg.svg";
import SearchSvg from "../../assets/img/misc/searching_svg.svg";
import FriendshipSvg from "../../assets/img/misc/friendship_svg.svg";

class UserDashboard extends Component {
  render() {
    return (
      <>
        <Sidenav />
        <h3 className="center-align"><Emoji text="Hi Rishabh! 👋" /></h3>
        <div className="container">
          <p className="flow-text center-align">
            Welcome to Allore! It has not been many days since we last met each
            other.
          </p>
          <p className="flow-text center-align">
            <Emoji text="I hope you missed me because I'm not that useless enough. Want to know what all I can do, Roll Down Your Eyes 👀." />
          </p>

          <div class="carousel carousel-slider center max-height-110">
            <div class="carousel-item black-text" href="#one!">
              <div className="row">
                <div className="col l6">
                  <h2 class="flow-text center-align">
                    <Emoji text="Edit Your Profile ✏️" />
                    <p className="black-text left-align">
                      Do you think, your profile needs a revamp? Ah, leave it on
                      us. We will do it for you <a href="#">here</a>.
                    </p>
                  </h2>
                </div>
                <div className="col l6">
                  <h2 class="flow-text center-align">
                    <img src={PersonalInfoSvg} style={{ width: "300px" }} />
                  </h2>
                </div>
              </div>
            </div>

            <div class="carousel-item black-text" href="#one!">
              <div className="row">
                <div className="col l6">
                  <h2 class="flow-text center-align">
                    <Emoji text="Quench your thirst 🧐" />
                    <p className="black-text left-align">
                      Wanna lookup for your colleagues filtering by batch, name,
                      branch or comapny? Let us serve you better <a href="#">here</a>.
                    </p>
                  </h2>
                </div>
                <div className="col l6">
                  <h2 class="flow-text center-align">
                    <img src={SearchSvg} style={{ width: "300px" }} />
                  </h2>
                </div>
              </div>
            </div>

            <div class="carousel-item black-text" href="#one!">
              <div className="row">
                <div className="col l6">
                  <h2 class="flow-text center-align">
                    <Emoji text="Not very far 🤝" />
                    <p className="black-text left-align">
                      Missing your peers!! They are never far when you are <a href="#">here</a>.
                    </p>
                  </h2>
                </div>
                <div className="col l6">
                  <h2 class="flow-text center-align">
                    <img src={FriendshipSvg} style={{ width: "300px" }} />
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default UserDashboard;
