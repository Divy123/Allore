import React, { useState } from "react";
import Emoji from "react-emoji-render";
import gql from "graphql-tag";
import AlumnusCard from "../Batch/AlumnusCard";
import Loader from "../Loader";
import { useLazyQuery } from "@apollo/react-hooks";

import Sidenav from "./Sidenav";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, { loading, error, data }] = useLazyQuery(SEARCH_QUERY);

  const onInputHandler = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Sidenav />
      <h3 className="center-align">
        <Emoji text="Search your friends 🧐" />
      </h3>
      <div className="container">
        <div className="input-field col s6">
          <input
            id="search_field"
            type="text"
            className="validate"
            onChange={onInputHandler}
          />
          <label htmlFor="search_field">Search Here...</label>
          <i className="material-icons prefix">search</i>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={() => users({ variables: { name: query } })}
        >
          Submit
          <i className="material-icons right">search</i>
        </button>

        {loading ? (
          <div className="center-align-div">
            <Loader />
          </div>
        ) : error ? (
          <div className="container center-align-div">
            <p className="red-text center">
              There was some error while fetching the data. Please try again
              later.
            </p>
          </div>
        ) : data && query ? (
          <>
            <p style={{ fontSize: "15px" }}>
              Total {data.users.length} results{" "}
              {data.users.length === 0 ? (
                <Emoji text="🙄" />
              ) : (
                <Emoji text="🥳" />
              )}
            </p>
            <div className="search-results-wrapper">
              {data.users.map((user, index) => {
                return (
                  <AlumnusCard
                    key={index}
                    title={user.name}
                    imgSrc={user.profile_pic}
                    college_email={user.college_email}
                    name={user.name}
                  />
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const SEARCH_QUERY = gql`
  query users($name: String!) {
    users(name: $name) {
      name
      college_email
      profile_pic
    }
  }
`;

export default Search;
