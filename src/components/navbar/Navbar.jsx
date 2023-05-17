import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar({ setResults }) {

    const [input, setInput] = useState('')

    const fetchData = (value) => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(info => {
            const results = info.data.filter((product) => {
                return value && product.name.toLowerCase().includes(value)
            })
            setResults(results)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)

    }
    
    return (
        <div className='navbar'>
            <div className="top-bar">
                <picture>
                    <a href="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </a>
                </picture>
                <form action="">
                    <div className="search-bar-container">
                        <input onChange={(e) => handleChange(e.target.value)} type="search-text" name="searchTxt" placeholder="Buscar por nombre..." value={input}/>
                    </div>
                </form>
                <div className="icons">
                    <ShoppingCartIcon className="cartIcon" />
                    <MenuIcon className='hamMenu' />
                    <ul className="register">
                        <li>
                            <Link to="/users/register">Registrarme</Link>
                        </li>
                        <li>
                            <Link to="/users/login">Login</Link>
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
