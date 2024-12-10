import React from 'react'
import all_products from '../components/Assets/all_products'
import { useParams } from 'react-router-dom'
import { Breadcum } from '../components/Breadcum/breadcum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';

export const Product = (props) => {
  const {id} = useParams();
  const product = all_products.find((item) => item.id===Number(id));
  return (
    <div>
        <Breadcum product={product}/>
        <ProductDisplay product = {product}/>
    </div>
  )
}
