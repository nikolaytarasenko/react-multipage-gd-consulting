import styles from './Experience.module.css'
import icon1 from '../../assets/experience-icon-1.png'
import icon2 from '../../assets/experience-icon-2.png'
import icon3 from '../../assets/experience-icon-3.png'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Experience = () => {
    return (
        <div className="section">
            <h2 className={`section-title ${styles.title}`}>Experience</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src={icon1} alt="Experience in the UAE" />
                    <h3 className={styles.cardTitle}>Experience in the UAE</h3>
                    <p className={styles.cardText}>Our team specializes in accounting, bookkeeping, and tax services in the UAE, providing consultations tailored to your needs. We have vast experience advising top UAE companies, private investment firms, and startups. Our priorities include a cohesive team, result-oriented focus, and a deep understanding of the local Emirates market and its financial regulations.</p>
                </div>
                <div className={styles.card}>
                    <img src={icon2} alt="Adapting to Market Changes" />
                    <h3 className={styles.cardTitle}>Adapting to Market Changes</h3>
                    <p className={styles.cardText}>We consider the specifics of UAE legislation and our clients' industry characteristics. Our team keeps an eye on technological solutions and quickly adapts to market changes. This approach helps improve business processes and maintain stability in a dynamic environment.</p>
                </div>
                <div className={styles.card}>
                    <img src={icon3} alt="Global and Local Expertise Combined" />
                    <h3 className={styles.cardTitle}>Global and Local Expertise Combined</h3>
                    <p className={styles.cardText}>By merging international experience with a profound knowledge of the local market, we provide an exceptional service to our clients. We pride ourselves on being accessible, promptly and efficiently addressing any client concerns that may arise.</p>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button style="transparent" type="link" link="/contact">
                    Get free consultations
                    <IoIosArrowRoundForward size={30} />
                </Button>
            </div>
        </div>
    )
}

export default Experience