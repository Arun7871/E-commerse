import React from 'react'
import logo from '../assets/nav-logo.svg'
import profile from '../assets/nav-profile.svg' 
import arrow from '../assets/arrow_icon.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <img src={logo} alt="" />
        <img src={profile} alt="" />
    </div>
    </>
  )
}

export default Navbar