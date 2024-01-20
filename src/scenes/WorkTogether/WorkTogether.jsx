import styles from './WorkTogether.module.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import decor1 from '../../assets/work-together-decor-1.png'
import decor2 from '../../assets/work-together-decor-2.png'

const WorkTogether = () => {
    return (
        <div className={`section ${styles.section}`}>
            <img src={decor1} alt="Decor" className={styles.decor1} />
            <img src={decor2} alt="Decor" className={styles.decor2} />
            <div className={styles.inner}>
                <h2 className={`section-title ${styles.title}`}>Let’s work together!</h2>
                <ContactForm />
            </div>
        </div>
    )
}

export default WorkTogether