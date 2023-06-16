import React, {useState, useEffect} from 'react'
import './Products.css'
import ProductCard from '../productCard/ProductCard'
import Filters from '../filters/Filters';

function Products({setProductsCart, productsCart, total, setTotal, countProducts, setCountProducts}) {

    
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category : 'all',
        maxPrice: 30000
      })


    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price <= Number(filters.maxPrice) && 
                (
                    filters.category == 'all' ||
                    product.category_id == filters.category
                )
            )
        })
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(info => {
            setProducts(filterProducts(info.data))
        })
    }, [filters])
    
    return (
        <main className='mainContainer'>
            <h2>Nuestros Productos</h2>
            <Filters setFilters={setFilters} filters={filters} />
            <div className='products' id='products'> 
               {
                products.map((product, index) => {
                    
                    return <ProductCard 
                            product={{...product, quantityCart: 1}} 
                            setProductsCart={setProductsCart} 
                            productsCart={productsCart} 
                            total={total} 
                            setTotal={setTotal} 
                            countProducts={countProducts} 
                            setCountProducts={setCountProducts} 
                            key= {product + index} /> 
                       
                })
               } 
            </div>
        </main>
    )
}

export default Products
