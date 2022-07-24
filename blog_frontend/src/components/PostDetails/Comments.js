import React from 'react';
import CommentLayout from '../../abstract/Comment/CommentLayout';
import CommentCreator from './CommentCreator';
import CommentEditor from './CommentEditor';
import CommentRemover from './CommentRemover';
import './style.css';

const Comments = ({id, userComments, setUserComments, otherUsersComments, isPostAdmin, setOtherUsersComments}) => {
  return (
    <div>
      <h1>Comments</h1>
      <CommentCreator id={id} setComments={setUserComments} comments={userComments}/>

      <div className='container'>
        <div style={{overflowY:'scroll', height:'320px', padding:'25px'}}>
          {
            userComments.map((comment) => {
              return(
                <CommentLayout comment={comment} key={comment.id}>                
                  <CommentEditor id={comment.id} comments={userComments} setComments={setUserComments}/>
                  <CommentRemover comment={comment} setComments={setUserComments}/>
                </CommentLayout>
              )
            })
          }
          
          { !isPostAdmin && otherUsersComments.map((comment) => <CommentLayout comment={comment} key={comment.id} />) }
          
          {
            isPostAdmin &&
            otherUsersComments.map((comment) => {
              return(
                <CommentLayout comment={comment} key={comment.id}>                
                  <CommentRemover comment={comment} setComments={setOtherUsersComments}/>
                </CommentLayout>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Comments