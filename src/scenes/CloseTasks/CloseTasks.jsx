import styles from './CloseTasks.module.css'
import img from '../../assets/close-tasks.png'

const CloseTasks = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <h2 className={`section-title ${styles.title}`}>We close tasks faster than a full-time accountant</h2>
                <img src={img} alt="We close tasks" />
                <p className={styles.text}>Turning to G&D Consulting specialists for outsourcing accounting services and tax consulting, you will receive high-quality business support and reduce costs</p>
            </div>
        </div>
    )
}

export default CloseTasks
