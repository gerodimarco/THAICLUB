import React from "react";



import CarneDeals  from "../components/carnes/CarneDeals";
import AveDeals  from "../components/aves/AveDeals";
import PescadoDeals  from "../components/pescados/PescadoDeals";
import MariscoDeals  from "../components/mariscos/MariscoDeals";
import PastaDeals  from "../components/pastas/PastaDeals";
import EnsaladaDeals  from "../components/ensaladas/EnsaladaDeals";
import SopaDeals  from "../components/sopas/SopaDeals";
import SalsaDeals  from "../components/salsas/SalsaDeals";
import AperitivoDeals  from "../components/aperitivos/AperitivoDeals";
import BebidaDeals  from "../components/bebidas/BebidaDeals";
import PostreDeals  from "../components/postres/PostreDeals";

import Home from "../components/mainpage/Home";

import Shop from "../components/shop/Shop";

import Wrapper from "../components/wrapper/Wrapper";

const Pages = ( {carneItems, aveItems, pescadoItems, mariscoItems, pastaItems, ensaladaItems, sopaItems, salsaItems, aperitivoItems, bebidaItems, postreItems, CartItem, addToCart, shopItems}) => {
    return(
        <>
            <Home CartItem = {CartItem}/>
            <CarneDeals carneItems={carneItems} addToCart = {addToCart}/>
            <AveDeals aveItems={aveItems} addToCart = {addToCart}/>
            <PescadoDeals pescadoItems={pescadoItems} addToCart = {addToCart}/>
            <MariscoDeals mariscoItems={mariscoItems} addToCart = {addToCart}/>
            <PastaDeals pastaItems={pastaItems} addToCart = {addToCart}/>
            <EnsaladaDeals ensaladaItems={ensaladaItems} addToCart = {addToCart}/>
            <SopaDeals sopaItems={sopaItems} addToCart = {addToCart}/>
            <SalsaDeals salsaItems={salsaItems} addToCart = {addToCart}/>
            <AperitivoDeals aperitivoItems={aperitivoItems} addToCart = {addToCart}/>
            <BebidaDeals bebidaItems={bebidaItems} addToCart = {addToCart}/>
            <PostreDeals postreItems={postreItems} addToCart = {addToCart}/>
            
            
            
            <Shop shopItems={shopItems} addToCart={addToCart} />
           
            <Wrapper/>
        </>
    )
}

export default Pages