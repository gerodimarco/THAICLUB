import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [MobileMenu, setMobileMenu]= useState(false)

    return (
        <div>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fa-solid fa-border-all"></span>
                            <h4>
                                Categories <i className="fa fa-chevron-down"></i>
                            </h4>
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/log'>Login</Link>
                            </li>
                            <li>
                                <Link to='/reg'>Registro</Link>
                            </li>
                            <li>
                                <Link to='/admin'>Administrador</Link>
                            </li>
                            <li>
                                <Link to='/gal'>Galeria</Link>
                            </li>
                            <li>
                                <Link to='/orden'>Mi orden</Link>
                            </li>
                            <li>
                                <Link to='/cont'>Contacto</Link>
                            </li>
                            <li>
                                <Link to='/acer'>Acerca de Nosotros</Link>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() =>setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? 
                                <i className="fas fa-times close home-bth"></i>:
                                <i className="fa-solid fa-bars open"></i>    
                            }
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar

