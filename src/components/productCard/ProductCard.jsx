import React from 'react'
import {Link} from 'react-router-dom';
import './productCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({product, setProductsCart, productsCart}) {

    const addCart = (product) => {
       setProductsCart([...productsCart, product])
        
    }
    return (
        
        <article className="product-card" id="product-card">
            <Link to={`/products/detail/${product.id}`}>
                <img src={`http://localhost:3000/img/products/${product.image}`} alt="foto"/>
            </Link>
            <div className="description" id="description">
                <span className="name">{product.name}</span>
                <span className="price">$ {product.price}</span>
            </div>
            <FavoriteBorderIcon className='heartIcon'/>
            <button onClick={() => {addCart (product)}}>Agregar <ShoppingCartIcon /> </button>   
        </article>    
    )
}

export default ProductCard
