import React, {useState} from 'react';
import './Register.css';
import Person2Icon from '@mui/icons-material/Person2';
import {useHistory} from 'react-router-dom'

function Register() {
    const formData = new FormData();
    const history = useHistory()

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();
    
    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('email', userEmail)
    formData.append('password', password)
    formData.append('image', image)

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://localhost:3000/api/users/create', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(info => {
         console.log(info)
         history.push('/users/login')   
        })
           
    }

    return (
        <form className='register-container' >
            <h3 className='welcome-register'>BIENVENID@</h3>
                <Person2Icon fontSize='large' />
            <div className='register-form'>
                <div className='form-group'>
                    <label htmlFor="first_name">Nombre</label>
                    <input
                     className='form-input'
                     type="text"
                     name='first_name'
                     placeholder='Ingrese su nombre...'
                     onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="last_name">Apellido</label>
                    <input
                     className='form-input'
                     type="text"
                     name='last_name'
                     placeholder='Ingrese su apellido...'
                     onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
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
                <div className='form-group-image'>
                    <label htmlFor="image">Foto de perfil</label>
                    <input
                     className='form-input'
                     type="file"
                     name='image'
                     onChange={(e) => setImage(e.target.files[0])} />
                </div>
                
                <button onClick={handleSubmit}>Registrarme</button>
            </div>
        </form>

    )
}

export default Register