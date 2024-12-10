import React ,{useContext} from 'react'
import './CSS/shopcategory.css'
import { shopcontext } from '../context/shopcontext';
import {Item} from '../components/Item/item'
import icon from '../components/Assets/scrolldown.png'
export const ShopCategory = (props) => {
  const {data} = useContext(shopcontext);
  return (
    <div className="shop-category">
        <img className="shopcategory-banner"src={props.banner} alt="" />
        <div className="shopCategory-indexSort">
            <p>
              <span>showing 1-12</span> out of 15
            </p>
            <div className="shopCategory-sort">
              <p>sort by <img className="Summa" src={icon} alt=""></img></p>
            </div>
        </div>
        <div className="shopCategory-products">
        {data.map((item,index) =>  {
          if(item.category===props.category)
            return <Item id={item.id} pro_name={item.pro_name} category={item.category} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
          else 
            return null;
        })}
        </div>
    </div>
  )
}
