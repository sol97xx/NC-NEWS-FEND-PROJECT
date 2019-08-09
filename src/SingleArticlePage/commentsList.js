import React from "react";
import { Link } from "@reach/router";
import VotesHandler from '../VotesHandler'
const CommentsList = ({comments}) => {
  return (
    <ul className='comments'>
    <h4 id="comments-heading">Comments:</h4> <br/>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            
              
              <p>{comment.body} </p>
            
            
            <p>Author: {comment.author} </p>
            <VotesHandler votes={comment.votes} article_id={comment.comment_id} url="/comments/"/>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;