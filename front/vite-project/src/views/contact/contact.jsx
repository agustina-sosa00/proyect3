/* eslint-disable no-unused-vars */
import contactoUno from '../../assets/contacto1.jpg'
import contactoDos from '../../assets/contacto2.jpg'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import phone from '../../assets/phone.svg'
import email from '../../assets/correo.svg'
import styles from './contact.module.css'


export const Contact = ()=>{
    return(
        <section className={styles.sectionContact}>
            <div className={styles.containerContact}>
                <div className={styles.subContainerContact}>
                    <div className={styles.caja1Contact}>
                        <img src={contactoUno} alt="" className={styles.imgUno}/>
                    </div>
                    <div className={styles.caja2Contact}>
                        <h2 className={styles.subTitle}>Sucursales</h2>
                        <p className={styles.pContact}> &#x1F4CC; Capital Federal, Av. Monteagudos 1856</p>
                        <p className={styles.pContact}> &#x1F4CC; Lomas de Zamora, Italia 776</p>
                        <p className={styles.pContact}> &#x1F4CC; Lanus, Ipaguazu 3762</p>
                        <h2 className={styles.subTitle}>Horarios</h2>
                        <p className={styles.pContact}>Lun, Mar, Mierc y Jue &#x1F552; 09:00 am hasta 21:30 pm</p>
                        <p className={styles.pContact}>Vie, Sab &#x1F552; 09:30 am hasta 22:00 pm</p>
                    </div>
                </div>

                <div className={styles.subContainerDosContact}>
                    <div className={styles.caja3Contact}>
                        <h2 className={styles.subTitle}>Contacto</h2>
                        <p className={styles.pContact}><img src={instagram} alt="" className={styles.iconoUno}/>@peluqueria.lourdes22</p>
                        <p className={styles.pContact}><img src={phone} alt=""  className={styles.iconoUno}/>4465-8789</p>
                        <p className={styles.pContact}><img src={whatsapp} alt=""  className={styles.iconoUno}/>1598638492</p>
                        <p className={styles.pContact}><img src={email} alt=""  className={styles.iconoUno}/>consultaslourdes@gmail.com</p>
                    </div>
                    <div className={styles.caja4Contact}>
                        <img src={contactoDos} alt="" className={styles.imgDos} />
                    </div>
                </div>
            </div>
        </section>
    )
}
