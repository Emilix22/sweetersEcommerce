import React from 'react'
import ProductCard from '../productCard/ProductCard'

function SearchResult({ results }) {
    return (
        
        <div className='products' id='products'>
               
            {
                results.map((product, index) => {
                    return <ProductCard {...product} key= {product + index} />
                })
            } 
        </div>
        
    )
}

export default SearchResult
