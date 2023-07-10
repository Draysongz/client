import React from 'react'
import './nav.css'
import logo from './assets/logo.webp'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Navigation'>
        <img src={logo} alt="" className="logo" />
        <div className="ul navContainer">
            <li className="navlist"><a href="/" className="homeNav">HOME</a></li>
            <li className="navlist"><a href="/reviews" className="revNav">REVIEWS</a></li>
            <li className="navlist"><a href="/form" className="conNav">CONTACT US</a></li>
            <li className="navlist"><a href="/terms" className="TermsNav">TERMS & CONDITIONS</a></li>
        </div>
    </div>
  )
}

export default Nav