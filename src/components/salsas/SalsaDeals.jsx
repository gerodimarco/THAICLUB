import React from "react"
import SalsaCard from "./SalsaCard"
import "./salsa.css"

const SalsaDeals = ({ salsaItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Salsas</h1>
          </div>
          <SalsaCard salsaItems={salsaItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default SalsaDeals