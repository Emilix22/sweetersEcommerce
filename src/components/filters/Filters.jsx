import React, { useState } from 'react'
import './Filters.css'

function Filters({ setFilters }) {
    const [maxPrice, setMaxPrice] = useState(0);

    const handleChangeMaxPrice = (event) => {
        setMaxPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState, 
            maxPrice: event.target.value 
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            category: event.target.value 
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio Máximo</label>
                <input
                 type="range"
                 id='price'
                 min='6000.00'
                 max='30000.00' 
                 onChange={handleChangeMaxPrice}/>
                 <span>${maxPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                </select>
            </div>
        </section>
    )
}

export default Filters
