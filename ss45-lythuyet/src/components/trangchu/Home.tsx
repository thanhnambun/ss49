import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function home() {
  return (
    <div>
        <Link to="/about"></Link>
        <Outlet/>
    </div>
  )
}
