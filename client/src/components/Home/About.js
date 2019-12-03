import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import aboutSVG from "../../assets/img/misc/undraw_social_sharing_ibwq.svg";

class About extends Component {
  render() {
    return (
      <div className="about-allore">
        <img
          height="300px"
          src={aboutSVG}
          alt="Connecting SVG"
          className="hide-on-med-and-down"
        />
        <div className="about-allore-text">
          <h1>Allore</h1>
          <p>
            Deserunt ipsum velit mollit ex ad adipisicing nulla magna deserunt
            ex proident non. Magna culpa aute incididunt duis nostrud
            exercitation consequat. Nisi enim do deserunt fugiat velit veniam
            tempor aliquip id nisi amet deserunt. Anim elit ipsum id duis ea
            tempor laboris eu ullamco consequat elit dolore dolore. Elit commodo
            est et magna fugiat reprehenderit sunt qui pariatur excepteur dolor
            do.
            <br />
            <br />
            Sunt aliqua ex magna anim cillum duis in aliquip dolore aute veniam
            reprehenderit et esse. Mollit ad et ut tempor dolore cillum culpa
            elit nulla laboris exercitation id. Excepteur ipsum exercitation
            anim minim nostrud. Aliqua amet et sunt sit sint culpa. Incididunt
            Lorem ut quis dolore culpa in qui laboris ex ad proident ut qui
            velit. Tempor laboris anim esse nulla amet voluptate reprehenderit
            exercitation sunt mollit velit ea. Labore incididunt quis
            adipisicing quis pariatur magna commodo sunt nisi amet ipsum id
            fugiat dolor.
          </p>
          <Link
            to="/register"
            className="btn waves-effect grey darken-2 white-text darken-text-4 register-btn-about-section"
            href="#!"
          >
            Register Now!
          </Link>
        </div>
      </div>
    );
  }
}

export default About;
