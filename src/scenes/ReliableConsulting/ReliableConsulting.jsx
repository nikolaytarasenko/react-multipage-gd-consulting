import styles from './ReliableConsulting.module.css'
import img from '../../assets/reliable-consulting.png'

const ReliableConsulting = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <h2 className={`section-title ${styles.title}`}>A reliable consulting company is the key to a successful business</h2>
                <img src={img} alt="Reliable Consulting" />
                <p className={styles.text}>Turning to G&D Consulting specialists for outsourcing accounting services and tax consulting, you will receive high-quality business support and reduce costs</p>
            </div>
        </div>
    )
}

export default ReliableConsulting