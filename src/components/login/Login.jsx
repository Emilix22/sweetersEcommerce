import React, {useState} from 'react'
import './Login.css'
import Person2Icon from '@mui/icons-material/Person2';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Cookie from 'js-cookie'
import {useHistory} from 'react-router-dom'

function Login({ setUser }) {

    const [userEmail, setUserEmail] = useState()
    const [password, setPassword] = useState()
    const [rememberUser, setRememberUser] = useState()
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(info => {

            setUser(info)
            setUserEmail('')
            setPassword('')

            if(rememberUser) {
                Cookie.set('userLogin', info, {
                expires: 10,
                secure: true,
                sameSite: 'strict',
                path: '/'
                })
            }
            history.push('/')
        })    
    }

    return (
        <form className='login-container' >
            <h3 className='welcome-login'>BIENVENID@</h3>
            <div className='login-form'>
                <Person2Icon fontSize='large' />
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input
                     className='form-input'
                     type="email"
                     name='email'
                     placeholder='Ingrese su Email...'
                     onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input
                     className='form-input'
                     type="password"
                     name='password'
                     placeholder='Ingrese su Password...'
                     onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <FormControlLabel name='rememberUser' control={<Checkbox onChange={(e) => setRememberUser(e.target.value)} color="success" />} label="Recordarme" />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </form>

    )
}

export default Login
