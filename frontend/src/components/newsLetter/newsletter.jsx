import React from 'react'
import './newsletter.css'
export const Newsletter = () => {
  return (
    <div className="newsLetter">
        <h1>Get Exclusive offer on your email</h1>
        <p>Susbsribe to our newsletter and stay updated</p>
        <div className="subscribe">
            <input placeholder="Your email id"></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
