import React, {useState, useEffect} from 'react'
import './Products.css'
import ProductCard from '../productCard/ProductCard'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(info => {
            setProducts(info.data)
        })
    }, [])

    return (
        <main className='mainContainer'>
            <h2>Nuestros Productos</h2>
            <div className='products' id='products'> 
               {
                products.map((product, index) => {
                    
                    return <ProductCard {...product} key= {product + index} /> 
                       
                })
               } 
            </div>
        </main>
    )
}

export default Products
