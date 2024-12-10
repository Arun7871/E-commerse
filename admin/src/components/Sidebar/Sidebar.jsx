import React from 'react'
import './Sidebar.css'
import cart from '../assets/Product_Cart.svg'
import list from '../assets/Product_list_icon.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/addproduct" style={{textDecoration:'none'}}>
            <div className="addproduct-btn">
                <img src={cart} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to="/productlist" style={{textDecoration:'none'}}>
            <div className="productlist-btn">
                <img src={list} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar