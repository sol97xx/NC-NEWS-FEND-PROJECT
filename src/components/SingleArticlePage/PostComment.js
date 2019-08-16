//POST THEN SET SAME COMMENT IN ARRAY YOU FUCKING DIV


import React, { Component } from "react";
import * as api from '../api'
class PostComment extends Component {
  state = {
     comment_id: "temporary_id", body: "", author: "jessjelly", votes: 0
  };
 render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
         <p>
          Add Comment:</p>
          <textarea
            value={this.state.body}
            name="name"
            onChange={this.handleChange}
          />
        
        <button className='post-button' type="submit">Post</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.postComment(this.props.id,this.state.body, this.props.user).then((comment)=>
    {this.props.addComment(comment.data.comment)})
    this.setState({body:""})
    };
}

export default PostComment

