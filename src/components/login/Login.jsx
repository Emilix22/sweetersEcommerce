import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <form className='form-login' action="http://localhost:3000/api/users/login" method="POST">
                <div className="form-camp">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-input"/>
                </div>
                <div className="form-camp">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-input"/>
                </div>
                <div className="form-camp">
                    <label for="rememberUser" className="form-label">Recordarme</label>
                    <input type="checkbox" name="rememberUser" className="form-input-remember"/>
                </div>
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    )
}

export default Login
