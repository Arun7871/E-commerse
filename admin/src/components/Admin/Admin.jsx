import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Admin.css'
import { Routes,Route } from 'react-router-dom'
import Productadd from '../../pages/Productadd'
import Listproducts from '../Listproducts/Listproducts'
const Admin = () => {
  return (
    <div className="total">
      <Sidebar/>
    </div>
  )
}

export default Admin