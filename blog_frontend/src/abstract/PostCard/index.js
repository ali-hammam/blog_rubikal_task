import React from 'react';
import PostEditor from '../../components/Home/PostEditor';
import PostRemover from '../../components/Home/PostRemover';
import PostCardLayout from './PostCardLayout';

const PostCard = ({user_posts, setUserPosts,other_user_posts}) => {
  return (
    <>
      {user_posts && user_posts.map((post) => {
        return(
          <div key={post.id}>
            <PostCardLayout id={post.id} title={post.title} body={post.body}>
              <div className='mr-2'>
                <PostRemover id={post.id} setPosts={setUserPosts} />
              </div>
              
              <div className='mr-2'>
                <PostEditor id={post.id} setPosts={setUserPosts} posts={user_posts} />
              </div>
            </PostCardLayout>
          </div>
        )
      })}

      {other_user_posts && other_user_posts.map((post) => <PostCardLayout key={post.id} id={post.id} title={post.title} body={post.body}/>)}
    </>
  )
}

export default PostCard