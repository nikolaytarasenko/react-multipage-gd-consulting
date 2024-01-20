import styles from './Decor.module.css'
import decorImg from '../../assets/decor-wave.svg'

const Decor = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <img src={decorImg} alt="Decor Wave" />
            </div>
        </div>
    )
}

export default Decor