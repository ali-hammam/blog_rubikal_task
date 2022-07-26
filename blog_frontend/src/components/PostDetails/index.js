import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../fetcher/posts';
import Comments from './Comments';

const PostDetails = () => {
  const {id} = useParams('id');
  const [post, setPost] = useState(undefined);
  const [userComments, setUserComments] = useState([]);
  const [otherUsersComments, setOtherUsersComments] = useState([]);
  const [isPostAdmin, setIsPostAdmin] = useState(false);

  useEffect(() => {
    getPostById(id).then((response) => {
      setPost(response);
      setUserComments(response['user_comments'])
      setOtherUsersComments(response['other_users_comments'])
      setIsPostAdmin(response['isPostAdmin'])
    })
  }, []);

  return (
    <div className='container mt-5'>
      {post &&
        <>
          <div className='text-center'>
            <h1 className='col-xl-12 text-capitalize'>{post.post.title}</h1>
            {post.post.image && <blockquote className="col-xl-12 blockquote mb-0 mt-4">
              <img src={post.post.image} className='portrait' alt="" />
            </blockquote>}
            <h4 className='font-weight-light mt-4' style={{overflowX:'scroll'}}>{post.post.body}</h4>
          </div>
          <div className='mt-5'>
            <Comments id={id} 
              userComments={userComments} 
              setUserComments={setUserComments}
              otherUsersComments={otherUsersComments}
              setOtherUsersComments={setOtherUsersComments}
              isPostAdmin={isPostAdmin}
              
            />
          </div>
        </>
      }
    </div>
  )
}

export default PostDetails