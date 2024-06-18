/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AppointmentsCard from "../../components/appointmentCard/appointmentCard";
import styles from '../../components/appointmentCard/appointmentCard.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setUserAppiontments } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";



 const Appointments= ()=>{

    const userId = useSelector((state) => state.actualUser.userData.user.id)

    const appointmentState = useSelector((state) => state.actualUser.userAppointments)
    // console.log(appointmentState)
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${userId}`)
        .then(response => response.data.appointments)
        .then((appointments) =>{
            // console.log(appointments)
            dispatch(setUserAppiontments(appointments))
            
            navigate('/Appointments')
        })
        .catch (error => console.log(error))

    }, [userId, dispatch])

    return (
        <section className={styles.sectionAppointments}>
<div  className={styles.cajaBoton}>
        <Link to='/AppointmentForm'><button className={styles.botonAgregar}>agregar turno</button></Link> 
     </div>       
            <div className={styles.container}>
                { appointmentState.length !== 0 ? appointmentState.map(appointment => ( <AppointmentsCard
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        time= {appointment.time}
                        status={appointment.status}
                        />
                    )) : <h3 className={styles.subTitulo}>Usted no tiene turnos agendados!</h3>
                }
            </div>
        </section>
    )}

    export default Appointments