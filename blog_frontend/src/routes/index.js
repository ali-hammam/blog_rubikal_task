import React from 'react'
import { Route, Routes, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../components/Home'
import PostDetails from '../components/PostDetails'
import SignIn from '../components/Registration/Signin'
import SignUp from '../components/Registration/Signup/SignUp'

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/post/:id' element={<PostDetails />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export const UnAuthorizedRoutes = () => {
  return (
    <Routes>
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<SignIn />} />
        <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

const NotFound = () => {
  return(
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
      404  Not Found
    </div>
  )
}
export default AuthorizedRoutes