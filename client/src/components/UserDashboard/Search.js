import React, { Component } from "react";
import Emoji from "react-emoji-render";

import Sidenav from "./Sidenav";

class Search extends Component {
  render() {
    return (
      <>
        <Sidenav />
        <h3 className="center-align">
          <Emoji text="Search your friends 🧐" />
        </h3>
        <div className="container">
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Type here</label>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
