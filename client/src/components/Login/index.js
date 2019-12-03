import React, { useContext, useState } from "react";
import Emoji from "react-emoji-render";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Button } from "react-materialize";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import Loader from "../Loader";

import LoginImage from "../../assets/img/misc/mobile.svg";
import "./Login.css";
import Nav from "../Navbar";

const Login = props => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [stateError, setStateError] = useState(false);
  const [stateErrorMsg, setStateErrorMsg] = useState(null);

  return (
    <Mutation mutation={GET_USER}>
      {(loginUser, { data, loading, error }) => {
        return (
          <div className="main-layout-wrapper">
            <Nav />
            <div className="main-layout-wrapper-2">
              <img src={LoginImage} alt="login mobile" height="300px" />
              <div className="row" style={{ width: "350px" }}>
                {stateError ? (
                  <p className="red-text center">{stateErrorMsg}</p>
                ) : (
                  ""
                )}
                {!loading ? (
                  <form
                    className="col s12"
                    onSubmit={e => {
                      e.preventDefault();

                      dispatch({
                        type: "LOGIN_INIT"
                      });

                      loginUser({
                        variables: {
                          email: email,
                          password: password
                        }
                      }).then(
                        response => {
                          console.log(response);
                          dispatch({
                            type: "LOGIN",
                            payload: {
                              name: response.data.loginUser.user.name,
                              email: response.data.loginUser.user.email,
                              token: response.data.loginUser.token,
                              year: response.data.loginUser.user.year,
                              profile_pic:
                                response.data.loginUser.user.profile_pic
                            }
                          });
                          props.history.push("/dashboard");
                        },
                        err => {
                          setStateErrorMsg("Unable to login");
                          setStateError(true);
                        }
                      );
                    }}
                  >
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          onChange={e => setEmail(e.target.value)}
                          required={true}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                          onChange={e => setPassword(e.target.value)}
                          required={true}
                        />
                        <label htmlFor="password">Password</label>
                      </div>

                      <div className="input-field col s12">
                        <Button
                          type="submit"
                          className="btn waves-effect waves-light grey darken-1"
                          style={{ color: "white", float: "right" }}
                        >
                          Login
                        </Button>
                      </div>
                      <p className="right-align">
                        If not yet registered, please{" "}
                        <Link to="/register">Sign Up</Link> with{" "}
                        <Emoji text="us 👨‍🎓." />
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="center">
                    <Loader />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Mutation>
  );
};

const GET_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
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

export default Login;
