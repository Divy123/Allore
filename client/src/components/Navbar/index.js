import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "./Nav.css";

const Nav = props => {
  const { state } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-outer">
        <Link to="/" className="allore-logo">
          Allore
        </Link>
        <div className="nav-right">
          <Link to="/" className="waves-effect btn-flat nav-item">
            Home
          </Link>

          {state.isAuthenticated ? (
            <Link className="waves-effect btn-flat nav-item" to="/dashboard">
              Dashboard
            </Link>
          ) : (
            <Link className="waves-effect btn-flat nav-item" to="/login">
              Sign in
            </Link>
          )}
          <Link to="#!" className="waves-effect btn-flat nav-item">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
