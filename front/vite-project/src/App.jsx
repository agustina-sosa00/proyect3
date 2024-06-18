/* eslint-disable no-unused-vars */
import './App.css'
import Appointments from './views/appointments/appointments'
import Navbar from './views/navbar/Navbar'
import Footer from './components/footer/footer'
import Home from '../src/views/home/Home'
import Register from './views/register/register'
import Login from './views/login/login'
import { Route, Routes } from 'react-router-dom'
import { Servicios } from './views/servicio/service'
import { Contact } from './views/contact/contact'
import AppointmentForm from './views/appointmentForm/appointmentForm'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Appointments' element={<Appointments/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Services' element={<Servicios/>}></Route>
        <Route path='/Contact' element = {<Contact/>}></Route>
        <Route path='/AppointmentForm' element = {<AppointmentForm/>} ></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
