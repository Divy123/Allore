import React, { useState } from "react";
import LoginImage from "../../assets/img/misc/mobile.svg";
import "../Login/Login.css";
import Nav from "../Navbar";
import GoogleLogin from "react-google-login";

const Register = props => {
  const [stateError, setStateError] = useState(false);
  const [stateErrorMsg, setStateErrorMsg] = useState("");

  return (
    <div className="main-layout-wrapper">
      <Nav />
      <div className="main-layout-wrapper-2" style={{ marginTop: "10px" }}>
        {stateError ? <p className="red-text center">{stateErrorMsg}</p> : ""}
        <img src={LoginImage} alt="login mobile" height="300px" />
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
          onSuccess={res => {
            const email = res.profileObj.email;
            if (email.endsWith("@iiitl.ac.in")) {
              props.history.push({
                pathname: "/register/next",
                state: { email: email }
              });
            } else {
              setStateErrorMsg("Please use your college email");
              setStateError(true);
            }
          }}
          onFailure={err => {
            setStateErrorMsg("Unable to login");
            setStateError(true);
          }}
          render={renderProps => {
            return (
              <div className="row" style={{ marginTop: "50px" }}>
                <a
                  href="#!"
                  onClick={renderProps.onClick}
                  className="btn waves-effect waves-light darken-1"
                  style={{
                    color: "white",
                    float: "right",
                    backgroundColor: "#dd4b39"
                  }}
                  disabled={renderProps.disabled}
                >
                  <i
                    className="fab fa-google"
                    style={{
                      marginRight: "5px",
                      position: "relative",
                      top: 1
                    }}
                  />
                  Sign in with Google
                </a>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Register;
