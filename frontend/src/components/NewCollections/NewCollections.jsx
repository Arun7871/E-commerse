import React from 'react'
import data from '../Assets/data'
import { Item } from '../Item/item'
import './NewCollections.css'
export const NewCollections = () => {
  return (
    <div className="collections">
        <h1>New Collections</h1>
        <hr/>
        <div className="newCollections">
            {data.map((item,index)=>  <Item id={item.id} pro_name={item.pro_name} category={item.category} image={item.image} old_price={item.old_price} new_price={item.new_price}/>)}
        </div>
    </div>
  )
}
