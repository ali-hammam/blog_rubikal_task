import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getAllPosts from '../../fetcher/posts';
import CreatePostForm from './CreatePostForm';
import PostEditor from './PostEditor';
import PostRemover from './PostRemover';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const[newPostStatus, setNewPostStatus] = useState('');

  useEffect(() => {
    getAllPosts().then((response) => setPosts(response))
  }, []);

  return (
    <div className='container'>
      {
        newPostStatus=='post created successfully' &&
        <div className="alert alert-primary" role="alert">
          {newPostStatus}
        </div>
      }
      {
        newPostStatus=="post didn't created successfully" &&
        <div className="alert alert-danger" role="alert">
          post didn't created successfully
        </div>
      }
      {    posts && console.log(posts) }
      <h1 className='mt-4'>Posts</h1>
      <button className='btn btn-link' data-toggle="modal" data-target="#createPost">
        Create Post
      </button>
      <CreatePostForm setNewPostStatus={setNewPostStatus} setPosts={setPosts} posts={posts}/>
      {posts && posts.map((post) => {
        return(
          <div key={post.id} className='mt-4'>
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div className='col-xl-7'>
                  {post.title}
                </div>
                <div className='d-flex flex-row justify-content-end'>
                  <div className='mr-5'>
                    <Link to={`/post/${post.id}`} className='btn btn-primary' >
                      Show Post Details
                    </Link>
                  </div>

                  <div className='mr-4'>
                    <PostRemover id={post.id} setPosts={setPosts} />
                  </div>
                  
                  <div className='mr-2'>
                    <PostEditor id={post.id} setPosts={setPosts} posts={posts} />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{post.body}</p>
                </blockquote>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home