import React, { useEffect, useState } from 'react';
import getAllPosts from '../../fetcher/posts';
import CreatePostForm from './CreatePostForm';
import PostCard from './PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const[newPostStatus, setNewPostStatus] = useState('');

  useEffect(() => {
    getAllPosts().then((response) => setPosts(response))
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
      <CreatePostForm setNewPostStatus={setNewPostStatus} setPosts={setPosts} posts={posts}/>
      <div style={{overflowY:'scroll', height:'350px', padding:'25px'}}>
        {posts.length > 0 && <PostCard posts={posts} setPosts={setPosts}/>}
      </div>
    </div>
  )
}

export default Home