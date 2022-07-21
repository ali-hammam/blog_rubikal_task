import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../fetcher/posts';

const PostDetails = () => {
  const {id} = useParams('id');
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    getPostById(id).then((response) => setPost(response))
  }, []);

  return (
    <div className='container text-center mt-5'>
      {post &&
        <>
          <h1 className='text-capitalize'>{post.title}</h1>
          <h4 className='font-weight-light'>{post.body}</h4>
        </>
      }
      {post && console.log(post)}
    </div>
  )
}

export default PostDetails