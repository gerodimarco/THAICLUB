import React from "react"
import "./Style.css"
import logo from '../assets/images/logomain.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <img src={logo} alt="" />
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p> */}
            {/* <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div> */}
          </div>

          <div className='box'>
            <h2>Acerca de Nosotros</h2>
            <ul>
              <li>Nuestros locales</li>
              <li>Politicas de envios</li>
            </ul>
          </div>
          {/* <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div> */}
          <div className='box-2'>
            <h2>Contactanos</h2>
            <ul>
              <li>Avenida Aconquija 365, Yerba Buena, Tucuman, Argentina </li>
              <li>Email: thaiclub@gmail.com</li>
              <li>Telefono: +54 93815541222</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer