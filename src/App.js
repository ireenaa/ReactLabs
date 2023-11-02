
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
// import  {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './Pages/Catalog';
import Home from './Pages/Home';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      


      </BrowserRouter>
    </div>
  );
}

export default App;
