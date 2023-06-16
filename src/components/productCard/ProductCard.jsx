import React from 'react'
import {Link} from 'react-router-dom';
import './productCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from 'sweetalert2'

function ProductCard({product, setProductsCart, productsCart, total, setTotal, countProducts, setCountProducts}) {

    const addCart = (product) => {

       if(productsCart.find(item => item.id == product.id)) {

            const products = productsCart.map(item => item.id == product.id 
                ? {...item, quantityCart: item.quantityCart + 1} 
                : item)
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'center-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                
                Toast.fire({
                icon: 'success',
                title: `Se agregó una vez más el producto ${product.name} al carrito`
                })    

            setCountProducts(countProducts + product.quantityCart)
            setTotal(total + (product.price * product.quantityCart))
            setProductsCart([...products])
       } else {

        const Toast = Swal.mixin({
            toast: true,
            position: 'center-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Se agregó el producto ${product.name} al carrito`
          })    

           setCountProducts(countProducts + product.quantityCart)
           setTotal(total + (product.price * product.quantityCart))
           setProductsCart([...productsCart, product])
       }
        
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
