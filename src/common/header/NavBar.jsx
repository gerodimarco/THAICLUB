import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [MobileMenu, setMobileMenu]= useState(false)

    return (
        <div>
            <header className="header">
                <div className="container d_flex">
                    
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/pages'>Paginas</Link>
                            </li>
                            <li>
                                <Link to='/user'>Cuenta Usuario</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>Cuenta Admin</Link>
                            </li>
                            <li>
                                <Link to='/track'>Mi orden</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contacto</Link>
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

