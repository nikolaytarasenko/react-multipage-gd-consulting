import styles from './Trusted.module.css'
import comp1 from '../../assets/company-1.png'
import comp2 from '../../assets/company-2.png'
import comp3 from '../../assets/company-3.png'
import comp4 from '../../assets/company-4.png'
import comp5 from '../../assets/company-5.png'
import comp6 from '../../assets/company-6.png'
import comp7 from '../../assets/company-7.png'

const Trusted = () => {
    return (
        <div className="section">
            <h2 className={`section-title ${styles.title}`}>We are trusted</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <p>We are committed to providing high quality consistent services with integrity and reliability, helping clients seize opportunities and minimize risks.</p>
                </div>
                <div className={styles.card}>
                    <p>We believe that effective communication and proactive, results-driven approaches are integral to success for entrepreneurial leaders.</p>
                </div>
            </div>
            <div className={styles.companies}>
                <div className={styles.company}>
                    <img src={comp1} alt="Company 1" />
                </div>
                <div className={styles.company}>
                    <img src={comp2} alt="Company 2" />
                </div>
                <div className={styles.company}>
                    <img src={comp3} alt="Company 3" />
                </div>
                <div className={styles.company}>
                    <img src={comp4} alt="Company 4" />
                </div>
                <div className={styles.company}>
                    <img src={comp5} alt="Company 5" />
                </div>
                <div className={styles.company}>
                    <img src={comp6} alt="Company 6" />
                </div>
                <div className={styles.company}>
                    <img src={comp7} alt="Company 7" />
                </div>
            </div>
        </div>
    )
}

export default Trusted