import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="top-bar">
                <picture>
                    <a href="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </a>
                </picture>
                <form action="/products/search" method="POST">
                    <div className="search-bar-container">
                        <input type="search-text" name="searchTxt" placeholder="Buscar..."/>
                        <button className="search"><SearchIcon className='searchIcon' /></button>
                    </div>
                </form>
                <div className="icons">
                    <ShoppingCartIcon className="cartIcon" />
                    <MenuIcon className='hamMenu' />
                    <ul className="register">
                        <li>
                            <Link to="/register">Registrarme</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <HashLink to="/#offers">Ofertas</HashLink>
                </li>
                <li>
                    <Link to="/products/create">Crear Productos</Link>
                </li>
            </ul>  
        </div>
    )
}

export default Navbar
