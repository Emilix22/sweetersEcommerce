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
        .catch(error => console.log(error))
    }, [])

    return (
        <main className='detail-container'>
            <h2 className='title'>{product.name}</h2>
            <article className='product-detail'>
                <img src={`http://localhost:3000/img/products/${product.image}`} alt="image-product" />
                <div className='text-detail'>
                    <p>Descripción: {product.description}</p>
                    <span>Precio: ${product.price}</span>
                    <span>Colores disponibles: ver esta parte </span>
                </div>  
            </article>
        </main>
    )
}

export default ProdutDetail
