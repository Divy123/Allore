import React, { Component } from "react";
import Nav from "../Navbar";

class MainLayout extends Component {
  render() {
    return (
      <div style={{ padding: "10px 10%" }}>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
