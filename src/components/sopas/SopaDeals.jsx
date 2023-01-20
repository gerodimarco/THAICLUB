import React from "react"
import SopaCard from "./SopaCard"
import "./sopa.css"

const SopaDeals = ({ sopaItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Sopas</h1>
          </div>
          <SopaCard sopaItems={sopaItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default SopaDeals