import React from 'react'
import './Footer.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer() {
    return (
        <div className='footer'>
            <h4>SWEETERS © 2023.</h4>
            <h4>Hecho con {<FavoriteBorderIcon />} por Emilix</h4>
            <a href="tel:541136388857"><h4>Contacto</h4></a>
        </div>
    )
}

export default Footer
