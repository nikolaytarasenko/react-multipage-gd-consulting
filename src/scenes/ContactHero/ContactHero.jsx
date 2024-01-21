import styles from './ContactHero.module.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { LuMail } from 'react-icons/lu'
import map from '../../assets/map.png'

const ContactHero = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <h2 className={`section-title ${styles.title}`}>Contact</h2>
                <div className={styles.info}>
                    <div className={styles.row}>
                        <HiOutlineLocationMarker size={35} />
                        <span>19th floor The Exchange Tower, Business Bay, Dubai, United Arab Emirates</span>
                    </div>
                    <div className={styles.row}>
                        <FiPhone size={35} />
                        <span>+971 56 840 0795</span>
                    </div>
                    <div className={styles.row}>
                        <LuMail size={30} />
                        <span>hello@gdconsulting.ae</span>
                    </div>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={map} alt="Map" />
                </div>
            </div>
        </div>
    )
}

export default ContactHero
