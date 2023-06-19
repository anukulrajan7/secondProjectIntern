import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='w-full h-full  px-4 py-7'>
      <Link to={'/'}>
      <img 
      className='object-cover'
      src="
    https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
    </Link>
    </div>
  )
}

export default Error