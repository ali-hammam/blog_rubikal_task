import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../fetcher/posts';
import Comments from './Comments';

const PostDetails = () => {
  const {id} = useParams('id');
  const [post, setPost] = useState(undefined);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostById(id).then((response) => {setPost(response); setComments(response.comments)})
  }, []);

  return (
    <div className='container mt-5'>
      {post &&
        <>
          <div className='text-center'>
            <h1 className='text-capitalize'>{post.post.title}</h1>
            <h4 className='font-weight-light'>{post.post.body}</h4>
          </div>
          <Comments id={id} comments={comments} setComments={setComments}/>
        </>
      }
      {post && console.log(post)}
    </div>
  )
}

export default PostDetails