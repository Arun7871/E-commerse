import React from 'react'
import './breadcom.css'
import leftArrow from '../Assets/left-arrow.png'
export const Breadcum = (props) => {
  const product = props.product;
  return (
    <div className="container2">
        <p>HOME</p>
        <img src={leftArrow}></img>
        <p>SHOP</p>
        <img src={leftArrow}></img>
        <p className='toBig'>{product.category}</p>
        <img src={leftArrow}></img>
        <p className='toBig'>{product.pro_name}</p>
    </div>
  )
}
