import React, { useEffect, useState } from 'react';
import getAllPosts from '../../fetcher/posts';
import CreatePostForm from './CreatePostForm';
import PostCard from '../../abstract/PostCard';

const Home = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [otherUserPosts, setOtherUserPosts] = useState([]);
  const[newPostStatus, setNewPostStatus] = useState('');

  useEffect(() => {
    getAllPosts().then((response) => {
      setUserPosts(response['user_posts'])
      setOtherUserPosts(response['other_user_posts'])
    })
  }, []);

  return (
    <div className='container'>
      {
        newPostStatus==='post created successfully' &&
        <div className="alert alert-primary" role="alert">
          {newPostStatus}
        </div>
      }
      {
        newPostStatus==="post didn't created successfully" &&
        <div className="alert alert-danger" role="alert">
          post didn't created successfully
        </div>
      }
      <h1 className='mt-4'>Posts</h1>
      <button className='btn btn-link' data-toggle="modal" data-target="#createPost">
        Create Post
      </button>
      <CreatePostForm setNewPostStatus={setNewPostStatus} setPosts={setUserPosts} posts={userPosts}/>
      <div style={{overflowY:'scroll', height:'380px', padding:'25px', marginTop:'10px'}}>
        <PostCard 
          user_posts={userPosts}
          setUserPosts={setUserPosts}
          other_user_posts={otherUserPosts} 
        /> 
      </div>
    </div>
  )
}

export default Home