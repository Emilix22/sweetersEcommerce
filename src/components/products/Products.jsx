import React, {useState, useEffect} from 'react'
import './Products.css'
import ProductCard from '../productCard/ProductCard'
import Filters from '../filters/Filters';

function Products() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category : 'all',
        maxPrice: Infinity
      })

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price <= filters.maxPrice &&
                //esto en el caso que hubiese categorias 
                (
                    filters.category == 'all' ||
                    product.category == filters.category
                )
                //***************el return en el caso de sacar categorias no iria entre parentesis */
            )
        })
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(info => {
            setProducts(filterProducts(info.data))
        })
    }, [])

    return (
        <main className='mainContainer'>
            <h2>Nuestros Productos</h2>
            <Filters />
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
