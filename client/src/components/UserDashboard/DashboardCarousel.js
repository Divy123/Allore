import React from "react";
import Emoji from "react-emoji-render";
import { Carousel } from "react-materialize";

import PersonalInfoSvg from "../../assets/img/misc/personal_info_svg.svg";
import SearchSvg from "../../assets/img/misc/searching_svg.svg";
import FriendshipSvg from "../../assets/img/misc/friendship_svg.svg";

function dashboardCarousel() {
  return (
    <Carousel
      options={{
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 10
      }}
    >
      <div className="row">
        <div className="col l6 m6 dashboard-slider-text">
          <h2 className="flow-text center-align">
            <Emoji text="Edit Your Profile ✏️" />
            <p className="black-text left-align">
              Do you think, your profile needs a revamp? Ah, leave it on us. We
              will do it for you <a href="#">here</a>.
            </p>
          </h2>
        </div>
        <div className="col l6 dashboard-slider-svg">
          <h2 className="flow-text center-align">
            <img src={PersonalInfoSvg} style={{ width: "300px" }} />
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col l6 m6 dashboard-slider-text">
          <h2 className="flow-text center-align">
            <Emoji text="Quench your thirst 🧐" />
            <p className="black-text left-align">
              Wanna lookup for your colleagues filtering by batch, name, branch
              or comapny? Let us serve you better <a href="#">here</a>.
            </p>
          </h2>
        </div>
        <div className="col l6 dashboard-slider-svg">
          <h2 className="flow-text center-align">
            <img src={SearchSvg} style={{ width: "300px" }} />
          </h2>
        </div>
      </div>
      <div className="row center-align">
        <div className="col l6 m6 dashboard-slider-text">
          <h2 className="flow-text center-align">
            <Emoji text="Not very far 🤝" />
            <p className="black-text left-align">
              Missing your peers!! They are never far when you are{" "}
              <a href="#">here</a>.
            </p>
          </h2>
        </div>
        <div className="col l6 dashboard-slider-svg">
          <h2 className="flow-text center-align">
            <img src={FriendshipSvg} style={{ width: "300px" }} />
          </h2>
        </div>
      </div>
    </Carousel>
  );
}

export default dashboardCarousel;
