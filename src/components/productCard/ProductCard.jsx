import React from 'react'
import {Link} from 'react-router-dom';
import './productCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard(props, {setProductsCart}) {

    const addCart = (event) => {
        console.log(`agregue`)
    }

    return (
        
        <article className="product-card" id="product-card">
            <Link to={`/products/detail/${props.id}`}>
                <img src={`http://localhost:3000/img/products/${props.image}`} alt="foto"/>
            </Link>
            <div className="description" id="description">
                <span className="name">{props.name}</span>
                <span className="price">$ {props.price}</span>
            </div>
            <FavoriteBorderIcon className='heartIcon'/>
            <button onClick={addCart}>Agregar <ShoppingCartIcon /> </button>   
        </article>    
    )
}

export default ProductCard
