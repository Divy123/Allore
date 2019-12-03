import React, { Component } from "react";
import Emoji from "react-emoji-render";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Sidenav from "./Sidenav";
import ProfilePicSvg from "../../assets/img/misc/profile_pic_svg.svg";
import "./AlumnusProfile.css";
import Loader from "../Loader";

class AlumnusProfile extends Component {
  render() {
    return (
      <>
        <Sidenav />
        <Query
          query={GET_USER_INFO}
          variables={{
            college_email: `${window.location.pathname.replace(
              "/profile/",
              ""
            )}@iiitl.ac.in`
            // college_email: "lit2017001@iiitl.ac.in"
          }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <div className="center">
                  <Loader />
                </div>
              );
            }

            if (error || data.users.length === 0) {
              return (
                <div className="container">
                  <p className="red-text center">
                    There was some error while fetching the user data. Please
                    try again later.
                  </p>
                </div>
              );
            }

            // console.log(data);
            return (
              <div className="container">
                <div className="row">
                  <div className="col l6 m6 s12 valign-wrapper right">
                    <img
                      src={
                        data.users[0].profile_pic
                          ? `${data.users[0].profile_pic}`
                          : ProfilePicSvg
                      }
                      className="alumnus-profile-pic"
                      alt="profile pic"
                    />
                  </div>
                  <div className="col l6 m6 s12">
                    <h2 className="center-align">
                      <Emoji text="Hi 👋" />
                      <br />
                      I'm {data.users[0].name.split(" ")[0]}
                    </h2>
                    <div className="alumnus-social-icons center">
                      {data.users[0].email ? (
                        <a href={`mailto:${data.users[0].email}`}>
                          <i className="fa-2x fas fa-envelope center"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {data.users[0].linkedIn_link ? (
                        <a href={data.users[0].linkedIn_link}>
                          <i className="fa-2x fab fa-linkedin center linkedin"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {data.users[0].github_link ? (
                        <a href={data.users[0].github_link}>
                          <i className="fa-2x fab fa-github center github"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {data.users[0].twitter_link ? (
                        <a href={data.users[0].twitter_link}>
                          <i className="fa-2x fab fa-twitter center twitter"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {data.users[0].fb_link ? (
                        <a href={data.users[0].fb_link}>
                          <i className="fa-2x fab fa-facebook center facebook"></i>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="flow-text left-align">
                    <Emoji
                      text={`Hi ${localStorage.getItem(
                        "name"
                      )}! I'm so glad to see you here 😊. Myself ${
                        data.users[0].name
                      } and I am currently working at ${
                        data.users[0].company
                      }. Want to connect? You can always shoot me a mail at`}
                    />{" "}
                    <a href={`mailto:${data.users[0].email}`}>
                      {data.users[0].email}
                    </a>{" "}
                    <Emoji text="😉" />.
                  </p>
                </div>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

const GET_USER_INFO = gql`
  query users($college_email: String) {
    users(college_email: $college_email) {
      name
      email
      company
      github_link
      fb_link
      profile_pic
      linkedIn_link
      twitter_link
    }
  }
`;

export default AlumnusProfile;
