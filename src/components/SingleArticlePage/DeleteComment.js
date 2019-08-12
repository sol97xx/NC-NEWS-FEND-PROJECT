import React from "react";
import * as api from '../api'
const DeleteComment = ({id,removeComment})=>{
    
    const remove = (id) => {api.deleteComment(id).then(()=>{removeComment(id)})}

    return(<button className="delete-button"  onClick ={(e)=>{remove(id)}}>Delete Comment</button>)

}

export default DeleteComment