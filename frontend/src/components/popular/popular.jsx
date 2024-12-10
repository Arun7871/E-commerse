import React from 'react'
import data from '../Assets/dataPopular'
import {Item} from '../Item/item'
import './popular.css'
export const Popular = () => {
  return (
    <div className="container">
        <h1>Top collections </h1>
        <hr/>
        <div className="items">
            {data.map((item,index)=>  <Item id={item.id} pro_name={item.pro_name} category={item.category} image={item.image} old_price={item.old_price} new_price={item.new_price}/>)}
        </div>
    </div>
  )
}
