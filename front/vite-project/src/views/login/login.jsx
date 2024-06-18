/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from '../login/login.module.css'
import axios from 'axios';
import { validate } from '../../helpers/validateLogin';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{

    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    })
    // console.log(userLogin);

    // crear un estado para validate 
    const [errors, setErrorsLogin] = useState({
        username: 'El nombre de usuario es requerido',
    })

    const handleInputLogin = (event) => {
        const {name, value} = event.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        })

        const errors = validate({
            ...userLogin,
            [name]: value
        })
        setErrorsLogin(errors)
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // evento para el boton submit ESTE EVENTO CARGA AL USUARIO EN EL ESTADO GLOBAL
    const handleOnSubmitLogin = async (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3000/users/login', userLogin)
        .then(response => response.data)
        .then (data => {
            dispatch(setUserData(data))
            console.log(data);
            alert('usuario logueado');
            navigate('/');  //se le agrega / por que es la ruta que yo tengo definida en mis rutas. 
        })
        .catch ((error) => 
            alert( `Ha ocurrido un error:  ${error?.response?.data?.message}`));
    }
    

    return(
        <section className={styles.sectionLogin}>
            <form className={styles.form} onSubmit={handleOnSubmitLogin}>
                <h2 className={styles.tituloForm}>Iniciar Sesion</h2>

                <input type="text" name="username" placeholder="Nombre de Usuario" className={styles.input} value={userLogin.username} onChange={handleInputLogin}/>
                {errors.username && <p className={styles.pError}>{errors.username}</p>}

                <input type="password" name="password" placeholder="Contraseña" className={styles.input} value={userLogin.password} onChange={handleInputLogin}/>
                {errors.password && <p className={styles.pError}>{errors.password}</p>}

                <input type="submit" value="Iniciar Sesion" disabled={ errors.username || errors.password }/>
            </form>
        </section>
)
}

export default Login;