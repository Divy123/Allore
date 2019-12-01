import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="grey-text text-lighten-4 footer-copyright">
          <div className="container">
            © 2019 IIIT Lucknow
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
