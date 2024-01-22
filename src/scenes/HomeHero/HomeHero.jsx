import styles from './HomeHero.module.css'
import Button from '../../components/Button/Button'
import homeStats from '../../assets/home-stats.png'
import { BiMessageRounded } from 'react-icons/bi'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const HomeHero = () => {
    return (
        <div className={`section ${styles.hero}`}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                        <h1 className={styles.title}>Take control of your finances with our reliable services</h1>
                        <p className={styles.description}>Financial planning, tax consultancy and accounting solutions</p>
                    </div>
                    <AnchorLink href="#services" offset="50">
                        <Button style="transparent" type="button">
                            Learn more
                        </Button>
                    </AnchorLink>
                </div>
                <div className={styles.right}>
                    <div className={styles.stats}>
                        <div className={`${styles.statsBox} ${styles.statsFirst}`}>
                            <img src={homeStats} alt="G&D Consulting" />
                            <h3 className={styles.statsTitle}>Trusted by Companies</h3>
                        </div>
                        <div className={`${styles.statsBox} ${styles.statsSecond}`}>
                            <span className={styles.statsDigit}>100+</span>
                            <h3 className={styles.statsTitle}>Satisfied Clients</h3>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <h2 className={styles.contactTitle}>Get quick free consultation</h2>
                        <Button style="white" type="link" link="/contact">
                            <BiMessageRounded size={25} />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero