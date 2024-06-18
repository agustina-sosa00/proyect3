/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from '../register/register.module.css'
import { validate } from '../../helpers/validateRegister';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = ()=>{

    const [userForm, setUserForm] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    })
    // console.log(userForm);

    // crear un estado para validate el cual 
    const [errors, setErrors] = useState({
        name: 'El nombre es requerido',
    })
    console.log(errors);

    // se actualize el estado cada vez que hay un cambio en cualquiera de los inputs
    const handleInputRegister = (event) => {
        const {name, value} = event.target;
        setUserForm({
            ...userForm,
            [name]: value
        })

        // para que no halla un delete al ir cargando los inputs.
        const errors = validate({
            ...userForm,
            [name]: value
        });
        setErrors(errors)

        // setErrors(validate(userForm)) -> otra forma de hacer lo mismo!
    }

    const navigate = useNavigate();

    const handleOnSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/users/register', userForm);
    
            // Aquí puedes realizar cualquier acción adicional después de que los datos se hayan enviado correctamente
            alert('Usuario creado con exito.');
            setUserForm({
                name: '',
                email: '',
                birthdate: '',
                nDni: '',
                username: '',
                password: ''
            })
            navigate('/')

        } catch (error) {
            console.error('Error:', error.message);
            alert('Ha ocurrido un error al enviar los datos');
        }
    }


return(
    <section className={styles.sectionRegister}>
    <form className={styles.form} onSubmit={handleOnSubmit}>
        <h2 className={styles.tituloForm}>Registrate</h2>

        <input type="text" name="name" placeholder="Nombre y Apellido" className={styles.input} value={userForm.name} onChange={handleInputRegister}/>
        {errors.name && <p className={styles.pError}>{errors.name}</p>}

        <input type="text" name="email" placeholder="Correo Electronico" className={styles.input} value={userForm.email} onChange={handleInputRegister}/>
        {errors.email && <p className={styles.pError}>{errors.email}</p>}

        
        <input type="text" name="birthdate" placeholder="Fecha de Nacimiento" className={styles.input} value={userForm.birthdate} onChange={handleInputRegister}/>
        {errors.birthdate && <span className={styles.pError}>{errors.birthdate}</span>}


        <input type="text" name="nDni" placeholder="Nro de DNI" className={styles.input} value={userForm.nDni} onChange={handleInputRegister}/>
        {errors.nDni && <span className={styles.pError}>{errors.nDni}</span>}
       

        <input type="text" name="username" placeholder="Nombre de Usuario" className={styles.input} value={userForm.username} onChange={handleInputRegister}/>
        {errors.username && <p className={styles.pError}>{errors.username}</p>}


        <input type="password" name="password" placeholder="Contraseña" className={styles.input} value={userForm.password} onChange={handleInputRegister}/>
        {errors.password && <p className={styles.pError}>{errors.password}</p>}

        <input type="submit" value="Registrarme" disabled={ errors.name || errors.email || errors.birthdate || errors.nDni || errors.username || errors.password }/>
    </form>
    </section>
)
}

export default Register;