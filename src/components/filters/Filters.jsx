import React from 'react'

function Filters() {
    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio Máximo</label>
                <input
                 type="range"
                 id='price'
                 min='6000'
                 max='30000' />
            </div>
        </section>
    )
}

export default Filters
