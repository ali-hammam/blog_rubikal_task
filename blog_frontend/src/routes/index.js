import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import PostDetails from '../components/PostDetails'

const BlogRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/post/:id' element={<PostDetails />} />
    </Routes>
  )
}

export default BlogRouter