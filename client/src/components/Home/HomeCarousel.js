import React from "react";
import { Carousel } from "react-materialize";

import "./HomeCarousel.css";

function homeCarousel() {
  return (
    <section class="carousel-section">
      <Carousel
        options={{
          dist: 0,
          padding: 0,
          fullWidth: true,
          indicators: true,
          duration: 150
        }}
      >
        <div className="carousel-item" id="carousel-item-1">
          <div className="home-carousel-item-wrapper">
            <h2 className="white-text center-align">Batch 2k15</h2>
          </div>
        </div>
        <div className="carousel-item" id="carousel-item-1">
          <div className="home-carousel-item-wrapper">
            <h2 className="white-text center-align">Batch 2k15</h2>
          </div>
        </div>
        <div className="carousel-item" id="carousel-item-1">
          <div className="home-carousel-item-wrapper">
            <h2 className="white-text center-align">Batch 2k15</h2>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default homeCarousel;
