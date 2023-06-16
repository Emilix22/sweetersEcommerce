import React, {useState, useEffect} from 'react'
import './Offers.css'
import ProductCard from '../productCard/ProductCard'

function Offers({setProductsCart, productsCart, total, setTotal, countProducts, setCountProducts}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(info => {
            setProducts(info.data)
        })
    }, [])

    return (
        <div>
            <h2>Ofertas</h2>
            <div className='offers' id='offers'> 
               {
                products.map((product, index) => {
                    if (product.sale == 1) {
                       return <ProductCard 
                                product={{...product, quantityCart: 1}} 
                                setProductsCart={setProductsCart} 
                                productsCart={productsCart} 
                                total={total} 
                                setTotal={setTotal} 
                                countProducts={countProducts} 
                                setCountProducts={setCountProducts} 
                                key= {product + index} /> 
                    }   
                })
               } 
            </div>
        </div>
    )
}

export default Offers
