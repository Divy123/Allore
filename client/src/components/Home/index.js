import React, { Component } from "react";
import MainLayout from "../Layouts/MainLayout";
import HomeCarousel from "./HomeCarousel";
import About from "./About";
import HomeCards from "./HomeCards";

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <HomeCarousel />
        <About />
        <HomeCards />
      </MainLayout>
    );
  }
}

export default Home;
