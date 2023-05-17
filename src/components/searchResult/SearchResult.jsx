import React from 'react'

function SearchResult({ results }) {
    return (
        <div>
            {
                results.map((product, id) => {
                    return <div key={id}>{product.name}</div>
                })
            }
        </div>
    )
}

export default SearchResult
