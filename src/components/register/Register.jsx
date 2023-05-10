import React from 'react';
import './Register.css';

function Register() {
    return (
        <div>
            <form action="http://localhost:3000/api/users/create" method="POST" enctype="multipart/form-data">
                <div className="form-camp">
                    <label for="first_name" className="form-label">Nombre</label>
                    <input type="text" name="first_name" className="form-input"/>
                </div>
                <div className="form-camp">
                    <label for="last_name" className="form-label">Apellido</label>
                    <input type="text" name="last_name" className="form-input"/>
                </div>
                <div className="form-camp">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-input"/>
                </div>
                <div className="form-camp">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-input"/>
                </div>
                <div class="form-camp">
                    <label for="image" className="form-label">Foto:</label>
                    <input type="file" name="image" className="form-input"/>
                </div>
                <button type="submit" className="button">Registrarse</button>
            </form>
        </div>
    )
}

export default Register
