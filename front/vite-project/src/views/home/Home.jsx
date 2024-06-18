/* eslint-disable no-unused-vars */
import styles from './Home.module.css'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className={styles.sectionHome}>
                <div className={styles.containerHome}>
                    <div className={styles.tarjetaHome}>
                        <div className={styles.subDivHome}>
                            <div>
                                <h1 className={styles.tituloHome}>Peluqueria Lourdes</h1>
                                <p className={styles.pTituloHome}>les da la bienvenida!</p>
                            </div>
                            
                            <p className={styles.pHome}>Descubre la comodidad de reservar tu próximo corte de cabello con nuestra aplicación. Con solo unos pocos clics, puedes asegurar tu cita en el horario que más te convenga. Olvídate de las largas esperas y disfruta de un servicio de peluquería personalizado. ¡Haz tu reserva ahora y prepárate para lucir tu mejor versión!</p>
                            <Link to='/Register'> <button className={styles.Btn}>clickme</button></Link>        
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;