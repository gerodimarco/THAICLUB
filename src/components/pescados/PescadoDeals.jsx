import React from "react"
import PescadoCard from "./PescadoCard"
import "./pescado.css"

const PescadoDeals = ({ pescadoItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Pescados</h1>
          </div>
          <PescadoCard pescadoItems={pescadoItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default PescadoDeals