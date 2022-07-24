import React from 'react'

const CommentLayout = (props) => {
  return (
    <div className='comment_layout row' key={props.comment.id} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <div className='col-xl-10'>
      {props.comment.comment}
      </div>
      
      {props.children}
    </div>
  )
}

export default CommentLayout