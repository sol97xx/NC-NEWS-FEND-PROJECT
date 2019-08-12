import React from "react";
import VotesHandler from '../VotesHandler'
import DeleteComment from './DeleteComment'
const CommentsList = ({comments, removeComment, user}) => {
  return (
    <ul className='comments'>
    <h4 id="comments-heading">Comments:</h4> <br/>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            
              
              <p>{comment.body} </p>
            
            
            <p>Author: {comment.author} </p>
            <VotesHandler votes={comment.votes} article_id={comment.comment_id} url="/comments/"/>
            {comment.author === user && <DeleteComment removeComment={removeComment}
            id={comment.comment_id}/> }

          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;