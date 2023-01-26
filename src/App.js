import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Header from './common/header/Header';
import Pages from './pages/Pages';
import AveData from './components/aves/AveData';
import CarneData from './components/carnes/CarneData';
import PescadoData from './components/pescados/PescadoData';
import MariscoData from './components/mariscos/MariscoData';
import PastaData from './components/pastas/PastaData';
import EnsaladaData from './components/ensaladas/EnsaladaData';
import SopaData from './components/sopas/SopaData';
import SalsaData from './components/salsas/SalsaData';
import AperitivoData from './components/aperitivos/AperitivoData';
import BebidaData from './components/bebidas/BebidaData';
import PostreData from './components/postres/PostreData';
import Cart from './common/cart/Cart';
import Sdata from './components/shop/Sdata';
import Footer from './common/footer/Footer';

function App() {
  // stpe 1: feth data from database
  
  const {carneItems} = CarneData
  const {aveItems} = AveData
  const {pescadoItems} = PescadoData
  const {mariscoItems} = MariscoData
  const {pastaItems} = PastaData
  const {ensaladaItems} = EnsaladaData
  const {sopaItems} = SopaData
  const {salsaItems} = SalsaData
  const {aperitivoItems} = AperitivoData
  const {bebidaItems} = BebidaData
  const {postreItems} = PostreData
  const {shopItems} = Sdata

  const [CartItem, setCardItem] = useState([])
  const addToCart = (product) =>{
    const productExit = CartItem.find((item) => item.id ===product.id)
    if(productExit){
      setCardItem(CartItem.map((item)=>
      (item.id===product.id ? {...productExit, qty: productExit.qty + 1} : item)))
    }else {
      setCardItem([...CartItem, { ...product, qty:1 }])
    }
  } 
  
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty ===1){
      setCardItem(CartItem.filter((item)=>item.id !== product.id ))
    }else {
      setCardItem(CartItem.map((item)=>(item.id === product.id? {...productExit, qty: productExit.qty-1} : item)))
    }
  }

  return (
    <>
     
     
     <Router>
      <Header CartItem ={CartItem}/>
      <Switch>
            <Route path="/" exact>
              <Pages carneItems ={carneItems} aveItems ={aveItems} pescadoItems ={pescadoItems} mariscoItems ={mariscoItems} 
              pastaItems ={pastaItems} ensaladaItems ={ensaladaItems} sopaItems ={sopaItems} salsaItems ={salsaItems}
              aperitivoItems ={aperitivoItems} bebidaItems ={bebidaItems} postreItems ={postreItems} 
              addToCart = {addToCart} shopItems = {shopItems}/>
            </Route>
            
            <Route path="/cart" exact>
              <Cart CartItem ={CartItem} addToCart = {addToCart} decreaseQty = {decreaseQty}/>
            </Route>
            
      </Switch>
      <Footer/>
    </Router>


    </>
  );
}

export default App;
