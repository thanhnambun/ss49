import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
    // dung hook cung cấp 
    const location=useLocation()
    console.log(location)
  return (
    <div>Login</div>
  )
}
