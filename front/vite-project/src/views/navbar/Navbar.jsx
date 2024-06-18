/* eslint-disable no-unused-vars */
import styles from '../navbar/Navbar.module.css';
import logo from '../../assets/flordelotoS.png'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = ()=>{

    const userLogin = useSelector((state) => state.actualUser.userData.login)
    console.log(userLogin)



    return (
        <div className={styles.navbar}>
           <div>
                <img src={logo} alt="logo" className={styles.imgLogo}/>
           </div>

           <div>
                <nav className={styles.divMenu}>
                    <Link to='/'><button className={styles.Btn1}>Home</button></Link>
                    <Link to='/Services'><button className={styles.Btn2}>Servicios</button></Link>
                    <Link to='/Contact'><button className={styles.Btn3}>Contacto</button></Link>
                    {userLogin ? <Link to='/Appointments'><button className={styles.Btn4}>Turnos</button></Link> : null}
                    
                     
                    
                </nav>
           </div>
           <div>
                <Link to='/Login'><button className={styles.Btn5}>Iniciar Sesion</button></Link>
                <Link to='/Register'><button className={styles.Btn6}>Registrarme</button></Link>
           </div>

        </div>
    )
}

export default Navbar;