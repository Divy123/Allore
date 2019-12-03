import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import "../Login/Login.css";
import Nav from "../Navbar";
import "./RegisterNext.css";
import ProfilePicSvg from "../../assets/img/misc/profile_pic_svg.svg";

class RegisterNext extends Component {
  static contextType = AuthContext;

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    facebookURI: "",
    linkedinURI: "",
    githubURI: "",
    twitterURI: "",
    profilePic: ProfilePicSvg,
    uploadedProfilePicFile: null
  };

  inputHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  fileHandler = event => {
    this.setState({
      ...this.state,
      profilePic: URL.createObjectURL(event.target.files[0]),
      uploadedProfilePicFile: event.target.files[0]
    });
  };

  getFormData = () => {
    return {
      name: this.state.name,
      email: this.state.email,
      college_email: this.props.location.state.email,
      password: this.state.password,
      company: this.state.company,
      fb_link: this.state.facebookURI,
      linkedIn_link: this.state.linkedinURI,
      twitter_link: this.state.twitterURI,
      github_link: this.state.githubURI,
      profile_pic: this.state.uploadedProfilePicFile
    };
  };

  render() {
    if (typeof this.props.location.state === "undefined") {
      return <Redirect to="/register" />;
    }

    return (
      <div className="main-layout-wrapper">
        <Nav />
        <h3
          className="center"
          style={{ marginTop: "50px", marginBottom: "70px", color: "#6b6a66" }}
        >
          Sign Up
        </h3>
        <Mutation mutation={CREATE_USER}>
          {(createUser, { loading, error, data }) => {
            return (
              <form
                encType="multipart/form-data"
                onSubmit={event => {
                  event.preventDefault();
                  this.context.dispatch({
                    type: "LOGIN_INIT"
                  });
                  const formData = this.getFormData();
                  createUser({
                    variables: { ...formData }
                  }).then(
                    resp => {
                      console.log(resp);
                      this.context.dispatch({
                        type: "LOGIN",
                        payload: {
                          name: resp.data.createUser.user.name,
                          email: resp.data.createUser.user.email,
                          year: resp.data.createUser.user.year,
                          token: resp.data.createUser.token,
                          profile_pic: resp.data.createUser.user.profile_pic
                        }
                      });
                      this.props.history.push("/dashboard");
                    },
                    err => {
                      console.log(err.graphQLErrors);
                      // Handle error
                    }
                  );
                }}
              >
                <div className="row">
                  <div className="col l6 m6 s12 register-next-form-col">
                    <div className="row">
                      <div className="avatar-upload">
                        <div className="avatar-edit">
                          <input
                            type="file"
                            id="imageUpload"
                            accept=".png, .jpg, .jpeg"
                            onChange={this.fileHandler}
                          />
                          <label htmlFor="imageUpload"></label>
                        </div>
                        <div className="avatar-preview">
                          <div
                            id="imagePreview"
                            style={{
                              backgroundImage: `url(${this.state.profilePic})`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l5 m6 s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fas fa-user prefix"></i>
                        <input
                          id="name"
                          type="text"
                          className="validate"
                          name="name"
                          onChange={this.inputHandler}
                          required={true}
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          disabled
                          value={this.props.location.state.email}
                          id="college_email"
                          type="text"
                          className="validate"
                          required={true}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          id="email"
                          type="text"
                          className="validate"
                          name="email"
                          onChange={this.inputHandler}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fas fa-key prefix"></i>
                        <input
                          id="password"
                          type="password"
                          className="validate"
                          name="password"
                          onChange={this.inputHandler}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fas fa-key prefix"></i>
                        <input
                          id="confirmPassword"
                          type="password"
                          className="validate"
                          name="confirmPassword"
                          onChange={this.inputHandler}
                          required={true}
                        />
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fas fa-building prefix"></i>
                        <input
                          id="company"
                          type="text"
                          className="validate"
                          name="company"
                          onChange={this.inputHandler}
                          required={true}
                        />
                        <label htmlFor="company">Company</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fab fa-linkedin prefix linkedin"></i>
                        <input
                          id="linkedin"
                          type="url"
                          className="validate"
                          name="linkedinURI"
                          onChange={this.inputHandler}
                          required={true}
                        />
                        <label htmlFor="linkedin">Linkedin Profile</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fab fa-github prefix github"></i>
                        <input
                          id="github"
                          type="url"
                          className="validate"
                          name="githubURI"
                          onChange={this.inputHandler}
                        />
                        <label htmlFor="github">GitHub Profile</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fab fa-twitter prefix twitter"></i>
                        <input
                          id="twitter"
                          type="url"
                          className="validate"
                          name="twitterURI"
                          onChange={this.inputHandler}
                        />
                        <label htmlFor="twitter">Twitter Profile</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="fab fa-facebook prefix facebook"></i>
                        <input
                          id="facebook"
                          type="url"
                          className="validate"
                          name="facebookURI"
                          onChange={this.inputHandler}
                        />
                        <label htmlFor="facebook">Facebook Profile</label>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="btn btn waves-effect waves-light grey darken-1"
                      style={{ float: "right" }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $college_email: String!
    $password: String!
    $company: String!
    $linkedIn_link: String
    $fb_link: String
    $github_link: String
    $twitter_link: String
    $profile_pic: Upload
  ) {
    createUser(
      data: {
        name: $name
        email: $email
        college_email: $college_email
        password: $password
        company: $company
        linkedIn_link: $linkedIn_link
        fb_link: $fb_link
        github_link: $github_link
        twitter_link: $twitter_link
        profile_pic: $profile_pic
      }
    ) {
      user {
        name
        email
        year
        profile_pic
      }
      token
    }
  }
`;

export default RegisterNext;
