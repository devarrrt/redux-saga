import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LOGIN_REQUEST, LOGOUT } from './redux /actions/authAction'
import { FETCH_USERS, FETCH_USER_POSTS } from './redux /actions/userAction'
import { FILES_UPLOADING_START } from './redux /actions/filesActions'

const App = () => {
  const dispatch = useDispatch()
  const { isLoading, error, token } = useSelector(state => state.auth)
  const { filesUploadingProgress } = useSelector(state => state.files)

  useEffect(() => {
    dispatch({
      type: FETCH_USERS
    })
  }, [])

  const handleLogin = () => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        username: 'user1',
        password: '123'
      }
    })
  }
  const handleLogout = () => {
    dispatch({ type: LOGOUT })
  }
  const getPosts = () => {
    dispatch({
      type: FETCH_USER_POSTS, payload: { userId: 1 }
    })
  }

  const handleUploadClick = (e) => {
    dispatch({ type: FILES_UPLOADING_START })
  }

  return (
    <div>
      <button onClick={getPosts} > Get posts </button>
      <button
        onClick={handleLogin}
        style={{ padding: 15, cursor: 'pointer' }}> Login</button>
      <button
        onClick={handleLogout}
        style={{ padding: 15, cursor: 'pointer' }}> Logout</button>

      <button onClick={handleUploadClick}>Upload files</button>
      <p> Uploading progress: {filesUploadingProgress} % </p>

      {isLoading && <p> loging... </p>}
      {error && { error }}
      {token && 'token'}
    </div>
  )
}

export default App