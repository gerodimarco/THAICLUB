import React from "react"
import "./Style.css"

const Wrapper = () => {
  const data = [
    {
      cover: "./images/wrap/wrap-01.png",
      title: "Delivery",
      decs: "Ofrecemos precios competitivos de nuestras comidas con productos de la mejor calidad.",
    },
    {
      cover: "./images/wrap/wrap-02.png",
      title: "Pago seguro",
      decs: "Su compra puede pagarla con efectivo, o con los ditintos tipos de transferencia.",
    },
    {
      cover: "./images/wrap/wrap-03.png",
      title: "Brindamos confianza",
      decs: "Tus datos permanecen seguros y en forma confidencial.",
    },
    {
      cover: "./images/wrap/wrap-04.png",
      title: "24/7  ",
      decs: "Trabajamos online en forma continua.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                <img src={val.cover} alt="" />
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper