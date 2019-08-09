import ArticlesList from "./ArticlesList";
import React, { Component } from "react";
import { Link } from "@reach/router";
import SortForm from "./SortForm";
import * as api from "../api";

class ArticlesPage extends Component {
  state = { Articles: null, sortBy: "created_at" };
  render() {
    return (
      <>
        <h3>Sort By:</h3>
        <SortForm
          handleSubmit={this.handleSortSubmit}
          default={this.state.sortBy}
        />
        <div className="topics">
        <h3>View by topic:</h3>
        <Link to="/topics/football">
          Football
          <br />
        </Link>
        <Link to="/topics/coding">
          Coding
          <br />
        </Link>
        <Link to="/topics/cooking">
          Cooking
          <br />
        </Link>
        </div>

        {this.state.Articles ? (
          <ArticlesList articles={this.state.Articles} />
        ) : (
          <h1>'Articles coming soon!' </h1>
        )}
      </>
    );
  }

  handleSortSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    this.setState({ sortBy: value });
  };

  fetchArticles = (sort, topic) => {
    api.fetchAllArticles(sort, topic).then(({ data }) => {
      this.setState({ Articles: data.articles });
    });
  };

  componentDidMount() {
    this.fetchArticles(this.state.sortBy, this.props.topic);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.sortBy !== prevState.sortBy ||
      this.props.topic !== prevProps.topic
    ) {
      this.fetchArticles(this.state.sortBy, this.props.topic);
    }
  }
}

export default ArticlesPage;
