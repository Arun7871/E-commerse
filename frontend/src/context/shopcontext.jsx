import React , {createContext,useState} from 'react'
import data from '../components/Assets/all_products'
export const shopcontext = createContext(null);
export const cartcontext = createContext(null);

const getDefaultCart = ()=>{
  let cart = {}
  for(let i=0;i<data.length;i++){
    cart[i] = 0;
  }
  return cart;
}


export const ShopContextProvider = (props) => {
  const [cartItems,setCartItems] = useState(getDefaultCart());
  const addToCart = (ind)=>{
    setCartItems((prev)=> ({...prev,[ind]:prev[ind]+1}))
    console.log(cartItems);
  }
  const removeFromCart = (ind)=>{
    setCartItems((prev)=> ({...prev,[ind]:prev[ind]-1}))
  }
  const getTotalAmount = ()=>{
    let amt = 0
    for(let item in cartItems){
      if(cartItems[item]==0)continue;
      let price = data.find((product)=>product.id===Number(item));
      price = price.new_price
      amt += cartItems[item]*price
    }
    return amt
  }
  const getCount = ()=>{
    let cnt = 0
    for(let item in cartItems){
      if(cartItems[item]>0){
        cnt+=cartItems[item];
      }
    }
    return cnt;
  }
  const contextValue = {data,cartItems,addToCart,removeFromCart,getTotalAmount,getCount};
  return (
    <div>
        <shopcontext.Provider value={contextValue}>
            {props.children}
        </shopcontext.Provider>
    </div>
  )
}
