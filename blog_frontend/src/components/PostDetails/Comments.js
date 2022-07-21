import React from 'react';
import CommentCreator from './CommentCreator';
import CommentRemover from './CommentRemover';
import './style.css';

const Comments = ({id, comments, setComments}) => {

  return (
    <div>
      <h1>Comments</h1>
      <CommentCreator id={id} setComments={setComments} comments={comments}/>

      <div className='container'>
        <div style={{overflowY:'scroll', height:'320px', padding:'25px'}}>
        {
          comments.map((comment) => {
            return(
            <div className='comment_layout row' key={comment.id} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <div className='col-xl-10'>
              {comment.comment}
              </div>
              
              <CommentRemover comment={comment} setComments={setComments}/>
            </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Comments