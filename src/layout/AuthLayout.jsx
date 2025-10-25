import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='bg-(--bg-principal) h-screen'>
      <Outlet/>
    </div>
  )
}

export default AuthLayout