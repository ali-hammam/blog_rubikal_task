import React from 'react'
import {deletePost} from '../../fetcher/posts';


const PostRemover = ({id, setPosts}) => {

  const deleteCurrentPost = () => {
    deletePost(id).then((response) => {
      response['isDeleted'] && setPosts((posts) => posts.filter((post) => post['id'] != id));
    });
  }

  return (
    <button className='btn btn-danger' onClick={deleteCurrentPost}>
        Delete Post
    </button>
  )
}

export default PostRemover