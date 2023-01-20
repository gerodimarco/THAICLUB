import React from "react"
import AveCard from "./AveCard"
import "./ave.css"

const AveDeals = ({ aveItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Aves</h1>
          </div>
          <AveCard aveItems={aveItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default AveDeals