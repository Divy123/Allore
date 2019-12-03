import React, { Component } from "react";
import { Link } from "react-router-dom";
import Batch2015Img from "../../assets/img/carousel/farewell_batch_2015.jpg";
import "./Carousel.css";

class Carousel extends Component {
  render() {
    return (
      <section className="carousel-section">
        <div className="carousel carousel-slider" data-indicators="true">
          <div className="carousel-fixed-item">
            <div className="container">
              <h1 className="white-text">Allore</h1>
              <Link
                to="/register"
                className="btn waves-effect grey darken-2 white-text darken-text-4"
              >
                Register Now!
              </Link>
            </div>
          </div>
          <div
            className="carousel-item white-text"
            href="#one!"
            id="carousel-item-1"
            style={{ backgroundImage: `url(${Batch2015Img})` }}
          ></div>
          <div
            className="carousel-item amber darken-2 white-text"
            href="#two!"
            id="carousel-item-1"
            style={{ backgroundImage: `url(${Batch2015Img})` }}
          ></div>
        </div>
      </section>
    );
  }
}

export default Carousel;
