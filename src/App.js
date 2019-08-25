import "./App.css";
import React, { Component } from "react";
import ArticlesPage from "./components/homepage/Articles";
import Article from "./components/SingleArticlePage/Article";
import Header from "./components/homepage/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";

class App extends Component {
  state = { user: "CameronTheCunt" };
  render() {
    return (
      <div className="main-container" >
        <Header className="main-head--mainitem" />
        <p className="user">logged in as: jessjelly</p>
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
