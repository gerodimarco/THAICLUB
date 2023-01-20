import React from "react"
import AperitivoCard from "./AperitivoCard"
import "./aperitivo.css"

const AperitivoDeals = ({ aperitivoItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Aperitivos</h1>
          </div>
          <AperitivoCard aperitivoItems={aperitivoItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default AperitivoDeals