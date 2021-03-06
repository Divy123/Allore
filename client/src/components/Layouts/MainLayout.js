import React, { Component } from "react";
import Nav from "../Navbar";
import Footer from "../Footer/Footer";

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout-wrapper">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
