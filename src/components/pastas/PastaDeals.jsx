import React from "react"
import PastaCard from "./PastaCard"
import "./pastas.css"

const PastaDeals = ({ pastaItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Pastas</h1>
          </div>
          <PastaCard pastaItems={pastaItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default PastaDeals