import React from "react"
import BebidaCard from "./BebidaCard"
import "./bebida.css"

const BebidaDeals = ({ bebidaItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Bebidas</h1>
          </div>
          <BebidaCard bebidaItems={bebidaItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default BebidaDeals