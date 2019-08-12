import "./App.css";
import React, { Component } from "react";
import ArticlesPage from "./homepage/Articles";
import Article from "./SingleArticlePage/Article";
import Header from "./homepage/Header";
import NavBar from "./NavBar";
import { Router } from "@reach/router";

class App extends Component {
  state = { user: "jessjelly" };
  render() {
    return (
      <div className="main-container" >
        <Header className="main-head--mainitem" />
        <p className="user--mainitem">logged in as: jessjelly</p>
        <NavBar className="NavBar--mainitem" />
        <Router>
          <ArticlesPage path="/" className="home--mainitem" />
          <ArticlesPage path="/topics/:topic" className="home--mainitem" />
          <Article path="/:article_id" user={this.state.user} className='article-page--mainitem'/>
        </Router>
      </div>
    );
  }
}

export default App;
