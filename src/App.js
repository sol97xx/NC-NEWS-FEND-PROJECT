import "./App.css";
import React, { Component } from "react";
import ArticlesPage from "./homepage/Articles";
import Article from "./SingleArticlePage/Article";
import Header from "./homepage/Header";
import NavBar from "./NavBar";
import { Router } from "@reach/router";

class App extends Component  {
  state={user: "jessjelly"}
  render () {return (
    <div className="main-container">
      <Header />
      <p className="user">logged in as: jessjelly</p>
      <NavBar className="NavBar"/>
      <Router>
        <ArticlesPage path="/" className="home" />
        <ArticlesPage path="/topics/:topic" className="home" />
        <Article path="/:article_id" user={this.state.user}/>
      </Router>
    </div>
  );}
};

export default App;
