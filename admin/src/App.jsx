import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './components/Admin/Admin'
import Productadd from './pages/Productadd'
import Listproducts from './components/Listproducts/Listproducts'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Admin/>}></Route>
        <Route path='/addproduct' element = {<Productadd/>}></Route>
        <Route path='/productlist' element = {<Listproducts/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App