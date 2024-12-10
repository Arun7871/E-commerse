import React from 'react'
import image from '../Assets/logo.webp'
import whatsapp from '../Assets/whatsapp.png'
import facebook from '../Assets/facebook.jpg'
import insta from '../Assets/insta.png'
import './footer.css'
export const Footer = () => {
  return (
    <div className="footer">
        <div className="logo">
            <img src={image}></img>
            <h1>Shopper</h1>
        </div>
        <ul className="options">
            <li>Company</li>
            <li>Product</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-links">
            <img src={insta} alt="" />
            <img src={whatsapp} alt="" />
            <img src={facebook} alt="" />
        </div>
        <div className="copyright">
          <hr/>
          <p> copyright @ - all right reserved.</p>
        </div>
    </div>
  )
}
