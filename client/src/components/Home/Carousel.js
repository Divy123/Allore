import React, { Component } from "react";
import "./Carousel.css";
class Carousel extends Component {
  componentDidMount() {}
  render() {
    return (
      <section class="carousel-section">
        <div class="carousel carousel-slider" data-indicators="true">
          <div class="carousel-fixed-item">
            <div class="container">
              <h1 class="white-text">Allore</h1>
              <a
                class="btn waves-effect white grey-text darken-text-2"
                href="https://codepen.io/collection/nbBqgY/"
                target="_blank"
              >
                Register Now!
              </a>
            </div>
          </div>
          <div
            class="carousel-item white-text"
            href="#one!"
            id="carousel-item-1"
          ></div>
          <div
            class="carousel-item amber darken-2 white-text"
            href="#two!"
            id="carousel-item-1"
          ></div>
          <div
            class="carousel-item green white-text"
            href="#three!"
            id="carousel-item-1"
          ></div>
          <div
            class="carousel-item blue white-text"
            href="#four!"
            id="carousel-item-1"
          ></div>
        </div>
      </section>
    );
  }
}

export default Carousel;
