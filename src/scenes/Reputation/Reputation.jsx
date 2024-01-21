import styles from './Reputation.module.css'
import img from "../../assets/reputation.png";

const Reputation = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <h2 className={`section-title ${styles.title}`}>Impeccable reputation</h2>
                <img src={img} alt="Impeccable reputation" />
                <p className={styles.text}>A deep understanding of the specifics of each sector of the economy, a personal approach to the client, the use of the latest technologies and the best international practices allow us to provide top-quality services and consistently confirm our impeccable business reputation.</p>
            </div>
        </div>
    )
}

export default Reputation