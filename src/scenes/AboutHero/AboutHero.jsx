import { useContext } from 'react'
import styles from './AboutHero.module.css'
import decorImg from '../../assets/what-we-do-decor-3.png'
import aboutImg1 from '../../assets/about-img-1.png'
import aboutImg2 from '../../assets/about-img-2.png'
import Button from '../../components/Button/Button'
import { AppContext } from '../../context/Context'

const AboutHero = () => {
    const { toggleModal } = useContext(AppContext)

    return (
        <div className="section">
            <div className={styles.row}>
                <div className={styles.hero}>
                    <img src={decorImg} alt="Decor" className={styles.decorImg} />
                    <h1 className={styles.heroTitle}>A team of experts in taxes, accounting and financial consulting</h1>
                    <p className={styles.heroDescription}>Growth and Development Consulting (G&D Consulting) is a goal-driven and innovative finance leader with a proven track record of performance improvement in highly competitive markets.</p>
                </div>
            </div>
            <div className={styles.rowImg}>
                <div className={styles.imgWrapper}>
                    <img src={aboutImg1} alt="A reliable consulting company" />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.name}>A reliable consulting company is the key to a successful business</h2>
                    <p className={styles.text}>With over 10 years of experience in industries such as accounting, audit, IT, automotive, engineering and construction, our strong analytical and leadership skills make us the ideal partner for businesses seeking success in the UAE.</p>
                </div>
            </div>
            <div className={`${styles.rowImg} ${styles.rowImgLast}`}>
                <div className={styles.content}>
                    <h2 className={styles.name}>We implement your business ideas and plans with the help of G&D Consulting</h2>
                    <p className={styles.text}>We offer a full range of professional services, including accounting, consulting, tax and audit support, as well as legal advice. We specialize in advising on business creation and corporate tax regulations, drawing on a deep understanding of the local market and industry insights.</p>
                    <div className={styles.buttonWrapper}>
                        <Button style="transparent" type="button" onClick={toggleModal}>
                            Submit your application
                        </Button>
                    </div>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={aboutImg2} alt="We implement your business ideas" />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Business support in the UAE</h2>
                        <p className={styles.cardText}>Our team specializes in providing accounting and tax services in the UAE, providing financial advice tailored to your needs.</p>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Combination of global and local experience</h2>
                        <p className={styles.cardText}>Combining international experience with deep knowledge of the local market, we provide our customers with exceptional service. We pride ourselves on being available, quickly and efficiently resolving customer issues and concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
