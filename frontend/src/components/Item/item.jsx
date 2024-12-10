import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
export const Item = (props) => {
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}><img src={props.image}></img></Link>
        <p>{props.pro_name}</p>
        <p>{props.category}</p>
        <div className="price">
            <p>{props.new_price}</p>
            <p id="old">{props.old_price}</p>
        </div>
        <a href=""></a>
    </div>
  )
}
