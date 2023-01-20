import React from 'react'

import "./Header.css"
import Head from './Head'
import NavBar from './NavBar'
import Search from './Search'


const Header = ({CartItem}) => {
    return (
        <>
            <Head/>
            <Search CartItem ={CartItem}/>
            <NavBar/>
        </>
    )
}

export default Header