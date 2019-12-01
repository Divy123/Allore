import React, { Component } from "react";
import "./Carousel.css";
class Carousel extends Component {
  componentDidMount() {}
  render() {
    return (
      <section className="carousel-section">
        <div className="carousel carousel-slider" data-indicators="true">
          <div className="carousel-fixed-item">
            <div className="container">
              <h1 className="white-text">Allore</h1>
              <a
                className="btn waves-effect grey darken-2 white-text darken-text-4"
                href="#!"
              >
                Register Now!
              </a>
            </div>
          </div>
          <div
            className="carousel-item white-text"
            href="#one!"
            id="carousel-item-1"
          ></div>
          <div
            className="carousel-item amber darken-2 white-text"
            href="#two!"
            id="carousel-item-1"
          ></div>
          <div
            className="carousel-item green white-text"
            href="#three!"
            id="carousel-item-1"
          ></div>
          <div
            className="carousel-item blue white-text"
            href="#four!"
            id="carousel-item-1"
          ></div>
        </div>
      </section>
    );
  }
}

export default Carousel;
