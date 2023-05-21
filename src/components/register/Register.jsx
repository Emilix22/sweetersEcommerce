import React, {useState} from 'react';
import './Register.css';
import Person2Icon from '@mui/icons-material/Person2';
import {useHistory} from 'react-router-dom'

function Register({ setNewRegister }) {
    const formData = new FormData();
    const history = useHistory()

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();
    const [errors, setErrors] = useState();
    
    formData.append('name', name)
    formData.append('surname', surname)
    formData.append('email', email)
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
            {
                if (info.error) {
                    setErrors(info.error)
                }else{
                    setNewRegister(info.data)
                    history.push('/users/login')
                }
            }
         
        })
           
    }

    return (
        <form className='register-container' >
            <h3 className='welcome-register'>BIENVENID@</h3>
                <Person2Icon fontSize='large' />
                {/* ver los errores que son de express validator cambiar los que tienen _ */}
                {
                    errors ? <span className='error-msg'> {errors} </span> : ''   
                }
            <div className='register-form'>
                <div className='form-group'>
                    <label htmlFor="name">Nombre</label>
                    <input
                     className='form-input'
                     type="text"
                     name='name'
                     placeholder='Ingrese su nombre...'
                     onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="surname">Apellido</label>
                    <input
                     className='form-input'
                     type="text"
                     name='surname'
                     placeholder='Ingrese su apellido...'
                     onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input
                     className='form-input'
                     type="email"
                     name='email'
                     placeholder='Ingrese su Email...'
                     onChange={(e) => setEmail(e.target.value)}
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