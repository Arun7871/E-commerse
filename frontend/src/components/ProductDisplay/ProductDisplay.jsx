import React ,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import { shopcontext } from '../../context/shopcontext';
export const ProductDisplay = (props) => {
    const product = props.product;
    const {addToCart} = useContext(shopcontext);
  return (
        <div className="productdisplay">
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
              <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>{product.pro_name}</h1>
            <div className="productdisplay-right-star">
              <p></p>
              <p><img src={star_icon}></img></p>
              <p><img src={star_icon}></img></p>
              <p><img src={star_icon}></img></p>
              <p><img src={star_icon}></img></p>
              <p>(122)</p>
            </div>
            <div className="prices">
              <div className="old">{product.old_price}</div>
              <div className="new">{product.new_price}</div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ex doloremque. Modi, aut. Ratione reprehenderit odio eos, voluptates possimus iste.
            </div>
            <div className="sizes">
              <p>Select sizes</p>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            <div><botton  className="cart" onClick={()=>addToCart(product.id)}>Add to Cart</botton></div>
            </div>
              <p>Category : {product.category}</p>
              <p>Tags : dolor, sit amet.  </p>
            </div>
          </div>

  )
}
