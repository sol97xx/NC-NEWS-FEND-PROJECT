import ArticlesList from "./ArticlesList";
import React, { Component } from "react";
import SortForm from "./SortForm";
import * as api from "../api";
import ErrorHandler from "../ErrorHandler";

class ArticlesPage extends Component {
  state = { Articles: null, sortBy: "created_at", err: null };
  render() {
    return (
      <div className='article-div'>
        <div className='sort-form'>
        <SortForm
          handleSubmit={this.handleSortSubmit}
          default={this.state.sortBy}
        /></div>

        {this.state.err ? (
          <ErrorHandler err={this.state.err} />
        ) : this.state.Articles ? (
          <ArticlesList articles={this.state.Articles} />
        ) : (
          <h1 className='loading'>'Articles coming soon!' </h1>
        )}
      </div>
    );
  }

  handleSortSubmit = (e, value) => {
    e.preventDefault();
    this.setState({ sortBy: value });
  };

  fetchArticles = (sort, topic) => {
    return api.fetchAllArticles(sort, topic).then(({ data }) => {
      this.setState({ Articles: data.articles, err: null });
    });
  };

  componentDidMount() {
    this.fetchArticles(this.state.sortBy, this.props.topic).catch(err => {
      this.setState({ err: err });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.sortBy !== prevState.sortBy ||
      this.props.topic !== prevProps.topic
    ) {
      this.fetchArticles(this.state.sortBy, this.props.topic).catch(err => {
        this.setState({ err: err });
      });
    }
  }
}

export default ArticlesPage;
