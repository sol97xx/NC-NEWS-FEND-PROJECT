import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Link className="link" to="/">
          Home
        </Link>
        <h3>View by topic:</h3>
        <Link className="link" to="/topics/football">
          Football
          <br />
        </Link>
        <Link className="link" to="/topics/coding">
          Coding
          <br />
        </Link>
        <Link className="link" to="/topics/cooking">
          Cooking
          <br />
        </Link>
      </nav>
    );
  }
}

export default NavBar;
