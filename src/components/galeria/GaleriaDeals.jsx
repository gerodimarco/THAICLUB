import React from "react"


import { Link } from "react-router-dom"

const GaleriaDeals = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-brand">Club-Thai</div>
        
        <ul className="nav-items">
            <li className="nav-item">
                <Link to="/galeria">Galeria</Link>
            </li>
            <li className="nav-item">
                <Link to="/upload">Subir</Link>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default GaleriaDeals