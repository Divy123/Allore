import React, { Component } from "react";
import Nav from "../Navbar";
import Footer from "../Footer/Footer";

class MainLayout extends Component {
  render() {
    return (
      <div style={{ padding: "10px 10% 0px 10%" }}>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
