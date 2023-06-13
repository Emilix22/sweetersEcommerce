import React from 'react'

function Cart() {
    return (
        <div>
            <table>
                <thead>
                    <th>
                        <strong>Producto</strong>
                    </th>
                    <th>
                        <strong>Precio</strong>
                    </th>
                    <th>
                        <strong>Cantidad</strong>
                    </th>
                    <th>
                        <strong>Subtotal</strong>
                    </th>
                </thead>
                <tbody className='cartRows'>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Cart
