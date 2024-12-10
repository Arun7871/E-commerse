import React from 'react'
import image from '../Assets/hero-2.png'
import './offers.css'
export const Offers = () => {
  return (
    <div className="offer">
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on best seller products</p>
            <button>Check now</button>
        </div>
        <div className="offer-right">
            <img src={image}></img>
        </div>
    </div>
  )
}
