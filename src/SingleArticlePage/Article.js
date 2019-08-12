import React, { Component } from "react";
import Comments from "./comments";
import VotesHandler from "../VotesHandler";
import ErrorHandler from '../ErrorHandler'
import * as api from '../api'
class Article extends Component {
  state = {
    Article: null,
    err: null
  };

  render() {
    return (
      this.state.err ? <ErrorHandler err = {this.state.err}/> :
      this.state.Article ? (
        <>
          <h2>{this.state.Article.title}</h2>
          <p>{this.state.Article.article.body}</p>
          <p>{this.state.Article.article.author}</p>
          <><VotesHandler class='votes-handler'
            votes={this.state.Article.article.votes}
            article_id={this.props.article_id}
            url="/articles/"
          /> </>
          
          <Comments article_id={this.props.article_id} user={this.props.user} class='comments'/>
          
        </>
      ) : <h1>Article arriving soon!</h1>
    );
  }

  fetchArticle = ()=> api.getSingleArticle(this.props.article_id)
  .then(({ data }) => this.setState({ Article: data }))
  .catch((err)=>{this.setState({err: err})})

  componentDidMount() {
    this.fetchArticle()
  }
}

export default Article;
