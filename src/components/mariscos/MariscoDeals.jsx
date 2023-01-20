import React from "react"
import MariscoCard from "./MariscoCard"
import "./marisco.css"

const MariscoDeals = ({ mariscoItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Mariscos</h1>
          </div>
          <MariscoCard mariscoItems={mariscoItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default MariscoDeals