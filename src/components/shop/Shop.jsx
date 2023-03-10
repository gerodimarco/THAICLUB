import React from "react"

import ShopCart from "./ShopCart"
import "./Style.css"

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Ofertas</h2>
              </div>
              <div className='heading-right row '>
                
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart  shopItems={shopItems} addToCart={addToCart}/>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Shop