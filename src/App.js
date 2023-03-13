import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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


import Welcome from "./components/welcome/Welcome";

import Register from "./components/register/Register";
import Login from "./components/login/Login"
import Galeria from "./components/galeria/Galeria"
import Upload from './components/galeria/Upload';
import Contacto from './components/contacto/Contacto';
import Acerca from './components/acerca/Acerca';


import Home from "./paginas/home/Home";
import Logeo from "./paginas/login/Logeo";
import List from "./paginas/list/List";
import Single from "./paginas/single/Single";
import New from "./paginas/new/New";
import { productInputs, userInputs } from "./formSource";



import Admin from './pages/Admin';


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
          
        <Route path="/log" exact>
          <Login/>
        </Route>
        <Route path="/reg" exact>
          <Register/>
        </Route>

        <Route path="/acer" exact>
          <Acerca/>
        </Route>

        <Route path="/cont" exact>
          <Contacto/>
        </Route>

        <Switch>
            <Route component={Upload} path="/upload" />
            <Route component={Galeria} path="/gal" />
        </Switch> 
        
        <Route path="/Admin" exact>
            <Home/> 
        </Route>

        
        
        <Route path="/welcome">
        </Route> 


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
