import React from "react";
import {Link} from "react-router-dom"

const NotFoundPage = props => {
  return (
    <div className="container center-align-div">
      <div className="center">
        <p className="flow-text">Oops! Page Not Found</p>
        <h1>404</h1>
        <p className="flow-text">We are sorry but the page you requested was not found. Go back to <Link to="/">homepage</Link>.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
