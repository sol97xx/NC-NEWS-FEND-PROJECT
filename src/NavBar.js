import React, { Component } from "react";
import { Link } from "@reach/router";
import Axios from "axios";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Link to="/">Home</Link>
      </nav>
    );
  }
}

export default NavBar;
