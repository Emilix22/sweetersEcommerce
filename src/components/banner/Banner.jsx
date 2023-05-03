import React from 'react'
import image1 from '../../assets/banner1.jpeg'
import image2 from '../../assets/banner2.jpeg'
import image3 from '../../assets/banner3.jpeg'
import image4 from '../../assets/banner4.jpeg'
import image5 from '../../assets/banner5.jpeg'
import imageMovil from '../../assets/bannerMovil.jpg'
import './Banner.css'

function Banner() {
    return (
        <>
            <section className="banner">
                <article className="card">
                    <img src={image1} width="320px" height="448px" alt="foto"/>
                </article>
                <article className="card">
                    <img src={image2} width="320px" height="448px" alt="foto"/>
                </article>
                <article className="card">
                    <img src={image3} width="320px" height="448px" alt="foto"/>
                </article>
                <article className="card">
                    <img src={image4} width="320px" height="448px" alt="foto"/>
                </article>
                <article className="card">
                    <img src={image5} width="320px" height="448px" alt="foto"/>
                </article>
            </section>

            <section className="bannerMovil">
                <img src={imageMovil} alt="foto"/>
            </section>
        </>
        
    )
}

export default Banner
