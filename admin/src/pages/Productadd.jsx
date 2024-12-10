import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Addproduct from '../components/Addproduct/Addproduct'
import './CSS/addproduct.css'
const Productadd = () => {
  return (
    <div className="productaddpage">
        <Sidebar/>
        <Addproduct/>
    </div>
  )
}

export default Productadd