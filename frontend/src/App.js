import './App.css';
import {Navbar} from './components/Navbar/navbar'
import {Shop} from './pages/shop'
import {Hero} from './components/Hero/hero'
import {Popular} from './components/popular/popular'
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import { ShopCategory } from './pages/ShopCategory';
import { Footer } from './components/footer/footer';
import kids from './components/Assets/kids_banner.jpg'
import mens from './components/Assets/men_banner.jpg'
import womens from './components/Assets/women_banner.jpg'
import { LoginSignup } from './pages/loginSignup';
import { Product } from './pages/product';
import { Cart } from './pages/cart';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}></Route>
        <Route path='/mens' element = {<ShopCategory category="mens" banner={mens}/> }></Route>
        <Route path='/womens' element = {<ShopCategory category="womens" banner={womens}/> }></Route>
        <Route path='/kids' element = {<ShopCategory category="kids" banner={kids}/> }></Route>
        <Route path='/product/:id' element = {<Product/> }></Route>
        <Route path='/login' element = {<LoginSignup/> }></Route>
        <Route path='/cart' element = {<Cart/> }></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
