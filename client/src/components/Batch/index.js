import React, { useContext } from "react";
import Sidenav from "../UserDashboard/Sidenav";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import AlumnusCard from "./AlumnusCard";

import "./Batch.css";
import "../Login/Login.css";
import { AuthContext } from "../../contexts/authContext";
import Loader from "../Loader";

const Batch = props => {
  const { state } = useContext(AuthContext);

  const getTruncatedName = name => {
    if (name.length > 15) {
      name = name.substr(0, 12) + " ...";
    }
    return name;
  };

  return (
    <>
      <Sidenav />
      <div className="main-layout-wrapper">
        <h1 style={{ textAlign: "center" }}>Batch {state.year}</h1>
        <Query query={GET_USERS}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div className="center">
                  <Loader />
                </div>
              );
            if (error) {
              return (
                <div className="container">
                  <p className="red-text center">
                    There was some error while fetching the data. Please try
                    again later.
                  </p>
                </div>
              );
            }
            return (
              <div className="main-layout-wrapper-3">
                <div className="batch-alumnus-wrapper">
                  {data.users.map((alumnus, index) => (
                    <AlumnusCard
                      title={alumnus.name}
                      imgSrc={alumnus.profile_pic}
                      college_email={alumnus.college_email}
                      name={getTruncatedName(alumnus.name)}
                    />
                  ))}
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    </>
  );
};

const GET_USERS = gql`
  {
    users(year: ${localStorage.getItem("year")}) {
      name
      college_email
      email
      profile_pic
      linkedIn_link
      twitter_link
      github_link
      fb_link
    }
  }
`;

export default Batch;
