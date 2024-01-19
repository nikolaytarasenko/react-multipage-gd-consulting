import { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CgMenuRightAlt } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
    const [isMenuOpened, setMenuOpened] = useState(false)

    const handleOpen = () => {
        setMenuOpened(prev => !prev)
    }

    const handleClose = () => {
        setMenuOpened(false)
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
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
                    <div className={styles.mobileBtn} onClick={handleOpen}>
                        {isMenuOpened ? <IoClose size={40} /> : <CgMenuRightAlt size={40} />}
                    </div>
                </div>
                {isMenuOpened && (
                    <nav className={styles.mobileMenu}>
                        <Link to="/accounting-services" className={styles.navLink} onClick={handleClose}>Accounting Services</Link>
                        <Link to="/tax-consulting" className={styles.navLink} onClick={handleClose}>Tax Consulting</Link>
                        <Link to="/financial-consulting" className={styles.navLink} onClick={handleClose}>Financial Consulting</Link>
                        <Link to="/about" className={styles.navLink} onClick={handleClose}>About Us</Link>
                        <Link to="/contact" className={styles.navLink} onClick={handleClose}>Contact</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Navbar