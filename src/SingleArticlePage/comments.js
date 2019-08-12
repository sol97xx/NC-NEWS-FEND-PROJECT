import React, { Component } from "react";
import * as api from "../api";
import CommentsList from "./commentsList";
import PostComment from "./PostComment";

class Comments extends Component {
  state = { comments: null };
  
  render() {
    
    return (
      <>
        
        <PostComment
          addComment={this.addComment}
          id={this.props.article_id}
          user={this.props.user}
        />
        
        {this.state.comments &&  <CommentsList
            
            comments={this.state.comments}
            removeComment={this.removeComment}
            user={this.props.user}
          />}

        
      </>
    );
  }
  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    api.fetchCommentsByArticle(this.props.article_id).then(({ data }) => {
      this.setState({ comments: data.comments });
    });
  };

  addComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  removeComment = commentID => {
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter(comment => {
          return comment.comment_id !== commentID;
        })
      };
    });
  };
}

export default Comments;
