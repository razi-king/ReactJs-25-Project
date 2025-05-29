import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4" style={{ height: '6rem' }}>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/atm">Atm</Link>
    <Link to="/bill">Electricity Bill</Link>
</div>

  )
}
