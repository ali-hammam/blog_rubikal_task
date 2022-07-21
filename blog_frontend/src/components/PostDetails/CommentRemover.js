import React from 'react';
import { deleteCommentFromPost } from '../../fetcher/comments';

const CommentRemover = ({comment, setComments}) => {
  
  const deleteComment = (comment) => {
    deleteCommentFromPost(comment.id).then((response) => {
      response['isDeleted'] && setComments((comments) => comments.filter((prevComment) => comment['id'] !== prevComment['id']));
    });
  }

  return (
    <div onClick={(e) => deleteComment(comment)} style={{cursor:'pointer'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-backspace-fill" viewBox="0 0 16 16">
        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
      </svg>
    </div>
  )
}

export default CommentRemover