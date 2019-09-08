import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav className= "NavBar">
        <Link className="HomeLink link" to="/">
          Home
        </Link>

        <h3 className='topic-title'>View by topic:</h3>
        <div className="topics">
          <Link className="link" to="/topics/football">
            Football
            
          </Link>
          <Link className="link middle-link" to="/topics/coding">
            Coding
            
          </Link>
          <Link className="link" to="/topics/cooking">
            Cooking
            
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
