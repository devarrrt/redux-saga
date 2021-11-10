import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LOGIN_REQUEST, LOGOUT } from './redux /actions/authAction'
import { FETCH_USERS } from './redux /actions/userAction'

const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.users.posts)
  const { isLoading, error, token } = useSelector(  state => state.auth )

  console.log(token, 'token');
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

  return (
    <div>
      <button
        onClick={handleLogin}
        style={{ padding: 15, cursor: 'pointer' }}> Login</button>
      <button
        onClick={handleLogout}
        style={{ padding: 15, cursor: 'pointer' }}> Logout</button>

      {isLoading && <p> loging... </p> }
      { error && {error} }
      { token && 'token' }
    </div>
  )
}

export default App
//16 минута не происходит получения токена 