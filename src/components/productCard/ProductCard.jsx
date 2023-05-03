import React from 'react'
import './productCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard(props) {
    return (
        
        <article className="product-card" id="product-card">
            <a href="#">
                <img src={`http://localhost:3000/img/products/${props.image}`} alt="foto"/>
            </a>
            <div className="description" id="description">
                <span className="name">{props.name}</span>
                <span className="price">$ {props.price}</span>
            </div>
            <FavoriteBorderIcon className='heartIcon'/>
            <button>Agregar <ShoppingCartIcon /> </button>   
        </article>    
    )
}

export default ProductCard
