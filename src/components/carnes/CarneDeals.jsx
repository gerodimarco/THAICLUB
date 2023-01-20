import React from "react"
import CarneCard from "./CarneCard"
import "./carne.css"

const CarneDeals = ({ carneItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Carnes</h1>
          </div>
          <CarneCard carneItems={carneItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default CarneDeals