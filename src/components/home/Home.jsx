import React from 'react'
import './Home.css';
import Banner from '../banner/Banner';
import Offers from '../offers/Offers';

function Home() {
    return (
        <div>
            <Banner />
            <main className='mainContainer'>
                <Offers />
            </main>
        </div>
    )
}

export default Home
