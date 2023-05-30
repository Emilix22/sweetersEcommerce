import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './SearchResult.css'


function SearchResult({ results }) {
    return (
        <>
            <h2 className='title-searchResult'>Resultado de la búsqueda</h2>
        <div className='products' id='products'>
               
            {
                results.map((product, index) => {
                    return <ProductCard {...product} key= {product + index} />
                })

            } 
        </div>
        </>
    )
}

export default SearchResult
