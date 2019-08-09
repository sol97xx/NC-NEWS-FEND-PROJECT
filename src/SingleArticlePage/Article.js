import React, { Component } from "react";
import Axios from "axios";
import Comments from "./comments";
import VotesHandler from "../VotesHandler";
class Article extends Component {
  state = {
    Article: null
  };

  render() {
    return (
      this.state.Article && (
        <div className="Article">
          
          <p>{this.state.Article.article.body}</p>
          <p>{this.state.Article.article.author}</p>
          <div><VotesHandler
            votes={this.state.Article.article.votes}
            article_id={this.props.article_id}
            url="/articles/"
          /> </div>
          <Comments article_id={this.props.article_id} />
        </div>
      )
    );
  }

  componentDidMount() {
    Axios.get(
      `https://sol-ncnews-bend.herokuapp.com/api/articles/${
        this.props.article_id
      }`
    ).then(({ data }) => this.setState({ Article: data }));
  }
}

export default Article;
