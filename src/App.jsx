import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FETCH_USERS } from './redux /actions/userAction'

const App = () => {
  const dispatch = useDispatch()
  const posts  = useSelector(state => state.users.posts)
  
  console.log(posts);

  useEffect(() => {
    dispatch({
      type: FETCH_USERS
    })
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
