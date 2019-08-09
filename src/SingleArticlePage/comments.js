import React, { Component } from "react";
import * as api from '../api'
import CommentsList from './commentsList'
class Comments extends Component {
state = {comments: null}
render(){
    return (
     <>{this.state.comments? <CommentsList className="comments" comments={this.state.comments}/> : <h1>somethingelse</h1>} </>)


    

}
componentDidMount(){
    api.fetchCommentsByArticle(this.props.article_id).then(
        ({data})=>{this.setState({comments: data.comments})})

}

}


export default Comments