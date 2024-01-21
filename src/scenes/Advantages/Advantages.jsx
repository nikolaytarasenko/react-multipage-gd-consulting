import styles from './Advantages.module.css'

const Advantages = () => {
    return (
        <div className="section">
            <div className={styles.list}>
                <div className={styles.item}>
                    <h2 className={styles.title}>Advantages</h2>
                    <p className={styles.text}>Conducting accounting services in our company has a number of significant advantages, especially if your business does not belong to the large category.</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>The payment for accounting services is significantly less than the salary of a qualified accountant</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>G&D Consulting will be responsible for organizing accounting, searching for personnel for accounting, and other related tasks</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>G&D Consulting specialists are highly qualified in accounting & bookeeping</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>In addition to accounting support, you can count on qualified legal assistance in G&D Consulting</p>
                </div>
            </div>
        </div>
    )
}

export default Advantages