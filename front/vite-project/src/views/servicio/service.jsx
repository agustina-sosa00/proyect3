import styles from './service.module.css'

export const Servicios = () => {
    return (
        <section className={styles.sectionService}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <h2 className={styles.tituloService}>Damas</h2>

                    <p className={styles.textService}>lavado .................. $1000</p>
                    <p className={styles.textService}>corte .................. $6000</p>
                    <p className={styles.textService}>brushing .................. $4500</p>
                    <p className={styles.textService}>planchita .................. $4500</p>
                    <p className={styles.textService}>color .................. $13000</p>
                    <p className={styles.textService}>nutriciones .................. $8500</p>
                    <p className={styles.textService}>mechas .................. $32500</p>
                    <p className={styles.textService}>reflejos .................. $30500</p>
                    <p className={styles.textService}>balayage .................. $34500</p>
                    <p className={styles.textService}>alisados .................. $13500</p>
                    <p className={styles.textService}>peinados .................. $13500</p>
                    <p className={styles.textService}>permanentes .................. $18500</p>
                </div>

                <div className={styles.subContainer}>
                    <h2 className={styles.tituloService}>Caballeros</h2>
                    <p className={styles.textService}>corte .................. $3500</p>
                    <p className={styles.textService}>corte + diseño  .................. $4500</p>
                    <p className={styles.textService}>perfilado de cejas .................. $500</p>
                    <p className={styles.textService}>barba tradicional .................. $2000</p>
                    <p className={styles.textService}>barba + mascara .................. $4000</p>
                    <p className={styles.textService}>corte + mascara .................. $5000</p>
                    <p className={styles.textService}>reflejos .................. $23500</p>
                    <p className={styles.textService}>deco global .................. $26500</p>
                    <p className={styles.textService}>alisados .................. $10500</p>
                </div>

                <div className={styles.subContainer}>
                    <h2 className={styles.tituloService}>Estetica</h2>
                    <p className={styles.textService}>limpieza de cutis .................. $5000</p>
                    <p className={styles.textService}>depilacion de rostro .................. $4500</p>
                    <p className={styles.textService}>depilacion de axilas .................. $5000</p>
                    <p className={styles.textService}>depilacion de piernas .................. $6500</p>
                    <p className={styles.textService}>depilacion de brazos .................. $4500</p>
                    <p className={styles.textService}>aclaracion de vello .................. $4000</p>
                    <p className={styles.textService}>manicura .................. $6000</p>
                    <p className={styles.textService}>maquilla dia/noche .................. $17000</p>
                    <p className={styles.textService}>maquillaje novia .................. $18500</p>
                    <p className={styles.textService}>maquillaje egresados .................. $17000</p>
                </div>
            </div>
        </section>
    )
}