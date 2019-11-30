import React, { Component } from "react";
import MainLayout from "../Layouts/MainLayout";
import Carousel from "./Carousel";
import About from "./About";
import HomeCards from "./HomeCards";

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <Carousel />
        <About />
        <HomeCards />
      </MainLayout>
    );
  }
}

export default Home;
