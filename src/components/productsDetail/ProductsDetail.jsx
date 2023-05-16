import React, {useState, useEffect} from 'react'
import './ProductsDetail.css'
import { useParams } from 'react-router-dom'

function ProdutDetail() {
    
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/detail/${id}`)
        .then(res => res.json())
        .then(info => {
            setProduct(info.data)
        })
    }, [])

    return (
        <article>
            <h1 className='titulo'>Detalle del producto: {product.name}</h1>
                       
        </article>
    )
}

export default ProdutDetail
