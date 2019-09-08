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
        
        <div className='article-container'>
        < div className = 'article-main'>
          <h2 className='article-title-name'>{this.state.Article.article.title}</h2>
          <p className='article-body'>{this.state.Article.article.body}</p>
          <p className='author'>Author: {this.state.Article.article.author}</p> </div> 

          <div class='votes-handler'><VotesHandler 
            votes={this.state.Article.article.votes}
            article_id={this.props.article_id}
            url="/articles/"
          /> </div>
          
          <Comments article_id={this.props.article_id} user={this.props.user} class='comments'/>
          
        </div>
      ) : <h1 className='loading'>Article arriving soon!</h1>
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
