import React , {useState,useContext} from 'react'
import './navbar.css'
import cart from '../Assets/cart.webp'
import logo from '../Assets/logo.webp'
import {Link} from 'react-router-dom'
import { shopcontext } from '../../context/shopcontext'
export const Navbar = () => {
    const [status,setStatus] = useState('shop');
    const {getCount} = useContext(shopcontext)
  return (
    <div class="navbar">
        <div className="logo">
            <img src={logo} alt="" />
            <h1>Shopper</h1>
        </div>
        <ul>
            <li onClick={()=> setStatus('shop')}><Link style={{ textDecoration :'none' }} to="/" >Home</Link>{(status === 'shop') ? <hr /> : null}</li>
            <li onClick={()=> setStatus('women')}><Link style={{ textDecoration :'none' }} to="/womens" >Women</Link>{(status === 'women') ? <hr /> : null}</li>
            <li onClick={()=> setStatus('men')}><Link style={{ textDecoration :'none' }} to="/mens" >Men</Link>{(status === 'men') ? <hr /> : null}</li>
            <li onClick={()=> setStatus('kids')}><Link style={{ textDecoration :'none' }} to="/kids" >Kids</Link>{(status === 'kids') ? <hr /> : null}</li>
        </ul>
        <div className="login">
            {localStorage.getItem('auth-token')?
            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
            <button onClick={()=> setStatus('login')}><Link style={{ textDecoration :'none',color:'white' }} to="/login" >Login</Link></button>
            }



            
            <Link style={{ textDecoration :'none' }} to="/cart" >
            <img src={cart} onClick={()=> setStatus('cart')}></img>
            </Link>
            <p class="counter"><p>{getCount()}</p></p>
        </div>
    </div>
  )
}
