import React from 'react';
import { Link } from 'react-router-dom';
import PostEditor from './PostEditor';
import PostRemover from './PostRemover';

const PostCard = ({posts, setPosts}) => {
  return (
    <>
      {posts && posts.map((post) => {
        return(
          <div key={post.id} className='mt-4'>
            <div className="card" style={{borderRadius:'20px'}}>
              <div className="card-header d-flex align-items-center" style={{backgroundColor:'antiquewhite', borderRadius:'10px'}}>
                <div className='col-xl-10'>
                  {post.title}
                </div>
                <div className='d-flex flex-row justify-content-end'>
                  <div className='mr-2'>
                    <Link to={`/post/${post.id}`} className='btn btn-primary' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-binoculars" viewBox="0 0 16 16">
                        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
                      </svg>
                    </Link>
                  </div>

                  <div className='mr-2'>
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
    </>
  )
}

export default PostCard