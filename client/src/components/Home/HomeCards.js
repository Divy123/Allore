import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./HomeCards.css";

import LatestNewsSVG from "../../assets/img/misc/News.svg";
import Loader from "../Loader";

const NewsCards = () => {
  return (
    <div className="news-cards">
      <div className="news-cards-inner">
        <h1>Latest News</h1>
        <div className="news-list">
          <Query query={GET_POSTS}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <div className="center">
                    <Loader />
                  </div>
                );
              if (error) {
                console.log(error.stack);
                return (
                  <div className="container">
                    <p className="red-text center">
                      There was some error while fetching the latest news.
                      Please try again later.
                    </p>
                  </div>
                );
              }
              return data.posts.map((post, index) => {
                var date = new Date(post.createdAt).getDate();
                var month = new Date(post.createdAt).toLocaleString("india", {
                  month: "short"
                });
                return (
                  <div className="news-list-item" key={index}>
                    <div className="news-date">
                      {month} <span>{date}</span>
                    </div>
                    <a
                      href="#!"
                      className="news-item-content"
                      style={{ color: "rgb(54, 54, 54)" }}
                    >
                      {post.title}
                    </a>
                  </div>
                );
              });
            }}
          </Query>
        </div>
        <div style={{ textAlign: "end", marginTop: 28 }}>
          <a href="#!">Read More...</a>
        </div>
      </div>

      <img
        src={LatestNewsSVG}
        alt="News SVG"
        className="news-card-svg hide-on-med-and-down"
      />
    </div>
  );
};

const GET_POSTS = gql`
  {
    posts {
      createdAt
      title
    }
  }
`;

export default NewsCards;
