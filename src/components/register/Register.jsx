import React, {useState} from 'react';
import './Register.css';
import Person2Icon from '@mui/icons-material/Person2';
import {useHistory} from 'react-router-dom'

function Register({ setNewRegister }) {
    const history = useHistory()
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState();
    const [errors, setErrors] = useState();
    
    const formData = new FormData();
    formData.append('name', name)
    formData.append('surname', surname)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('image', image)

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch('http://localhost:3000/api/users/create', {
            method: 'POST',
            body: formData,
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
                {
                    errors && !(errors.name || errors.surname || errors.password || errors.email) ? <span className='error-msg'> {errors} </span> : ''   
                }
            <div className='register-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Nombre</label>
                    <input
                     className='form-input'
                     id='name'
                     type="text"
                     name='name'
                     placeholder='Ej: Juan'
                     onChange={(e) => setName(e.target.value)}
                    />
                    <div className='inputInstruction'>(*)Obligatorio, mínimo 4 caracteres</div>
                    {
                        errors && errors.name ? <span className='error-msg'> {errors.name.msg} </span> : ''
                   
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="surname">Apellido</label>
                    <input
                     className='form-input' 
                     id='surname'
                     type="text"
                     name='surname'
                     placeholder='Ingrese su apellido...'
                     onChange={(e) => setSurname(e.target.value)}
                    />
                    <div className='inputInstruction'>(*)Obligatorio</div>
                    {
                        errors && errors.surname ? <span className='error-msg'> {errors.surname.msg} </span> : ''
                   
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input
                     className='form-input'
                     id='email'
                     type="email"
                     name='email'
                     placeholder='Ingrese su Email...'
                     onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='inputInstruction'>(*)Obligatorio</div>
                    {
                        errors && errors.email ? <span className='error-msg'> {errors.email.msg} </span> : ''
                   
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input
                     className='form-input'
                     id='password'
                     type="password"
                     name='password'
                     placeholder='Ingrese su Password...'
                     onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='inputInstruction'>(*)Obligatorio, mínimo 8 caracteres</div>
                    {
                        errors && errors.password ? <span className='error-msg'> {errors.password.msg} </span> : ''
                   
                    }
                </div>
                <div className='form-group-image'>
                    <label htmlFor="image">Foto de perfil</label>
                    <input
                     className='form-input'
                     id='image'
                     type="file"
                     name='image'
                     onChange={(e) => setImage(e.target.files[0])} 
                    />
                    <div className='inputInstruction'>Opcional, extenciones admitidas: .jpg, .png, jpeg, webp</div>
                </div>
                
                <button onClick={handleSubmit}>Registrarme</button>
            </div>
        </form>

    )
}

export default Register