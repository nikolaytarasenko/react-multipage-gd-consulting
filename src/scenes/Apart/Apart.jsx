import { useContext } from 'react'
import styles from './Apart.module.css'
import icon1 from '../../assets/apart-icon-1.png'
import icon2 from '../../assets/apart-icon-2.png'
import icon3 from '../../assets/apart-icon-3.png'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { AppContext } from '../../context/Context'

const Apart = () => {
    const { toggleModal } = useContext(AppContext)

    return (
        <div className="section">
            <h2 className={`section-title ${styles.title}`}>What sets us apart</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src={icon1} alt="Reliable Connections" />
                    <h3 className={styles.cardTitle}>Reliable Connections</h3>
                    <p className={styles.cardText}>We prioritize understanding client needs, supporting them beyond advice, anticipating business issues, emphasizing clear communication, and hands-on management.</p>
                </div>
                <div className={styles.card}>
                    <img src={icon2} alt="Professional Responsibility" />
                    <h3 className={styles.cardTitle}>Professional Responsibility</h3>
                    <p className={styles.cardText}>We foster honest relationships with clients and colleagues, nurturing mutual understanding, support, and comprehending individual needs.</p>
                </div>
                <div className={styles.card}>
                    <img src={icon3} alt="Close Client Rapport" />
                    <h3 className={styles.cardTitle}>Close Client Rapport</h3>
                    <p className={styles.cardText}>We practice responsibility and professionalism, adhering to high standards, providing comprehensive advice, engaging skilled specialists, and valuing confidentiality and ethics.</p>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button style="transparent" type="button" onClick={toggleModal}>
                    Get free consultations
                    <IoIosArrowRoundForward size={30} />
                </Button>
            </div>
        </div>
    )
}

export default Apart