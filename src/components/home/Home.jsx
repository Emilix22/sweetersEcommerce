import React from 'react'
import './Home.css';
import Banner from '../banner/Banner';
import Offers from '../offers/Offers';

function Home({setProductsCart, productsCart, total, setTotal, countProducts, setCountProducts}) {
    return (
        <div>
            <Banner />
            <main className='mainContainer'>
                <Offers 
                setProductsCart={setProductsCart} 
                productsCart={productsCart} 
                total={total} 
                setTotal={setTotal} 
                countProducts={countProducts} 
                setCountProducts={setCountProducts} />
            </main>
        </div>
    )
}

export default Home
