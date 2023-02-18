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

const pages = [
    'çarnes',
    'aves',
    'pescados'
]

const Pages = ( {carneItems, aveItems, pescadoItems, mariscoItems, pastaItems, ensaladaItems, sopaItems, salsaItems, aperitivoItems, bebidaItems, postreItems, CartItem, addToCart, shopItems}) => {
    return(
        <>
            {pages.forEach(product => {
                return (
                    <ProductsCard category={product}></ProductsCard>
                    
                )
            })}

            <Shop shopItems={shopItems} addToCart={addToCart} />
           
            <Wrapper/>
        </>
    )
}

export default Pages