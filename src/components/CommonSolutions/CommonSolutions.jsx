import styles from './CommonSolutions.module.css'
import Button from '../Button/Button.jsx'
import { IoIosArrowRoundForward } from 'react-icons/io'

const CommonSolutions = ({ data: { title, list, image } }) => {
    return (
        <div className="section">
            <div className={styles.row}>
                <div className={styles.content}>
                    <h2 className={`section-title ${styles.title}`}>{title}</h2>
                    <ul content={styles.list}>
                        {list.map((item, i) => (
                            <li key={i} className={styles.item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={image} alt="Solutions" />
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

export default CommonSolutions