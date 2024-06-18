/* eslint-disable no-unused-vars */
// import {useState} from "react";
import PropTypes from "prop-types";
import styles from './appointmentCard.module.css'
import logo from '../../assets/flordelotoS.png'
import axios from "axios";
import {  setUserAppiontments } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppointmentsCard=({id, date, time, status})=>{
   
    const idAppointment = id;
    // const CANCEL_URL = 'http://localhost:3000/appointments/';

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector((state) => state.actualUser.userData.user.id)


    const handleCancelButton = () => {
        axios.put(`http://localhost:3000/appointments/cancel/${idAppointment}`)
        .then(() => {
            axios.get(`http://localhost:3000/users/${userId}`)
            .then((response) => response.data.appointments)
            .then((appointment) => {
                // console.log(appointment)
                dispatch(setUserAppiontments(appointment));
                 navigate('/Appointments')
            })
            .catch (error => console.log(error))
        })
        .catch (error => console.log(error))
    }

    return(
        
            
            <div className={styles.containerAppointment}>
                
                <img src={logo} alt="logo" className={styles.imgLogoAppointment}/>
                
                {/* <h1 className={styles.titulo}>ID del turno:<br/>{id}</h1> */}
                <h2 className={styles.titulo}>Fecha:<br/>{date}</h2>
                <h2 className={styles.titulo}>Hora:<br/>{time}</h2>
                <h2 className={styles.titulo}>Estado del turno:<br/>{status}</h2>

                {status === 'canceled' ? <button className={styles.BtnCanceled} disabled>Cancelado</button> : <button className={styles.Btn} onClick={handleCancelButton}>Home</button> }

                
            </div>
        
    )
    
}

AppointmentsCard.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default AppointmentsCard;