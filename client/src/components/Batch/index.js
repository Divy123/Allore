import React, { Component } from "react";
import "./Batch.css";
import "../Login/Login.css";
import Sidenav from "../UserDashboard/Sidenav";

class Batch extends Component {
  state = {
    students: [
      {
        imageURI: "",
        name: "Rishabh Shukla",
        email: "lit2018006@iiitl.ac.in",
        facebookURI: "#!",
        linkedinURI: "#!",
        githubURI: "#!",
        twitterURI: "#!"
      },
      {
        imageURI: "",
        name: "Rishabh Shukla",
        email: "lit2018006@iiitl.ac.in",
        facebookURI: "#!",
        linkedinURI: "#!",
        githubURI: "#!",
        twitterURI: "#!"
      },
      {
        imageURI: "",
        name: "Rishabh Shukla",
        email: "lit2018006@iiitl.ac.in",
        facebookURI: "#!",
        linkedinURI: "#!",
        githubURI: "#!",
        twitterURI: "#!"
      },
      {
        imageURI: "",
        name: "Rishabh Shukla",
        email: "lit2018006@iiitl.ac.in",
        facebookURI: "#!",
        linkedinURI: "#!",
        githubURI: "#!",
        twitterURI: "#!"
      },
      {
        imageURI: "",
        name: "Rishabh Shukla",
        email: "lit2018006@iiitl.ac.in",
        facebookURI: "#!",
        linkedinURI: "#!",
        githubURI: "#!",
        twitterURI: "#!"
      },
      {
        imageURI: "",
        name: "Rishabh Shukla",
        email: "lit2018006@iiitl.ac.in",
        facebookURI: "#!",
        linkedinURI: "#!",
        githubURI: "#!",
        twitterURI: "#!"
      }
    ]
  };
  render() {
    return (
      <div className="main-layout-wrapper">
        <Sidenav />
        <h1 style={{ textAlign: "center" }}>Batch 2017</h1>
        <div className="main-layout-wrapper-3">
          {this.state.students.map((v, i) => (
            <div class="card sticky-action" style={{ overflow: "visible" }}>
              <div class="card-image waves-effect waves-block waves-light">
                <img
                alt=""
                  class="activator"
                  src={
                    v.imageURI === ""
                      ? "https://materializecss.com/images/office.jpg"
                      : v.imageURI
                  }
                  style={{ width: 300, height: 250 }}
                />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  {v.name}
                  <i class="material-icons right">more_vert</i>
                </span>

                <p>
                  <a href="#!">{v.email}</a>
                </p>
              </div>

              <div class="card-action">
                <a href={v.facebookURI}>
                  <i className="fab fa-facebook-f prefix"></i>
                </a>
                <a href={v.linkedinURI}>
                  <i className="fab fa-linkedin-in prefix"></i>
                </a>
                <a href={v.githubURI}>
                  <i className="fab fa-github prefix"></i>
                </a>
                <a href={v.twitterURI}>
                  <i className="fab fa-twitter prefix"></i>
                </a>
              </div>

              <div
                class="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span class="card-title grey-text text-darken-4">
                  Card Title<i class="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Batch;
