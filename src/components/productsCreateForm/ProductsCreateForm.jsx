import React, {useState, useEffect} from 'react';
import './ProductsCreateForm.css';

function ProductsCreateForm() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/colors')
        .then(res => res.json())
        .then(info => {
            console.log(info)
            setColors(info.data)
        })
    }, [])

    return (
        <div className='container-form'>
            <h1>Creción de Productos</h1>
            <form action="http://localhost:3000/api/products/create" method="POST" enctype="multipart/form-data">
                <div class="form-camp">
                    <label for="name" class="form-label">Nombre / Modelo:</label>
                    <input type="text" name="name" placeholder="Ej: Sweater azul" class="form-input"/>
                </div>
                <div class="form-camp">
                    <label for="price" class="form-label">Precio:</label>
                    <input type="number" name="price" placeholder="Ej: 3500" class="form-input"/>
                </div>
                <div class="form-camp">
                    <label for="description" class="form-label">Descripción:</label>
                    <textarea name="description" class="form-input"></textarea>
                </div>
                <div class="form-camp">
                    <label for="quantity" class="form-label">Cantidad:</label>
                    <input type="number" name="quantity" placeholder="Ej: 10" class="form-input"/>
                </div>
                <div class="form-camp">
                    <label for="image" class="form-label">Foto producto:</label>
                    <input type="file" name="image" class="form-input"/>
                </div>
                <div class="form-camp">
                    <label for="sale" class="form-label">En Oferta:</label>
                    <select name="sale" class="form-input">
                        <option value="0" selected>No</option>
                        <option value="1">Si</option>
                    </select>
                </div>
                <div class="form-camp">
                    <label for="color" class="form-label">Color:</label>
                    <select name="color" class="form-input">
                        {
                            colors.map((color, index) => {
                                return <option value={color.id} key= {color + index} >{color.name}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit">Crear</button>    
            </form>
        </div>
    )
}

export default ProductsCreateForm
