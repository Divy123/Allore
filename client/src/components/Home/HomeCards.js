import React, { Component } from "react";
import "./HomeCards.css";

import LatestNewsSVG from "../../assets/img/misc/News.svg";

class NewsCards extends Component {
  state = {
    news: [
      {
        day: "29",
        month: "Nov",
        detail:
          "Consectetur officia est labore cupidatat cillum irure consectetur exercitation officia sint ut est."
      },
      {
        day: "23",
        month: "Oct",
        detail:
          "Consectetur officia est labore cupidatat cillum irure consectetur exercitation officia sint ut est."
      },
      {
        day: "16",
        month: "Aug",
        detail:
          "Consectetur officia est labore cupidatat cillum irure consectetur exercitation officia sint ut est."
      },
      {
        day: "24",
        month: "Nov",
        detail:
          "Consectetur officia est labore cupidatat cillum irure consectetur exercitation officia sint ut est."
      }
    ]
  };
  render() {
    return (
      <div className="news-cards">
        <div className="news-cards-inner">
          <h1>Latest News</h1>
          <div className="news-list">
            {this.state.news.map((v, i) => (
              <div className="news-list-item" key={i}>
                <div className="news-date">
                  {v.month} <span>{v.day}</span>
                </div>
                <div className="news-item-content">{v.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "end", marginTop: 28 }}>
            <a href="#">Read More...</a>
          </div>
        </div>

        <img src={LatestNewsSVG} alt="News SVG" className="news-card-svg" />
      </div>
    );
  }
}

export default NewsCards;
