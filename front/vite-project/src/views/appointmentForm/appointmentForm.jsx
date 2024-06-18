/* eslint-disable no-unused-vars */
import { useState } from 'react';
import validate from '../../helpers/validateFormApp'
import styles from './appointmentForm.module.css'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setUserAppiontments } from '../../redux/userSlice';

const POST_APPOINTMENT = 'http://localhost:3000/appointments/schedule'
// {
//     "date": "18-03-24",
//     "time": "17:30",
//     "userId": 6
//   }

 const AppointmentForm = ()=>{

    const [appointment, setappointment] = useState({
        date: '',
        time: '',
    })
    
    
    const [errors, setErrors] = useState({
        date: 'Debe ingresar una fecha',
    })
    console.log(errors);

    // se actualize el estado cada vez que hay un cambio en cualquiera de los inputs
    const handleInputRegister = (event) => {
        const {name, value} = event.target;
        setappointment({
            ...appointment,
            [name]: value
        })

        // para que no halla un delete al ir cargando los inputs.
        const errors = validate({
            ...appointment,
            [name]: value
        });
        setErrors(errors)

        // setErrors(validate(userForm)) -> otra forma de hacer lo mismo!
    }

    const userId = useSelector((state) => state.actualUser.userData.user.id)
    const navigate = useNavigate();

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const newAppointment = {
            date: appointment.date,
            time: appointment.time,
            userId
        }
    
         await axios.post(POST_APPOINTMENT , newAppointment)
         .then((response) => response.data)
         .then((data) => {
            console.log('--------------->' + data)
            setUserAppiontments(data)
            alert('ha sido creada la nueva reserva:');
            navigate('/Appointments')
         })
         .catch ((error) => 
         alert( `Ha ocurrido un error:  ${error?.response?.data?.message}`));
    }


return(
    <section className={styles.sectionRegister}>
    <div className={styles.container}>
        <div className={styles.caja1Form}>
            <img src="https://img.freepik.com/fotos-premium/foto-vertical-peluquero-rizando-cabello-cliente_138670-3327.jpg" alt="" className={styles.imgForm}/>
        </div>

        <div className={styles.caja2Form}>
            <form className={styles.form} onSubmit={handleOnSubmit}>
        <h2 className={styles.tituloForm}>Agregar nuevo turno</h2>

        <input type="date" name="date" placeholder="Ingresar fecha" className={styles.input} value={appointment.date} onChange={handleInputRegister}/>
        {errors.date && <p>{errors.date}</p>}

        <select name="time" className={styles.input} value={appointment.time} onChange={handleInputRegister}>
        <option value="">Horarios</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
        </select>
        {errors.time && <p>{errors.time}</p>}

        <input type="submit" value="Agregar turno" disabled={ errors.date || errors.time }/>
    </form></div>
    </div>
    
    </section>
)
}

export default AppointmentForm;