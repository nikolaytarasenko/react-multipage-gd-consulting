import styles from './Solutions.module.css'
import img from '../../assets/solutions.png'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Solutions = () => {
    return (
        <div className="section">
            <div className={styles.row}>
                <div className={styles.content}>
                    <h2 className={`section-title ${styles.title}`}>We offer solutions for your business</h2>
                    <ul content={styles.list}>
                        <li className={styles.item}>Managing full company’s accounting</li>
                        <li className={styles.item}>Partial accounting with “VAT”, “wage expenses” etc</li>
                        <li className={styles.item}>Accounting outsourcing</li>
                        <li className={styles.item}>Financial statement analysis, interpretation, and evaluation</li>
                        <li className={styles.item}>Advising on emerging tax issues</li>
                        <li className={styles.item}>Assistance in resolving business disputes</li>
                    </ul>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={img} alt="Solutions" />
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button style="black" type="link" link="/contact">
                    Get free consultations
                    <IoIosArrowRoundForward size={35} color="#fff" />
                </Button>
            </div>
        </div>
    )
}

export default Solutions