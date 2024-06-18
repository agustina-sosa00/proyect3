/* eslint-disable no-unused-vars */
import styles from './footer.module.css'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'


const Footer = () =>{
    return (
        <div className={styles.container}>
            
            <div className={styles.subContainer}>
                <div className={styles.caja1Footer}>
                    <h2 className={styles.subtitle1}>Peluqueria Lourdes</h2>
                    <h3 className={styles.subtitle2}>Seguinos en nuestras redes sociales</h3>
                </div>
                <div className={styles.caja2Footer}>
                    <img src={instagram} alt="" className={styles.icono}/>
                    <img src={whatsapp} alt="" className={styles.icono}/>
                </div>
                <div className={styles.caja3Footer}>
                    <p><a href="">Información legal</a></p>
                    <p><a href="">Politica de privacidad</a></p>
                    <p><a href="">Trabaja con nosotros</a></p>
                </div>           
            </div>
        </div>
    )
}

export default Footer;