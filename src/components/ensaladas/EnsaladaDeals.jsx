import React from "react"
import EnsaladaCard from "./EnsaladaCard"
import "./ensalada.css"

const EnsaladaDeals = ({ ensaladaItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Ensaladas</h1>
          </div>
          <EnsaladaCard ensaladaItems={ensaladaItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default EnsaladaDeals