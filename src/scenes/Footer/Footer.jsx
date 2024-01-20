import styles from './Footer.module.css'
import logo from '../../assets/logo-light.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <Link to="/" className={styles.logoLink}>
                        <img src={logo} alt="G&D Consulting" />
                    </Link>
                    <nav className={styles.nav}>
                        <Link to="/accounting-services" className={styles.navLink}>Accounting Services</Link>
                        <Link to="/tax-consulting" className={styles.navLink}>Tax Consulting</Link>
                        <Link to="/financial-consulting" className={styles.navLink}>Financial Consulting</Link>
                        <Link to="/about" className={styles.navLink}>About Us</Link>
                        <Link to="/contact" className={styles.navLink}>Contact</Link>
                    </nav>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copy}>© 2023 G&D Consulting</p>
                    <div>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer